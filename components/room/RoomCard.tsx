"use client";
import { Hotel, Booking, Room } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Image from "next/image";
import AmenityItem from "../AmenityItem";
import {
  Bath,
  BedIcon,
  Castle,
  Loader2,
  PencilIcon,
  Plus,
  Trash,
  Tv,
  Users,
  UtensilsCrossed,
  VolumeX,
  Wand,
  Wifi,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import AddRoomForm from "./AddRoomForm";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { DatePickerWithRange } from "../DateRangePicker";
import { DateRange } from "react-day-picker";
import {
  differenceInCalendarDays,
  differenceInHours,
  eachDayOfInterval,
} from "date-fns";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useAuth } from "@clerk/nextjs";
import useBookRoom from "@/hooks/useBookRoom";
import calculateTimeDifference from "@/services/calculateTimeDifference";
import Razorpay from "razorpay";
import { User, auth, currentUser } from "@clerk/nextjs/server";
import path from "path";

interface AddRoomFormProps {
  hotel: Hotel & {
    rooms: Room[];
  };
  room: Room;
  bookings?: Booking[];
}
const RoomCard = ({ hotel, room, bookings = [] }: AddRoomFormProps) => {
  const { setRoomData, paymentId, setPaymentId, orderId, setOrderId } =
    useBookRoom();
  const [isLoading, setIsLoading] = useState(false);
  const [isBookingDialogueOpen, setBookingDialogueOpen] = useState(true);
  const pathname = usePathname();
  const [openAddRoom, setOpenAddRoom] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>();
  const [time, setTime] = useState<{
    from: string | undefined;
    to: string | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [totalPrice, setTotalPrice] = useState(room.roomPrice);
  const [includeDinner, setIncludeDinner] = useState(false);
  const [includeLunch, setIncludeLunch] = useState(false);
  const [includeBreakFast, setIncludeBreakFast] = useState(false);
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(0);
  const [bookingIsLoading, setBookingIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isRoomDeleting, setIsRoomDeleting] = useState(false);
  const { toast } = useToast();
  const { userId } = useAuth();

  const router = useRouter();
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_ID;
  if (!keyId) {
    toast({
      variant: "destructive",
      description: "Payment not authorized",
    });
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await currentUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const calculateDay = () => {
      if (date?.from && date?.to) {
        const dayCount = differenceInCalendarDays(date.to, date.from);
        setDays(dayCount);
      }
      return false;
    };
    calculateDay();
  }, [date?.to, date?.from, toast]);
  console.log(days, hours);
  useEffect(() => {
    const calculatHour = () => {
      if (time?.from && time?.to) {
        const timeCount = calculateTimeDifference(time.to, time.from) || 24;
        setHours(timeCount);
      }
      return false;
    };
    calculatHour();
  }, [time?.to, time?.from, toast]);
  useEffect(() => {
    const calculatePrice = () => {
      let tempTotalPrice = 0;
      // If Days or Hours are defined
      if (days) {
        // If Booking is for only one day
        if (days === 1) {
          if (hours && hours != 0 && hours <= 23) {
            // Booking price by hour
            tempTotalPrice += hours * room.perHourPrice;
          } else {
            // If hours is invalid then do booking by day.
            tempTotalPrice += days * room.roomPrice;
          }
          if (includeBreakFast && room.breakFastPrice) {
            tempTotalPrice += room.breakFastPrice;
          }
          if (includeLunch && room.lunchPrice) {
            tempTotalPrice += room.lunchPrice;
          }
          if (includeDinner && room.dinnerPrice) {
            tempTotalPrice += room.dinnerPrice;
          }
          setTotalPrice(tempTotalPrice);
        } else {
          // If booking is for more than one day
          tempTotalPrice += days * room.roomPrice;

          if (includeBreakFast && room.breakFastPrice) {
            tempTotalPrice += days * room.breakFastPrice;
          }
          if (includeLunch && room.lunchPrice) {
            tempTotalPrice += days * room.lunchPrice;
          }
          if (includeDinner && room.dinnerPrice) {
            tempTotalPrice += days * room.dinnerPrice;
          }
          setTotalPrice(tempTotalPrice);
        }
      } else {
        console.log("tjhis is clled");
        // If dasy and hours are not defined
        tempTotalPrice += room.roomPrice;

        if (includeBreakFast && room.breakFastPrice) {
          tempTotalPrice += room.breakFastPrice;
        }
        if (includeLunch && room.lunchPrice) {
          tempTotalPrice += room.lunchPrice;
        }
        if (includeDinner && room.dinnerPrice) {
          tempTotalPrice += room.dinnerPrice;
        }
        setTotalPrice(tempTotalPrice);
      }
    };

    calculatePrice();
  }, [
    date?.from,
    date?.to,
    time.from,
    time.to,
    days,
    hours,
    room.dinnerPrice,
    room.roomPrice,
    room.breakFastPrice,
    room.perHourPrice,
    room.lunchPrice,
    includeBreakFast,
    includeLunch,
    includeDinner,
    toast,
  ]);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    const roomBookings = bookings.filter(
      (booking) => booking.roomId === room.id
    );

    roomBookings.forEach((booking) => {
      const range = eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });

      dates = [...dates, ...range];
    });
    return dates;
  }, [bookings]);
  const handleRoomDelete = async (hotel: Room) => {
    setIsRoomDeleting(true);
    const getImageKey = (src: string) =>
      src.substring(src.lastIndexOf("/") + 1);
    try {
      const imageKey = getImageKey(room.image);
      axios.post("/api/uploadthing/delete", { imageKey });
      await axios.delete(`/api/room/${room.id}`);
      setIsRoomDeleting(false);
      toast({
        variant: "success",
        description: "Room Deleted",
      });
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: `Room Deletion could not be completed:${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleBookRoom = async () => {
    if (!userId) {
      toast({
        variant: "destructive",
        description: "Oops! Make sure you are logged In",
      });
      return router.push("/sign-in");
    }

    if (!hotel.userId) {
      toast({
        variant: "destructive",
        description: "Something went wrong! Refresh the page",
      });
      return;
    }

    if (date?.from && date?.to && time?.from && time?.to) {
      const bookingRoomData = {
        userId: userId,
        hotelOwnerId: hotel.userId,
        room,
        totalPrice,
        breakFastIncluded: includeBreakFast,
        lunchIncluded: includeLunch,
        dinnerIncluded: includeDinner,
        startDate: date.from,
        endDate: date.to,
        startTime: time.from,
        currency: "INR",
        endTime: time.to,
        hours: hours,
        days: days,
      };

      setRoomData(bookingRoomData);

      try {
        setBookingIsLoading(true);

        const response = await axios.post("/api/booking/create", {
          userId,
          roomId: room.id,
          hotelId: hotel.id,
          bookingData: bookingRoomData,
        });
        console.log(response);
        if (response.status === 200) {
          toast({
            variant: "success",
            description:
              "Booking confirmed! You will be redirected to dashboard",
          });
          router.push(`/my-bookings`);
        } else {
          toast({
            variant: "destructive",
            description: "Failed to confirm booking. Please try again.",
          });
        }
      } catch (error) {
        console.error("Error confirming booking:", error);
        toast({
          variant: "destructive",
          description: "An error occurred. Please try again later.",
        });
      } finally {
        setBookingIsLoading(false);
      }
    } else {
      toast({
        variant: "destructive",
        description: "Oops! Make Sure you have selected date and time",
      });
    }
  };

  const isRoomDetailsPage = !pathname.includes(
    "hotel/18604ba9-34ec-4450-bd30-3bd3c10cabd5"
  );
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{room?.title}</CardTitle>
        <CardDescription>{room?.description} </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="aspect-square overflow-hidden relative h-[200px] rounded">
          <Image
            fill
            src={"/hotel1.jpg"}
            alt={room.title}
            className="object-cover image-pulse scale-animation"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 content-start text-sm">
          <AmenityItem>
            <BedIcon className="h-4 w-4" />
            {room.bedCount} Bed{"(s)"}
          </AmenityItem>

          <AmenityItem>
            <Users className="h-4 w-4" />
            {room.guestCount} Guest{"(s)"}
          </AmenityItem>

          <AmenityItem>
            <Bath className="h-4 w-4" />
            {room.bathroomCount} Bathroom{"(s)"}
          </AmenityItem>
          {room.roomService && (
            <AmenityItem>
              <UtensilsCrossed className="h-4 w-4" />
              {room.roomService}24x7 Services
            </AmenityItem>
          )}

          {room.TV && (
            <AmenityItem>
              <Tv className="h-4 w-4" />
              {room.TV}TV
            </AmenityItem>
          )}

          {room.freeWifi && (
            <AmenityItem>
              <Wifi className="h-4 w-4" />
              {room.freeWifi}Free Wifi
            </AmenityItem>
          )}

          {room.airCondition && (
            <AmenityItem>
              <UtensilsCrossed className="h-4 w-4" />
              {room.airCondition}AC
            </AmenityItem>
          )}

          {room.soundProffed && (
            <AmenityItem>
              <VolumeX className="h-4 w-4" />
              {room.soundProffed}soundProffed
            </AmenityItem>
          )}

          {room.cityView && (
            <AmenityItem>
              <Castle className="h-4 w-4" />
              {room.cityView}City View
            </AmenityItem>
          )}
        </div>
        <Separator />
        <div className="flex justify-center gap-4">
          <div>
            Room Price: <span className="font-bold">₹{room.roomPrice}</span>
            <span className="text-xs">
              {`/Days ( ₹${room.perHourPrice} /Hour)`}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="w-full">
          {isRoomDetailsPage ? (
            <div className="">
              {/* Grid 1 */}
              <div>
                <div className="mb-4">Select the date range of your stay!</div>
                <DatePickerWithRange
                  date={date}
                  setDate={setDate}
                  time={time}
                  setTime={setTime}
                  disabledDates={disabledDates}
                />
              </div>
              {/* Grid 2 */}
              <div>
                <div className="mt-4 mb-2">Do you Want Food?</div>
                <div className="grid grid-cols-2 md:grid cols-3">
                  {room.breakFastPrice > 0 && (
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="breakFast"
                          onCheckedChange={(value) =>
                            setIncludeBreakFast(!!value)
                          }
                        />
                        <label htmlFor="breakFast">Include BreakFast</label>
                      </div>
                    </div>
                  )}
                  {room.lunchPrice > 0 && (
                    <div>
                      <div className="flex items-center space-x-2 ml-2">
                        <Checkbox
                          id="lunch"
                          onCheckedChange={(value) => setIncludeLunch(!!value)}
                        />
                        <label htmlFor="lunch">Include Lunch</label>
                      </div>
                    </div>
                  )}
                  {room.dinnerPrice > 0 && (
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dinner"
                          onCheckedChange={(value) => setIncludeDinner(!!value)}
                        />
                        <label htmlFor="dinner">Include Dinner</label>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="py-4 w-full text-center">
                Total Price: <span className="font-bold">{totalPrice}</span> for
                <span className="text-bold">
                  {hours !== 0 && days === 1
                    ? ` ${hours} Hours`
                    : ` ${days}  Days`}
                </span>
              </div>
              <div className="">
                <Dialog
                  open={isBookingDialogueOpen}
                  onOpenChange={setBookingDialogueOpen}
                >
                  <DialogTrigger className="w-full">
                    <Button className="w-full" disabled={bookingIsLoading}>
                      {bookingIsLoading ? (
                        <Loader2 className="mr-2 w-4 h-4" />
                      ) : (
                        <Wand className="mr-2 w-4 h-4" />
                      )}

                      {bookingIsLoading ? "Loading" : "Book Room"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you Ready to Book Room?</DialogTitle>
                      <DialogDescription>
                        Send Payments to Teh Well Food Hotel Owner UPI Address:
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                      <div className="flex items-center justify-center">
                        <Button
                          className="bg-green-600 text-white"
                          disabled={bookingIsLoading}
                          type="button"
                          variant="default"
                          onClick={() => {
                            handleBookRoom();
                          }}
                        >
                          I will Book Room
                        </Button>
                      </div>
                      <div className="flex items-center justify-center">
                        <Button
                          type="submit"
                          variant="destructive"
                          onClick={() => {
                            setBookingDialogueOpen(false);
                          }}
                        >
                          I will Look Elsewhere!
                        </Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ) : (
            // Room Delete and Update Logic if Room Admin Page
            <div className="flex w-full justify-between">
              <Dialog>
                <DialogTrigger>
                  <Button variant="destructive">
                    {isRoomDeleting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash className=" mr-2 h-4 w-4" />
                        Delete
                      </>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      disabled={isRoomDeleting}
                      type="button"
                      variant="destructive"
                      onClick={() => handleRoomDelete(room)}
                    >
                      Delete Room
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog open={openAddRoom} onOpenChange={setOpenAddRoom}>
                <DialogTrigger>
                  <Button
                    type="button"
                    variant="outline"
                    className="max-w-[150px]"
                  >
                    <PencilIcon className="mr-2 h-4 w-4" />
                    Update Room
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[900px] w-[90%] mt-20">
                  <DialogHeader className="px-2">
                    <DialogTitle>Update Room</DialogTitle>
                    <DialogDescription>
                      Make Changes to the Room
                    </DialogDescription>
                    <AddRoomForm
                      hotel={hotel}
                      room={room}
                      handleDialougueOpen={() => ""}
                    />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
