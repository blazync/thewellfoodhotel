import sendEmail from "@/lib/email";
import prismadb from "@/lib/prismadb";
import { User, auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const contactEnquiry = await prismadb.contactData.create({
            data: {
                ...body,
            },
        });

        // Send confirmation email to the user
        const contactConfirmationOptions = {
            to: body.email,
            subject: body.subject,
            data: { name: body.name, email: body.email, phone: '', message: body.message },
        };
        await sendEmail(contactConfirmationOptions);
        //Send Contact Request to Owner
        const contactRequestOptions = {
            to: String(process.env.OWNER_EMAIL),
            subject: body.subject,
            data: { name: body.name, email: body.email, phone: '', message: body.message },
        };
        await sendEmail(contactRequestOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error at /api/hotel POST", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {

        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }

        // Retrieve hotel owner ID associated with the provided hotel ID
        const hotelId = process.env.NEXT_PUBLIC_PRISMA_HOTEL_ID || '';
        const hotel = await prismadb.hotel.findUnique({
            where: {
                id: hotelId,
            },
            select: {
                userId: true,
            },
        });

        if (!userId || !hotel) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
        const isHotelOwner = userId === hotel.userId;
        if (!isHotelOwner) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const contactEnquiry = await prismadb.contactData.findMany();

        return NextResponse.json(contactEnquiry);

    } catch (error) {
        console.log('Error at /api/contact/ GET', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
