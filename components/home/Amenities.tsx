"use client";
import { useInView } from "framer-motion";
import { Hotel } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      // You can trigger actions here when the section becomes visible
    }
  }, [isInView]);
  return (
    <div className="bg-white rounded-2xl p-4">
      <div
        ref={ref}
        className="flex flex-row items-baseline justify-center py-5"
      >
        <h1 className="text-2xl">
          Amenties At{" "}
          <span className="text-red-600" font-bold style={{ color: "red" }}>
            Our hotel
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isInView ? "slide-right" : ""
          }`}
        >
          <div className="amenities-box xl:w-[50%] xl:p-0 w-[100%] p-[24px] flex items-center justify-center">
            <Image
              width={80}
              height={30}
              src="/room1.webp"
              alt="amenities_1"
              className={`w-full h-full xl:rounded-none rounded-[15px] slide-fade-animation `}
            />
          </div>
          <div className="amenities-box xl:w-[50%] xl:p-0 w-[100%] px-[24px] pb-[24px] flex items-center justify-center">
            <div className="lh-amenities-in relative xl:p-[24px] px-[0]">
              <h4 className="side-number absolute xl:top-[24px] xl:right-[24px] top-[0px] right-[0px] text-[55px] font-extrabold leading-[55px] text-[#0000000d]">
                01
              </h4>
              <div className="lh-top-dish pb-[15px]">
                <Hotel />
              </div>
              <div className="amenities-contain">
                <h4 className="amenities-heading xl:text-[22px] text-[18px] font-bold text-[#000] leading-[1.2]">
                  Our Restaurant
                </h4>
                <p className="text-[14px] lg:py-[15px] md:py-[10px] py-[5px]">
                  This is the dolor sit amet adipisicing elit. Ducimus corrupti
                  sit amet tempore placeat ipsa.
                </p>
                <a
                  href="facilities.html"
                  className="no-underline uppercase text-[12px] text-[#000] font-bold hover:text-[#000]"
                >
                  Read more
                  <i className="ri-arrow-right-line text-[15px] ml-[2px] duration-[0.2s] ease-in-out"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2  ${
            isInView ? "slide-left" : ""
          }`}
        >
          <div className="amenities-box xl:w-[50%] xl:p-0 w-[100%] p-[24px] flex items-center justify-center">
            <Image
              width={80}
              height={30}
              src="/room1.webp"
              alt="amenities_1"
              className="w-full h-full xl:rounded-none rounded-[15px]"
            />
          </div>
          <div className="amenities-box xl:w-[50%] xl:p-0 w-[100%] px-[24px] pb-[24px] flex items-center justify-center">
            <div className="lh-amenities-in relative xl:p-[24px] px-[0]">
              <h4 className="side-number absolute xl:top-[24px] xl:right-[24px] top-[0px] right-[0px] text-[55px] font-extrabold leading-[55px] text-[#0000000d]">
                01
              </h4>
              <div className="lh-top-dish pb-[15px]">
                <Hotel />
              </div>
              <div className="amenities-contain">
                <h4 className="amenities-heading xl:text-[22px] text-[18px] font-bold text-[#000] leading-[1.2]">
                  Our Restaurant
                </h4>
                <p className="text-[14px] lg:py-[15px] md:py-[10px] py-[5px]">
                  This is the dolor sit amet adipisicing elit. Ducimus corrupti
                  sit amet tempore placeat ipsa.
                </p>
                <a
                  href="facilities.html"
                  className="no-underline uppercase text-[12px] text-[#000] font-bold hover:text-[#000]"
                >
                  Read more
                  <i className="ri-arrow-right-line text-[15px] ml-[2px] duration-[0.2s] ease-in-out"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
