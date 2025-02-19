"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Cart } from "./Carts";

export const HomePage = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };
  return (
    <div>
      <div className="w-screen h-[550px] overflow-hidden ">
        <img
          alt=""
          src={
            "https://res.cloudinary.com/da2ltmfaf/image/upload/v1739938113/BG_fqe4au.png"
          }
          className="w-full h-full  "
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-screen flex flex-col items-center ">
        <div className="max-w-[1440px] w-full flex flex-col gap-9 mt-8 ">
          <h2 className="text-[30px]  font-[600] leading-[36px] tracking-[-0.75px] text-white  ">
            Categories
          </h2>
          {/* <div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full flex gap-3  "
          >
            <CarouselPrevious className="bg-background-none border-none text-white" />
            <CarouselContent className="pl-4">
              {Array.from({ length: 25 }).map((_, index) => (
                <div key={index} className="p-1">
                  <Badge
                    onClick={handleClick}
                    variant={"destructive"}
                    className={`w-[100px] py-2 px-3 rounded-full flex items-center justify-center ${
                      isRed ? "bg-[#EF4444]" : "bg-background"
                    }  text-primary `}
                  >
                    {index + 1}
                  </Badge>
                </div>
              ))}
            </CarouselContent>

            <CarouselNext className="bg-background-none border-none text-white" />
          </Carousel>
          {/* </div> */}
        </div>
        <div className="w-full flex justify-center gap-9 mt-8 flex-wrap ">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-[100px] h-[100px] bg-white ">
              <Cart />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
