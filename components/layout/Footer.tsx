"use client";
import { link } from "fs";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  LocateOffIcon,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Chatbot from "../Chatbot";

const Footer = () => {
  const router = useRouter();
  const socialLinks = [
    { label: "YouTube", icon: Facebook },
    { label: "Instagram", icon: Instagram },
    { label: "Twitter", icon: Twitter },
    { label: "Dribbble", icon: Facebook },
    { label: "Dribbble", icon: Linkedin },
    { label: "Dribbble", icon: Youtube },
  ];

  const menu1 = [
    { label: "Company", key: "header-1", link: "/" },
    { label: "Home", key: "item-1-2", link: "/blog" },
    { label: "Rooms", key: "item-1-3", link: "/contact" },
    { label: "About", key: "item-1-4", link: "/" },
    { label: "Contact", key: "item-1-5" },
  ];

  const menu2 = [
    { label: "Support", key: "header-2" },
    { label: "Help center", key: "item-2-1" },
    { label: "Terms of service", key: "item-2-2" },
    { label: "Legal", key: "item-2-3" },
    { label: "Privacy policy", key: "item-2-4" },
    { label: "Status", key: "item-2-5" },
  ];

  return (
    <div className="app flex items-end justify-center font-poppins">
      <div className="py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-black text-white w-full p-4 relative">
        <div className="  ">
          <div className="footer-img flex items-center">
            <Image
              src={"/wellfoodlogo.png"}
              alt=""
              className="w-20 md:w-16"
              width={20}
              height={20}
            />
            <span className=" text-2xl sm:pt-3 md:pt-0 lg:text-3xl font-bold pl-2 font-sans text-white pb-3">
              The Well Food Hotel
            </span>
          </div>

          <div className="footer-icons flex items-center space-x-3 ml-3 pb-5">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-9 h-9 p-2 rounded-full hover:text-purple-400 bg-white text-blue-700 cursor-pointer"
                />
              );
            })}
          </div>

          <div className="infos text-gray-400 pb-3">
            <span>Copyright © 2020 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="infos text-gray-400">
            <span>Developed By </span>
            <span className="text-white">Blazync Technologies</span>
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          <div>
            <h1 className="text-lg font-bold">Company</h1>
            <ul>
              {menu1.map((col, index) => {
                return (
                  <li key={col.key} className="text-gray-400 mb-1">
                    {col.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Support</h1>
            <ul>
              {menu2.map((col, index) => {
                return (
                  <li key={col.key} className="text-gray-400 mb-1">
                    {col.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6 mb-10"
          />
          <div className="flex infos text-gray-400  mb-2">
            <Mail className="mr-2" />
            <span>info@example.com</span>
          </div>
          <div className="flex infos text-gray-400">
            <Phone className="mr-2" />
            <span>+91 9470345827</span>
          </div>
          <div className="flex infos text-gray-400  mb-2">
            <LocateOffIcon className="mr-2" />
            <span>
              Birsa munda bus stand Kantatoli birsa munda, Ranchi, Jharkhand
              834001
            </span>
          </div>
          <div className="fixed bottom-5 right-10  bg-green-500 text-white rounded-full p-4 py-2 shadow-md">
            <Sheet>
              <SheetTrigger>
                <MessageCircle size={20} />
              </SheetTrigger>
              <SheetContent className="mt-20 rounded-lg overflow-y-200">
                <SheetHeader>
                  <SheetTitle>Chat With Our Assistant</SheetTitle>
                  <SheetDescription>
                    <Chatbot />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
