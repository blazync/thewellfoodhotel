"use client";
import Image from "next/image";
import { HotelWithRooms } from "../hotel/AddHotelForm";
import { Booking } from "@prisma/client";
import RoomCard from "./RoomCard";
import { Separator } from "../ui/separator";

const RoomListClient = ({
  hotel,
  bookings,
}: {
  hotel: HotelWithRooms;
  bookings?: Booking[];
}) => {
  return (
    <div className="pt-10 bg-secondary p-10 rounded-lg">
      <h3 className="font-semibold text-xl md:text-3xl text-yellow-900">
        Room Available at our Hotel
      </h3>
      <h1>Explore All the rooms available in our Hotel</h1>
      {!!hotel.rooms.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10 ">
          {hotel.rooms?.map((room) => {
            return (
              <RoomCard
                hotel={hotel}
                room={room}
                key={room.id}
                bookings={bookings}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoomListClient;
