import HeroSection from "@/components/home/HeroSection";
import OurExpertiseSection from "@/components/home/OurExpertiseSection";
import { RoomCarosual } from "@/components/room/RoomCarousal";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Separator } from "@/components/ui/separator";
import axios from "axios";
import {
  BookOpenIcon,
  ChevronRightIcon,
  Facebook,
  FileQuestion,
  Instagram,
  Linkedin,
  Mail,
  MapIcon,
  MessagesSquareIcon,
  Phone,
  PhoneCall,
  Plus,
  Settings2Icon,
  TabletSmartphoneIcon,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getHotelById } from "@/services/getHotelById";
import Amenities from "@/components/home/Amenities";
import { getBookings } from "@/services/getBookings";
import Testimonial from "@/components/home/Testimonial";
import HomeInfo from "@/components/home/HomeInfo";
const Home = async () => {
  const hotelId = process.env.NEXT_PUBLIC_PRISMA_HOTEL_ID;
  if (!hotelId) return <div>Please provide a valid hotelId!</div>;
  const hotel = await getHotelById(hotelId);
  if (!hotel) return <div>OOps Hotel with given Id not found!</div>;
  const bookings = await getBookings(hotel.id);
  return (
    <div>
      <HeroSection />
      <hr className="flex-grow mb-10" />
      <div className="flex items-center">
        <hr className="flex-grow" />
        <span className="text-yellow-800 text-3xl font-bold">
          Book Your Room Now
        </span>
        <hr className="flex-grow" />
      </div>
      <RoomCarosual hotel={hotel} bookings={bookings} />

      <div className=" py-24 lg:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          {/* Icon Block */}
          <div className="text-center slide-up">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <TabletSmartphoneIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3 ">
              <h3 className="text-lg font-semibold ">Responsive</h3>
              <p className="mt-1 text-muted-foreground">
                Responsive, and mobile-first project on the web
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center slide-down">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <Settings2Icon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3 ">
              <h3 className="text-lg font-semibold ">Customizable</h3>
              <p className="mt-1 text-muted-foreground">
                Components are easily customized and extendable
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center slide-down">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <BookOpenIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Documentation</h3>
              <p className="mt-1 text-muted-foreground">
                Every component and plugin is well documented
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center slide-up">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <MessagesSquareIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">24/7 Support</h3>
              <p className="mt-1 text-muted-foreground">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      <Amenities />
      <Separator className="my-20" />
      <HomeInfo />
      <OurExpertiseSection />

      <div className="grid grid-rows-2 text-white text-center py-4 h-[30vh] rounded-lg bg-[#2e1065]">
        <h1 className="text-4xl font-bold ">Know More About Us</h1>
        <Button
          type="submit"
          className="mx-auto md:mx-60 bg-purple-500 px-10 hover:bg-blue-600"
        >
          Know More About Us
        </Button>
      </div>

      {/* Testimonial */}
      <Testimonial />

      {/* FAQ Section */}
      <h1 className="mt-20  text-center font-bold text-[28px]"> FAQs</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 rounded-md border-lg ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator className="border-2 " />

      <div className="mx-auto pt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center text-center">
        <div>
          <h1 className="text-2xl">Do you have any other queries?</h1>
        </div>
        <div>
          <Button
            type="submit"
            className="py-6 bg-purple-500 px-10 hover:bg-blue-600 text-lg"
          >
            Contact Us
          </Button>
        </div>
        <div className="flex justify-center">
          {/* Social media icons */}
          <div className="flex flex-wrap justify-center lg:justify-end">
            <Facebook className="me-2 mr-4 md:mr-10 mb-2 md:mb-0" size={30} />
            <Instagram className="me-2 mr-4 md:mr-10 mb-2 md:mb-0" size={30} />
            <Linkedin className="me-2 mr-4 md:mr-10 mb-2 md:mb-0" size={30} />
            <Twitter className="me-2 mr-4 md:mr-10 mb-2 md:mb-0" size={30} />
            <Youtube className="me-2 mr-4 md:mr-10 mb-2 md:mb-0" size={30} />
          </div>
        </div>
      </div>
      <Separator className="border-2 mt-10" />
    </div>
  );
};

export default Home;
