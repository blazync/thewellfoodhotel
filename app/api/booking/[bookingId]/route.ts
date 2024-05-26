import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { bookingId: string } }) {
    try {
        // Parse request body as JSON
        if (!params.bookingId) {
            return new NextResponse("BookingId is required", { status: 400 });
        }
        const { bookingId } = params;
        const body = await req.json();
        const { paymentStatus } = body;
        const id = bookingId;
        if (!bookingId || !paymentStatus) {
            return new NextResponse("Invalid request", { status: 400 });
        }

        // Check for user authentication (assuming user can update their own bookings)
        const user = await currentUser();
        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Update the booking in the database
        const updatedBooking = await prismadb.booking.update({
            where: { id },
            data: { paymentStatus },
        });

        return NextResponse.json(updatedBooking);
    } catch (error) {
        console.error("Error updating booking:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
