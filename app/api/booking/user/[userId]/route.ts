import prismadb from "../../../../../lib/prismadb"
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {

        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }

        const bookingsWithRoomName = await prismadb.booking.findMany({
            where: {
                userId: userId,
            },
            include: {
                Room: {
                    select: {
                        title: true,
                    },
                },
            },
        });
        const formattedBookings = bookingsWithRoomName.map(booking => ({
            id: booking.id,
            userName: booking.userName,
            userId: booking.userId,
            email: booking.userEmail,
            roomId: booking.roomId,
            hotelId: booking.hotelId,
            hotelOwnerId: booking.hotelOwnerId,
            startDate: booking.startDate,
            endDate: booking.endDate,
            startTime: booking.startTime,
            endTime: booking.endTime,
            hours: booking.hours,
            days: booking.days,
            breakFastIncluded: booking.breakFastIncluded,
            dinnerIncluded: booking.dinnerIncluded,
            lunchIncluded: booking.lunchIncluded,
            currency: booking.currency,
            totalPrice: booking.totalPrice,
            paymentStatus: booking.paymentStatus,
            paymentId: booking.paymentId,
            orderId: booking.orderId,
            bookedAt: booking.bookedAt,
            roomName: booking.Room?.title || '',
        }));

        return NextResponse.json(formattedBookings);

    } catch (error) {
        console.log('Error at /api/booking/[userId] GET', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}





