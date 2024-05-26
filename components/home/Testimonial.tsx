"use client";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useInView } from "framer-motion";

const testmonials = [
  {
    quote:
      '" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application " ',
    name: "Michael Gough",
    user: "Sundar",
    role: "CEO at Google",
    image: "/room1.webp",
  },
  ,
];
export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      // You can trigger actions here when the section becomes visible
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="flex justify-center items-center mx-10 lg:mx-0 pt-10"
    >
      <Carousel className="w-full max-w-lg ">
        <CarouselContent>
          {testmonials.map((testimonial, index) => (
            <CarouselItem key={`${testimonial?.name}-${index}`}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6 border border-blue-300 rounded-lg">
                    <section
                      className={`bg-white dark:bg-gray-900  ${
                        isInView ? "slide-up" : ""
                      }`}
                    >
                      <div className="max-w-screen-xl px-4  mx-auto text-center lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                          <div className="flex items-center justify-center">
                            <Quote size={40} className="text-center" />
                          </div>
                          <blockquote>
                            <p className="text-[16px] font-medium text-gray-900 dark:text-white">
                              {testimonial?.quote}
                            </p>
                          </blockquote>
                          <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <Image
                              className="w-6 h-6 rounded-full"
                              src={`${testimonial?.image}`}
                              alt={`${testimonial?.name}`}
                              width={677}
                              height={768}
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                {testimonial?.user}
                              </div>
                              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                {testimonial?.role}
                              </div>
                            </div>
                          </figcaption>
                          <div className="flex flex-row items-center justify-center pt-3">
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                          </div>
                        </figure>
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
