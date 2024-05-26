"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HotelWithRooms } from "../hotel/AddHotelForm";
import Image from "next/image";
import AmenityItem from "../AmenityItem";
import {
  Bath,
  BedIcon,
  BugPlay,
  Castle,
  Tv,
  Users,
  UtensilsCrossed,
  VolumeX,
  Wifi,
} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "react-day-picker";
import { useRouter } from "next/navigation";
import RoomCard from "./RoomCard";
import { Booking } from "@prisma/client";

export function RoomCarosual({
  hotel,
  bookings,
}: {
  hotel: HotelWithRooms;
  bookings?: Booking[];
}) {
  const router = useRouter();
  return (
    <div className="py-10 flex flex-col items-center justify-center bg-secondary p-5 rounded-lg pt-10 mt-10 ">
      <Carousel className="w-full max-w-[90%]">
        <CarouselContent className="-ml-1">
          {hotel &&
            hotel.rooms.length &&
            hotel.rooms.map((room) => (
              <RoomCard
                hotel={hotel}
                room={room}
                key={room.id}
                bookings={bookings}
              />
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
