"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Booking = {
  id: string;
  totalPrice: number;
  paymentStatus: boolean;
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

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "paymentStatus",
    header: ({ table }) => <p>Payment Status</p>,
    cell: ({ row }) => {
      const bookingId = row.original.id;
      const paymentStatus = row.original.paymentStatus;

      return (
        <Checkbox
          checked={paymentStatus}
          onCheckedChange={async (newValue) => {
            try {
              if (newValue !== "indeterminate") {
                // Update payment status via PATCH request
                await axios.patch(`/api/booking/${bookingId}`, {
                  paymentStatus: newValue,
                });
                // If update is successful, toggle the row's selection state
                row.toggleSelected(newValue);
              }
            } catch (error) {
              console.error("Error updating payment status:", error);
            }
          }}
          aria-label="Select row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "roomName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Room Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          End Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "hours",
    header: "Hours",
  },
  {
    accessorKey: "days",
    header: "Days",
  },
  {
    accessorKey: "breakFastIncluded",
    header: "Breakfast Included",
  },
  {
    accessorKey: "lunchIncluded",
    header: "Lunch Included",
  },
  {
    accessorKey: "dinnerIncluded",
    header: "Dinner Included",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "paymentId",
    header: "Payment ID",
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
