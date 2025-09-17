"use client";
import React from "react";
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-screen w-full"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="relative h-screen  w-full">
          <div className="h-full">
            {/* Arka plan resmi */}

            <div className="relative md:absolute text-center md:top-1/4 md:right-1/7 text-white max-w-lg z-50 mt-2">
              <p className="font-bold text-[30px] md:text-7xl md:leading-[84px] font-saira_condensed tracking-tight">
                <span className="block">TÜRKÇE RAP VE</span>
                <span className="block">DÜNYA MÜZİK</span>
                <span className="block text-nowrap">HABERLERİNİ TAKİP ET</span>
              </p>

              <p className="font-saira mt-6 mb-8 font-normal text-sm md:text-lg px-12 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>

              <button className="cursor-pointer">
                <Image
                  src="/more.png"
                  alt="Background"
                  width={150}
                  height={50}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="w-full h-full relative min-w-[150px] min-h-[50px]"
                />
              </button>
            </div>

            <Image
              src="/banner2.png"
              alt="Background"
              width={1920}
              height={1080}
              className="absolute top-56 md:top-0 xl:!-left-96 inset-0 md:object-[0%_30%] h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full md:h-64 h-36">
              <Image
                src="/banner_under.png"
                alt="Background"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative h-screen  w-full">
          <div className="h-full">
            {/* Arka plan resmi */}

            <div className="relative md:absolute text-center md:top-1/4 md:right-1/7 text-white md:text-black max-w-lg z-50 mt-2">
              <p className="font-bold text-[30px] md:text-7xl md:leading-[84px] font-saira_condensed tracking-tight">
                <span className="block">DÜNYA RAP</span>
                <span className="block">TRENDLERİNİ</span>
                <span className="block text-nowrap">KONUŞUYORUZ</span>
              </p>

              <p className="font-saira mt-6 mb-8 font-normal text-sm md:text-lg px-12 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>

              <button className="cursor-pointer">
                <Image
                  src="/more.png"
                  alt="Background"
                  width={150}
                  height={50}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="w-full h-full relative min-w-[150px] min-h-[50px]"
                />
              </button>
            </div>

            <Image
              src="/banner1.png"
              alt="Background"
              width={1920}
              height={1080}
              className="absolute top-56 md:top-0 inset-0 object-[25%_0%] h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full md:h-64 h-36">
              <Image
                src="/banner_under.png"
                alt="Background"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Banner;
