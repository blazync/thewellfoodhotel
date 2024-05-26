import { NextRequest, NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';
import prismadb from '@/lib/prismadb';

interface PhoneNumber {
    id: string;
    type: string;
    number: string; // Add the 'number' property
}

interface EmailAddress {
    id: string;
    type: string;
    email: string; // Add the 'email' property
}

export async function GET(req: NextRequest) {
    try {
        // Authenticate the user
        const { userId } = auth();

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

        // Check if the user ID matches the hotel owner ID or exists in the booking table
        const isHotelOwner = userId === hotel.userId;
        // const isUserInBookings = await prismadb.booking.findFirst({
        //     where: {
        //         userId,
        //     },
        // });

        if (!isHotelOwner) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const usersResponse = await clerkClient.users.getUserList();
        const users = usersResponse.data.map(user => ({
            id: user.id,
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.emailAddresses?.[0]?.emailAddress || '',
            phoneNumber: user.phoneNumbers?.[0]?.phoneNumber || '',
        }));

        return NextResponse.json(users);
    } catch (error) {
        console.error('Error at /api/users GET', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
