"use client";
import { useInView } from "framer-motion";
import { ChevronRightIcon, Mail, MapIcon, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const HomeInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      // You can trigger actions here when the section becomes visible
    }
  }, [isInView]);
  return (
    <div>
      <div className=" py-24 lg:py-12">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={ref} className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Get in touch with Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Have questions or need assistance? We are here to help! Feel free
              to reach out to us using the contact information below:
            </p>
            <Image
              className={`w-[800px] h-[200px] object-cover rounded-2xl scale-animation  ${
                isInView ? "slide-right" : ""
              }`}
              src="/hero-bg.jpg"
              alt="Hero Background"
              width={400}
              height={100}
            />
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                href="#"
              >
                Need Further Assistance Contact us on our provided Details
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </a>
            </p>
          </div>
          {/* End Col */}
          <div
            className={`space-y-6 lg:space-y-10  ${isInView ? "slide-up" : ""}`}
          >
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <Phone className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Industry-leading documentation
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration in a
                  fraction of the time.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                <Mail className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Developer community support
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We actively contribute to open-source projects—giving back to
                  the community through development, patches, and sponsorships.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <MapIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-muted-foreground">
                  From boarding passes to movie tickets, there&apos;s pretty
                  much nothing you can&apos;t do.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      <section className="section-about bg-[#f7f5f1] xl:py-[100px] py-[70px]">
        <div className="flex flex-wrap justify-between items-center mx-10  mb-[-24px]">
          <div
            className="lg:w-1/2 w-full mb-[24px] aos-init aos-animate "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image
              src="/hotel1.jpg"
              alt="about"
              className={`rounded-2xl scale-animation ${
                isInView ? "slide-right" : ""
              }`}
              width={800}
              height={1800}
            />
          </div>
          <div
            className={`lg:w-1/2 w-full pl-10 mb-[24px] ${
              isInView ? "slide-left" : ""
            }`}
          >
            <div className="lh-about-detail h-full flex flex-col justify-center items-start">
              <div className="text-left w-full 2xl:mb-[30px] xl:mb-[20px]">
                <h2 className="text-[#000] font-medium leading-[1.2] 2xl:text-[40px] xl:text-[35px] xl:pb-0 lg:text-[30px] md:text-[28px] sm:text-[26px] text-[22px]">
                  Find The Best City{" "}
                  <span className="text-[#ed5b31]">Branches</span>
                </h2>
              </div>
              <div className="lh-branches-paragraph 2xl:pb-[30px] xl:pb-[25px] pb-[20px] 2xl:pt-[0] xl:pt-[10px] pt-[20px]">
                <p>
                  This is the dolor sit amet consectetur adipisicing elit. Quasi
                  eos ducimus magnam unde fugit qui perferendis repudiandae modi
                  officia. Quae eaque fugiat minima quasi sapiente, vel dolore
                  numquam quo!
                </p>
              </div>
              <div className="lh-branches p-[24px] flex border-[1px] border-dashed border-[#000] rounded-[15px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col">
                <div className="cols sm:mb-[0] mb-[24px]">
                  <h4 className="mb-[15px] text-[#000] xl:text-[20px] text-[18px] font-bold leading-[1.25]">
                    <i className="ri-arrow-right-up-line text-[18px] py-[10px] rotate-[42]"></i>{" "}
                    Trusted Partners
                  </h4>
                  <p>
                    This is the dolor sit amet consectetur adipisicing elit.
                    Laborum, porro.
                  </p>
                </div>
                <div className="cols">
                  <h4 className="mb-[15px] text-[#000] xl:text-[20px] text-[18px] font-bold leading-[1.25]">
                    <i className="ri-arrow-right-up-line text-[18px] py-[10px] rotate-[42]"></i>{" "}
                    Laxury amenities
                  </h4>
                  <p>
                    This is the dolor sit amet consectetur adipisicing elit.
                    Laborum, porro.
                  </p>
                </div>
              </div>
              <div className="flex mt-[30px]">
                <a
                  className="m-[auto] duration-[0.3s] ease-in-out border-[1px] border-solid border-[#ed5b31] px-[15px] py-[5px] leading-[28px] bg-[#ed5b31] text-[#fff] relative z-[2] text-[15px] font-medium tracking-[1px] rounded-[10px] hover:bg-inherit hover:text-[#ed5b31]"
                  href="about.html"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeInfo;
