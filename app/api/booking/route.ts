
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {

        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }

        const bookingsWithRoomName = await prismadb.booking.findMany({
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
        console.log('Error at /api/booking GET', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}


export async function DELETE(req: Request, { params }: { params: { Id: string } }) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        if (!params.Id) {
            return new NextResponse("Booking Id is required", { status: 400 });
        }
        console.log(userId)
        return;
        const booking = await prismadb.booking.delete({
            where: {
                id: params.Id,
            },
        })

        return NextResponse.json(booking);
    } catch (error) {
        console.log('Error at /api/booking/Id DELETE', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}