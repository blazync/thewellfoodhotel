"use client";
import * as React from "react";
import {
  Home,
  Store,
  Contact,
  Hotel,
  Factory,
  HotelIcon,
  ArrowDownNarrowWide,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";

import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NavMenu() {
  const router = useRouter();
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-3 text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center hover:text-yellow-500"
                onClick={() => router.push("/")}
              >
                <Home size={15} /> <span className="text-[14px]">Home</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center hover:text-yellow-500"
                onClick={() => router.push("/rooms")}
              >
                <Hotel size={15} /> <span className="text-[14px]">Hotel</span>
                <ChevronDown />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-10 top-0 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        className="w-300"
                        src="/wellfoodlogo.png"
                        alt="well food logo"
                        width={60}
                        height={30}
                      />
                      <div className="mb-2 text-lg font-medium">
                        The Well Food Hotel
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        We have the best hotel in Ranchi
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/hotel" title="Hotel">
                  Rooms Available in our Hotel.
                </ListItem>
                <ListItem href="/rooms" title="Rooms">
                  View the details of the Room!
                </ListItem>
                <ListItem href="/restaurant" title="Restaurant">
                  Restaurant at our Hotel.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center hover:text-yellow-500"
                onClick={() => router.push("/about")}
              >
                <Store size={15} /> <span className="text-[14px]">About</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center hover:text-yellow-500"
                onClick={() => router.push("/contact")}
              >
                <Contact size={15} />{" "}
                <span className="text-[14px]">Contact</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div onClick={() => router.push("/sign-in")}>
                <Button
                  variant="default"
                  className="text-white bg-yellow-600 hover:bg-blue-300"
                >
                  Sign In
                </Button>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
