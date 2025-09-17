import React from "react";
import Image from "next/image";

const Live = () => {
  return (
    <div className="w-full h-full md:h-[600px]">
      <div className="md:absolute md:left-2/6 flex flex-col items-center mt-12">
        <div className="flex justify-center items-center -rotate-6">
          <Image
            src="/twich_logo.png"
            alt="twich_logo"
            width={260}
            height={140}
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

        <div className="flex justify-center items-center border border-gray-700 rounded-4xl p-4 gap-2.5 -rotate-6 mt-4 z-[10]">
          <div>
            <Image
              src="/follow.svg"
              alt="follow"
              width={108}
              height={37}
              className="cursor-pointer"
            />
          </div>

          <div>
            <Image
              src="/subscribe.png"
              alt="arrow"
              width={134}
              height={37}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center md:gap-96 relative">
        <div className="md:w-[420px] md:h-[437px] w-[280px] h-[290px] relative z-10">
          <Image
            src="/live_left.png"
            alt="live"
            fill
            className="object-cover absolute !-left-10 md:-left-0"
          />
        </div>

        <div className="absolute w-full h-full md:h-[422.89px] bottom-36 md:bottom-0">
          <Image
            src="/live_drop.png"
            alt="live"
            fill
            className="object-cover object-bottom md:object-[0%_75%] w-full h-auto rotate-y-180"
          />
        </div>

        <div className="md:w-[303px] md:h-[530px] w-[220px] h-[380px] relative z-10">
          <Image
            src="/live_right.png"
            alt="live_bottom"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-0  w-full md:h-64 h-44 z-50">
          <Image
            src="/banner_under.png"
            alt="Background"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Live;
