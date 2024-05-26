"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookIcon,
  Contact,
  HomeIcon,
  Hotel,
  Menu,
  Pencil,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

function AdminSidebar() {
  const router = useRouter();
  const hotelId = process.env.NEXT_PUBLIC_PRISMA_HOTEL_ID;
  return (
    <div>
      {/* Side Bar */}
      <Sheet>
        <SheetTrigger asChild>
          <div>
            <Button variant="outline">
              <Menu className="me-2" />
              Menu
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent side="left" className="pt-28 text-left">
          <SheetHeader>
            <SheetTitle>Admin Console</SheetTitle>
            <SheetDescription>This is the login view</SheetDescription>
          </SheetHeader>
          <div>
            <div
              onClick={() => router.push(`/dashboard`)}
              className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-5 hover:bg-blue-300"
            >
              <BookIcon size={20} />
              <span className="text-[14px]">Dashboard</span>
            </div>

            <div
              onClick={() => router.push(`/hotel/${hotelId}`)}
              className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-5 hover:bg-blue-300"
            >
              <Pencil size={20} />
              <span className="text-[14px]">Manage Hotel</span>
            </div>

            <div
              onClick={() => router.push(`/users`)}
              className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-5 hover:bg-blue-300"
            >
              <BookIcon size={20} />
              <span className="text-[14px]">View Users</span>
            </div>

            <div
              onClick={() => router.push(`/bookings`)}
              className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-5 hover:bg-blue-300"
            >
              <BookIcon size={20} />
              <span className="text-[14px]">View Bookings</span>
            </div>
            <div
              onClick={() => router.push(`/contacts`)}
              className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-5 hover:bg-blue-300"
            >
              <Contact size={20} />
              <span className="text-[14px]">Contact Enqueries</span>
            </div>
            <div
              onClick={() => router.push(`/`)}
              className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-5 hover:bg-blue-300"
            >
              <User size={20} />{" "}
              <span className="text-[14px]">Goto Home Page</span>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Go Back</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AdminSidebar;
