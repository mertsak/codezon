import React from "react";
import Image from "next/image";

const Live = () => {
  return (
    <div className="w-full h-full md:h-[600px]">
      {/* Live center */}
      <div className="lg:absolute md:left-2/6 flex flex-col items-center mt-12">
        <div className="flex justify-center items-center -rotate-6">
          <Image
            src="/twich_logo.png"
            alt="twich_logo"
            width={260}
            height={140}
            sizes="(max-width: 768px) 160px, 260px"
            quality={85}
            className="md:min-w-[260px] md:min-h-[140px] max-w-[160px] max-h-[120px] object-cover"
          />

          <div className="text-white font-saira_condensed">
            <span className="font-light text-5xl md:text-6xl block">
              HER HAFTA
            </span>
            <span className="text-[#F0E74D] block font-bold text-5xl md:text-6xl">
              CANLIDAYIZ
            </span>
            <span className="block font-bold  text-sm md:text-md">
              Bizi Takip Edin!
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center border border-gray-700 rounded-2xl p-4 gap-2.5 -rotate-6 mt-4 z-[10]">
          <div className="flex justify-center items-center bg-[#864CF6] rounded-lg py-2.5 px-3 cursor-pointer gap-[6px] w-[105px]">
            <Image
              src="/heart.svg"
              alt="heart"
              width={16}
              height={14}
              sizes="16px"
              className="cursor-pointer"
            />
            <span className="text-white font-saira text-sm font-semibold">
              Takip Et
            </span>
          </div>

          <div className="flex justify-center items-center bg-[#222123] rounded-lg py-2.5 px-3 cursor-pointer gap-[6px] w-[135px]">
            <Image
              src="/star.svg"
              alt="star"
              width={16}
              height={15}
              sizes="16px"
            />
            <span className="text-white font-saira text-sm font-semibold">
              Abone Ol
            </span>

            <Image
              src="/under_arrow.svg"
              alt="under_arrow"
              width={10}
              height={5}
              sizes="10px"
            />
          </div>
        </div>
      </div>

      {/* Live left & right*/}
      <div className="w-full h-full flex items-center justify-between relative">
        <div className="md:w-[420px] md:h-[437px] w-[280px] h-[290px] relative z-10 2xl:ml-60">
          <Image
            src="/live_left.png"
            alt="live"
            fill
            quality={85}
            sizes="(max-width: 768px) 280px, 420px"
            className="object-cover !-left-10 md:-left-0 filter saturate-50"
          />
        </div>

        <div className="absolute w-full h-full md:h-[422.89px] bottom-36 md:bottom-0 ">
          <Image
            src="/live_drop.png"
            alt="live"
            fill
            quality={85}
            sizes="100vw"
            className="object-cover object-bottom md:object-[0%_75%] w-full h-auto rotate-y-180"
          />
        </div>

        <div className="md:w-[303px] md:h-[530px] w-[220px] h-[380px] relative z-10 2xl:mr-60 ">
          <Image
            src="/live_right.png"
            alt="live_bottom"
            fill
            quality={85}
            sizes="(max-width: 768px) 220px, 303px"
            className="object-cover filter saturate-50 !left-4 "
          />
        </div>

        <div className="absolute bottom-0  w-full md:h-64 h-44 z-50">
          <div className="relative w-full h-full">
            <Image
              src="/banner_under.png"
              alt="Background"
              fill
              quality={85}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
