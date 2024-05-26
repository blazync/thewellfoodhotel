import prismadb from "./../../../../lib/prismadb";
import { calculatePrice } from "./../../../../services/calculatePrice";

import { randomUUID } from "crypto";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import sendEmail from "@/lib/email";

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const paymentId = randomUUID();
        const orderId = randomUUID();
        const body = await req.json();
        const { userId, roomId, hotelId, bookingData } = body;
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const params = {
            totalPrice: bookingData.totalPrice,
            breakFastIncluded: bookingData.breakFastIncluded,
            lunchIncluded: bookingData.lunchIncluded,
            dinnerIncluded: bookingData.dinnerIncluded,
            startDate: bookingData.startDate,
            endDate: bookingData.endDate,
            startTime: bookingData.startTime,
            endTime: bookingData.endTime,
            hours: bookingData.hours,
            days: bookingData.days,
        };
        const roomData = bookingData.room;
        const tempTotalPrice = calculatePrice(roomData, params);
        if (tempTotalPrice === tempTotalPrice) {
            const room = await prismadb.room.findUnique({
                where: { id: roomId },
            });

            if (!room) {
                return new NextResponse("Room not found", { status: 404 });
            }

            // Assuming you want to save this booking data now
            const booking = await prismadb.booking.create({
                data: {
                    userId: userId,
                    Hotel: { connect: { id: hotelId } },
                    Room: { connect: { id: roomId } },
                    hotelOwnerId: bookingData.hotelOwnerId,
                    startDate: bookingData.startDate,
                    endDate: bookingData.endDate,
                    startTime: bookingData.startTime,
                    endTime: bookingData.endTime,
                    hours: bookingData.hours,
                    days: bookingData.days,
                    breakFastIncluded: bookingData.breakFastIncluded,
                    lunchIncluded: bookingData.lunchIncluded,
                    dinnerIncluded: bookingData.dinnerIncluded,
                    totalPrice: bookingData.totalPrice,
                    currency: bookingData.currency,
                    userEmail: user.emailAddresses[0].emailAddress,
                    userName: user.fullName || "User",
                    paymentId: paymentId,
                    orderId: orderId,
                },
            });

            // Send confirmation email to the user
            const bookinConfirmationOptions = {
                to: user.emailAddresses[0].emailAddress,
                subject: "Booking Confirmation",
                data: {
                    name: user.fullName || "User",
                    email: user.emailAddresses[0].emailAddress,
                    phone: String(user.primaryPhoneNumber),
                    message: `Your booking is confirmed! Your duration of stay will be ${booking.startDate}-${booking.endDate}`,
                },
            };
            await sendEmail(bookinConfirmationOptions);
            //Send Booking Request to Owner
            const bookingRequestOptions = {
                to: String(process.env.OWNER_EMAIL),
                subject: "Booking Request",
                data: {
                    name: user.fullName || "User",
                    email: user.emailAddresses[0].emailAddress,
                    phone: String(user.primaryPhoneNumber),
                    message: `You have a new Booking Request! Duration of stay will be ${booking.startDate}-${booking.endDate}`,
                },
            };
            await sendEmail(bookingRequestOptions);

            return NextResponse.json(booking);
        } else {
            return new NextResponse("Getting Unverified Data", { status: 403 });
        }
    } catch (error) {
        console.log("Error at /api/booking/Id POST", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
