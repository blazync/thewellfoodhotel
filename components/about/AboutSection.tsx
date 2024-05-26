"use client";
import React from "react";
import {
  Building2Icon,
  ChevronRightIcon,
  ThumbsUpIcon,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mt-20">
        <div className="">
          <div
            className="w-full px-[12px] mb-[24px] aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="h-full flex flex-col justify-center">
              <div className="text-left w-full lg:mb-[30px] mb-[12px]">
                <h2 className="text-[#000] font-medium leading-[1.2] 2xl:text-[40px] xl:text-[35px] xl:pb-0 lg:text-[30px] md:text-[28px] sm:text-[26px] text-[22px]">
                  The world&apos;s best{" "}
                  <span className="text-[#ed5b31]">Luxury Hotel</span>
                </h2>
              </div>
              <div className="xl:pb-[24px] pb-[15px] border-b border-solid border-[#e3e1e1]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  corrupti libero itaque, exercitationem nemo porro enim
                  officiis consectetur fugit debitis repellendus sed ratione
                  maxime adipisci eos vitae cupiditate neque expedita!
                </p>
              </div>
              <div className="flex flex-wrap mb-[-15px] ld-about-rows relative xl:py-[24px] py-[15px]">
                <div className="sm:w-1/2 w-full mb-[15px] sm:pr-[12px] pr-[0]">
                  <h4 className="mb-[12px] text-[#000] text-[18px] font-semibold leading-[1.25]">
                    <i className="ri-arrow-right-up-line mr-[5px] text-[18px] rotate-[-42deg]"></i>
                    Our Mission
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, veritatis est. Dicta modi incidunt cupiditate!
                  </p>
                </div>
                <div className="sm:w-1/2 w-full mb-[15px] sm:pl-[12px] pl-[0]">
                  <h4 className="mb-[12px] text-[#000] text-[18px] font-semibold leading-[1.25]">
                    <i className="ri-arrow-right-up-line mr-[5px] text-[18px] rotate-[-42deg]"></i>
                    Our Vision
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, veritatis est. Dicta modi incidunt cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-full h-full object-cover rounded-lg img"
            src="/hero-bg.jpg"
            alt="Hero Background"
            width={200}
            height={450}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="py-24 lg:py-32">
            <div className="max-w-2xl mx-auto">
              {/* Grid */}
              <div className="grid gap-12">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">Our vision</h2>
                  <p className="mt-3 text-muted-foreground">
                    For as long as there have been cities, the public square has
                    been a fundamental part of the urban landscape - an open,
                    approachable space to meet and engage with friends and
                    neighbours. Space aims to capture this spirit of bringing
                    people together in an exciting, welcoming environment.
                  </p>
                </div>
                <div className="space-y-6 lg:space-y-10">
                  {/* Icon Block */}
                  <div className="flex">
                    <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        High quality Co-Living spaces
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our fully furnished spaces are designed and
                        purpose-built with Co-Living in mind, featuring high-end
                        finishes and amenities that go far beyond traditional
                        apartment buildings.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Fostering vibrant communities
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our passion is bringing people together. Beyond creating
                        beautiful spaces, we provide shared experiences.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Simple and all-inclusive
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        We worry about the details so that our residents
                        don&apos;t have to. From our online application process
                        to simple, all-inclusive billing we aim to make the
                        living experience as effortless as possible.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
        </div>
        <div>
          <div className="py-24 lg:py-32">
            <div className="max-w-2xl mx-auto">
              {/* Grid */}
              <div className="grid gap-12">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    Our Mission
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    For as long as there have been cities, the public square has
                    been a fundamental part of the urban landscape - an open,
                    approachable space to meet and engage with friends and
                    neighbours. Space aims to capture this spirit of bringing
                    people together in an exciting, welcoming environment.
                  </p>
                </div>
                <div className="space-y-6 lg:space-y-10">
                  {/* Icon Block */}
                  <div className="flex">
                    <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        High quality Co-Living spaces
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our fully furnished spaces are designed and
                        purpose-built with Co-Living in mind, featuring high-end
                        finishes and amenities that go far beyond traditional
                        apartment buildings.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Fostering vibrant communities
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our passion is bringing people together. Beyond creating
                        beautiful spaces, we provide shared experiences.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Simple and all-inclusive
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        We worry about the details so that our residents
                        don&apos;t have to. From our online application process
                        to simple, all-inclusive billing we aim to make the
                        living experience as effortless as possible.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
