"use client";
import React, { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";
import { UserMenu } from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "../ui/button";
import { Home, Menu, User } from "lucide-react";
import AdminSidebar from "../AdminSidebar";
import UserSidebar from "../UserSidebar";

const NavBar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useUser();
  const router = useRouter();
  const isMobileMenu = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (user && user.organizationMemberships[0].role === "org:admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return (
    <div className="z-[90] sticky top-0 py-2 ... bg-black">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2"
            onClick={() => router.push("/")}
          >
            <Image
              className=""
              src="/wellfoodlogo.png"
              alt="well food logo"
              width={60}
              height={30}
            />
            <div className="hidden sm:block text-[24px] italic text-yellow-400 font-bold">
              <Image
                src="/wellfoodtransparent.png"
                alt="well food logo"
                width={200}
                height={80}
                className=""
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <ModeToggle />
            </div>
            {isMobileMenu ? (
              <>
                <SignedIn>
                  {isSidebarOpen ? (
                    isAdmin ? (
                      <AdminSidebar />
                    ) : (
                      <UserSidebar />
                    )
                  ) : (
                    ""
                  )}
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <MobileMenu />
                </SignedOut>
              </>
            ) : (
              <>
                <SignedIn>
                  {isSidebarOpen ? (
                    isAdmin ? (
                      <AdminSidebar />
                    ) : (
                      <UserSidebar />
                    )
                  ) : (
                    ""
                  )}
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <NavMenu />
                </SignedOut>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
