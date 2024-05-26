import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
const RestaurantTab = () => {
  return (
    <div>
      <Tabs defaultValue="indian" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="indian">Indian</TabsTrigger>
          <TabsTrigger value="chinese">Chinese</TabsTrigger>
        </TabsList>
        <TabsContent value="indian">
          <Card>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div
                    className="flex lg:py-[30px] pt-[30px] pb-[0] lg:border-b-[1px] border-solid border-[#e3e1e1] border-[0] aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div>
                      <Image
                        width={20}
                        height={30}
                        src="/room1.webp"
                        alt="restaurant-1"
                        className="sm:w-[80px] w-[50px] rounded-[15px] max-w-none"
                      />
                    </div>
                    <div className="sm:pl-[24px] pl-[12px]">
                      <h4 className="mb-[12px] flex sm:justify-between sm:flex-row flex-col text-[18px] font-bold text-[#000]">
                        Mustrd Dry with{" "}
                        <span className="text-[#ed5b31]">$60</span>
                      </h4>
                      <p className="text-[14px] leading-[22px]">
                        This is the dolor sit amet consectetur adipisicing elit.
                        Id non namsequicum voluptatum soluta sed placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="flex lg:py-[30px] pt-[30px] pb-[0] lg:border-b-[1px] border-solid border-[#e3e1e1] border-[0] aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div>
                      <Image
                        width={20}
                        height={30}
                        src="/room1.webp"
                        alt="restaurant-1"
                        className="sm:w-[80px] w-[50px] rounded-[15px] max-w-none"
                      />
                    </div>
                    <div className="sm:pl-[24px] pl-[12px]">
                      <h4 className="mb-[12px] flex sm:justify-between sm:flex-row flex-col text-[18px] font-bold text-[#000]">
                        Allo Gobhi with{" "}
                        <span className="text-[#ed5b31]">$60</span>
                      </h4>
                      <p className="text-[14px] leading-[22px]">
                        This is the dolor sit amet consectetur adipisicing elit.
                        Id non namsequicum voluptatum soluta sed placeat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chinese">
          <Card>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div
                    className="flex lg:py-[30px] pt-[30px] pb-[0] lg:border-b-[1px] border-solid border-[#e3e1e1] border-[0] aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div>
                      <Image
                        width={20}
                        height={30}
                        src="/room1.webp"
                        alt="restaurant-1"
                        className="sm:w-[80px] w-[50px] rounded-[15px] max-w-none"
                      />
                    </div>
                    <div className="sm:pl-[24px] pl-[12px]">
                      <h4 className="mb-[12px] flex sm:justify-between sm:flex-row flex-col text-[18px] font-bold text-[#000]">
                        Taw Roti with{" "}
                        <span className="text-[#ed5b31]">$60</span>
                      </h4>
                      <p className="text-[14px] leading-[22px]">
                        This is the dolor sit amet consectetur adipisicing elit.
                        Id non namsequicum voluptatum soluta sed placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="flex lg:py-[30px] pt-[30px] pb-[0] lg:border-b-[1px] border-solid border-[#e3e1e1] border-[0] aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div>
                      <Image
                        width={20}
                        height={30}
                        src="/room1.webp"
                        alt="restaurant-1"
                        className="sm:w-[80px] w-[50px] rounded-[15px] max-w-none"
                      />
                    </div>
                    <div className="sm:pl-[24px] pl-[12px]">
                      <h4 className="mb-[12px] flex sm:justify-between sm:flex-row flex-col text-[18px] font-bold text-[#000]">
                        Mustrd Chicken with{" "}
                        <span className="text-[#ed5b31]">$60</span>
                      </h4>
                      <p className="text-[14px] leading-[22px]">
                        This is the dolor sit amet consectetur adipisicing elit.
                        Id non namsequicum voluptatum soluta sed placeat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RestaurantTab;
