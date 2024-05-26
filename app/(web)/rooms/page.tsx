import AmenityItem from "@/components/AmenityItem";
import { HotelWithRooms } from "@/components/hotel/AddHotelForm";
import HotelPhotoGallery from "@/components/hotel/HotelPhotoGallery";
import RoomCard from "@/components/room/RoomCard";
import RoomListClient from "@/components/room/RoomListClient";
import { Button } from "@/components/ui/button";
import { getBookings } from "@/services/getBookings";
import { getHotelById } from "@/services/getHotelById";

import React from "react";

interface HotelDetailsProps {
  params: {
    hotel: HotelWithRooms;
  };
}
const RoomList = async () => {
  const hotelId = process.env.NEXT_PUBLIC_PRISMA_HOTEL_ID;
  if (!hotelId) return <div>Please provide a valid hotelId!</div>;
  const hotel = await getHotelById(hotelId);
  if (!hotel) return <div>OOps Hotel with given Id not found!</div>;
  const bookings = await getBookings(hotel.id);

  return (
    <div>
      <div className="flex h-[200px] sm:h-[100px] justify-center items-center flex-col lg:pb-[400px] pb-[300px]">
        <div className="w-full absolute h-screen bg-[url('/room1.webp')] bg-cover bg-center">
          <div
            className="w-full h-full flex  justify-center items-center 
             bg-gray-600/30 backdrop-brightness-75"
          >
            <div className="pt-60 w-1/2 text-white font-bold  text-center">
              <p className="text-4xl  ">Restaurants</p>
              <span className="text-white  text-center">Home/about</span>
            </div>
          </div>
        </div>
      </div>
      <HotelPhotoGallery />

      <RoomListClient hotel={hotel} bookings={bookings} />
    </div>
  );
};

export default RoomList;
