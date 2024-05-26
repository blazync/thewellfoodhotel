"use client";
import { useState, useEffect } from "react";
import { Booking, columns } from "./columns";
import { useUser } from "@clerk/nextjs";
import { DataTable } from "./data-table";
import axios from "axios";
import AdminLayout from "@/app/AdminLayout";
type MyBookingsProps = {
  id: string;
  email: string;
  roomName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  hours: number;
  days: number;
  breakFastIncluded: boolean;
  dinnerIncluded: boolean;
  lunchIncluded: boolean;
  currency: string;
  paymentId: string;
  orderId: string;
};

export const MyBookings: React.FC<MyBookingsProps> = () => {
  const [data, setData] = useState<Booking[]>([]);
  const { user } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.id) {
          // Check if user and user.id are defined
          const response = await axios.get(`/api/booking/user/${user.id}`);
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, [user]);
  console.log(data);
  return (
    <div className="container mx-auto">
      <AdminLayout>
        <h1 className="text-2xl text-center font-bold pb-10">Booking Data</h1>
        <DataTable columns={columns} data={data} />
      </AdminLayout>
    </div>
  );
};

export default MyBookings;
