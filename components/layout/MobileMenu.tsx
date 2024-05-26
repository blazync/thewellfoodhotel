"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useRouter } from "next/navigation";
import {
  Apple,
  ChevronDown,
  ChevronUp,
  Contact,
  FolderOutput,
  HomeIcon,
  Hotel,
  HotelIcon,
  MenuIcon,
  Store,
} from "lucide-react";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const router = useRouter();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="  text-white text-2xl" />
        </SheetTrigger>
        <SheetContent className="top-[100px] rounded-md">
          <div onClick={() => router.push("/")}>
            <SheetClose>
              <div className="flex items-center gap-2 my-2  px-2 rounded-lg hover:text-blue-400">
                <HomeIcon size={20} /> <span className="text-[14px]">Home</span>
              </div>
            </SheetClose>
          </div>

          <div className="relative">
            <div
              className="flex items-center gap-2 my-2   px-2 rounded-lg hover:text-blue-400"
              onClick={toggleDropdown}
            >
              <Hotel size={20} />
              <span className="text-[14px]">Rooms</span>
              {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </div>

            {dropdownOpen && (
              <div className="absolute left-0 mt-1 w-full rounded-lg shadow-lg bg-white z-50">
                <div
                  className="flex px-4 py-4 hover:bg-gray-100"
                  onClick={() => router.push("/room-details")}
                >
                  <HotelIcon size={20} className="mr-2" />
                  Room Details
                </div>
                <div
                  className="flex px-4 hover:bg-gray-100"
                  onClick={() => router.push("/restaurant")}
                >
                  <Apple size={20} className="mr-2" />
                  Restaurant
                </div>
              </div>
            )}
          </div>

          <div onClick={() => router.push("/about")}>
            <SheetClose>
              <div className="flex items-center gap-2 my-2   px-2 rounded-lg hover:text-blue-400">
                <Store size={20} /> <span className="text-[14px]">About</span>
              </div>
            </SheetClose>
          </div>
          <div className="" onClick={() => router.push("contact")}>
            <SheetClose>
              <div className="flex items-center gap-2 my-2   px-2 rounded-lg hover:text-blue-400">
                <Contact size={20} />
                <span className="text-[14px]"> Contact</span>
              </div>
            </SheetClose>
          </div>
          <div className="my-4">
            <SheetClose>
              <Button
                onClick={() => router.push("/sign-in")}
                variant="default"
                className="py-2 px-28 border border-black hover:bg-red-700 hover:text-white bg-white text-black text-[14px] "
              >
                Sign In
              </Button>
            </SheetClose>
          </div>
          <div className="my-2">
            <SheetClose>
              <Button
                variant="outline"
                className="py-3 px-28 -blue-600 bg-black text-white text-[14px]"
                onClick={() => router.push("/sign-up")}
                size="sm"
              >
                Signup
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
