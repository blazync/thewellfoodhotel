"use client";
// components/HeroSection.js
import Image from "next/image";
import CounterCard from "./CounterCard";
import { motion, useInView } from "framer-motion";

import { useEffect, useRef } from "react";
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      // You can trigger actions here when the section becomes visible
    }
  }, [isInView]);
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2 px-4 items-center gap-12 container mx-auto lg:py-20 py-5 p-10 rounded-2xl  w-full  bg-cover">
      <div ref={ref} className="py-10 md:py-2 h-full ">
        <h1
          className={`font-heading mb-6 font-bold text-5xl md:3xl ${
            isInView ? "slide-left" : ""
          }`}
        >
          Explore Our Exquisite Hotel
        </h1>

        <p
          className={`text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg ${
            isInView ? "slide-right" : ""
          }`}
        >
          Experience an Exquisite Hotel Immersed in Rich History and Timeless
          Elegance.
        </p>

        <button className="px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-purple-500 rounded-lg md:rounded-2xl shadow-sm shadow-primary text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all ">
          Get Started
        </button>

        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="md:text-xl text-center text-sm">Basic Room</p>
            <CounterCard duration={2000} endValue={20} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="md:text-xl text-center text-sm">Luxury Room</p>
            <CounterCard duration={2000} endValue={6} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="md:text-xl text-center text-sm">Hotel</p>
            <CounterCard duration={2000} endValue={3} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center item-center gap-8 grid-cols-1">
        <div className=" rounded- xl overflow-hidden h-48 text-center md:ml-3">
          <Image
            src="/room1.webp"
            alt="hero-1"
            width={620}
            height={300}
            className="img scale-animation "
          />
        </div>

        <div className="grid grid-cols-2 pt-4 gap-8 h-48">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/hotel1.jpg"
              alt="hero-2"
              width={300}
              height={300}
              className="img scale-animation"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/hotel1.jpg  "
              alt="hero-3"
              width={300}
              height={300}
              className="img scale-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
