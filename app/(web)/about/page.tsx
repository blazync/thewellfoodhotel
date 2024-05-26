"use client";
import AboutSection from "@/components/about/AboutSection";
import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";
const About = () => {
  return (
    <div>
      <div className="flex h-[200px] sm:h-[100px] justify-center items-center flex-col lg:pb-[400px] pb-[300px]">
        <div className="w-full absolute h-screen bg-[url('/room1.webp')] bg-cover bg-center">
          <div
            className="w-full h-full flex  justify-center items-center 
             bg-gray-600/30 backdrop-brightness-75"
          >
            <div className="pt-60 w-1/2 text-white font-bold  text-center">
              <p className="text-4xl  ">About Us</p>
              <span className="text-white  text-center">Home/about</span>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default About;
