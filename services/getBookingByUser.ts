import prismadb from "@/lib/prismadb";
import axios from "axios";
export const getBookingByUser = async (userId: string) => {
    console.log("this is called")
    try {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)

        const bookings = await prismadb.booking.findMany({
            where: {
                userId: userId,
            }
        })
        console.log(bookings, "kvgkubjb")
        return bookings;
    }
    catch (error: any) {
        throw new Error(error)
    }
}