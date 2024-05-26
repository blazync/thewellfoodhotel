import { Room } from "@prisma/client";

export interface BookingParams {
    breakFastIncluded: boolean,
    lunchIncluded: boolean,
    dinnerIncluded: boolean,
    hours: number,
    days: number,
}

export const calculatePrice = (room: Room, params: BookingParams): number => {
    let tempTotalPrice = 0;
    const { days, hours, breakFastIncluded, lunchIncluded, dinnerIncluded } = params;

    // Calculate base room price based on number of days or default to 1 day
    const bookingDays = days || 1;
    const roomPrice = days === 1 && hours && hours > 0 && hours <= 23 ? room.perHourPrice * hours : room.roomPrice * bookingDays;

    tempTotalPrice += roomPrice;

    // Add additional costs for meals if included
    if (breakFastIncluded && room.breakFastPrice) {
        tempTotalPrice += room.breakFastPrice * bookingDays;
    }
    if (lunchIncluded && room.lunchPrice) {
        tempTotalPrice += room.lunchPrice * bookingDays;
    }
    if (dinnerIncluded && room.dinnerPrice) {
        tempTotalPrice += room.dinnerPrice * bookingDays;
    }

    return tempTotalPrice;
};
