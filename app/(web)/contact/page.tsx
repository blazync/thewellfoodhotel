"use client";
import ContactSection from "@/components/contact/ContactSection";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex h-[200px] sm:h-[100px] justify-center items-center flex-col lg:pb-[400px] pb-[300px]">
        <div className="w-full absolute h-screen bg-[url('https://utfs.io/f/814015d2-16e6-4f44-81ad-cdd5a44ef342-1sps52.webp')] bg-cover bg-center">
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
      <ContactSection />
      <Button
        type="submit"
        onClick={async () => {
          const response = await axios.post("/api/email", {
            subject: "sunil",
            to: "sksunil0608@gmaoil.com",
            text: "faisnf",
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Contact;
