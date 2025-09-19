"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <>
      {/* Custom Arrows */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-12 z-50 cursor-pointer text-white text-4xl hidden md:block">
        <Image src="/left_arrow.png" alt="before" width={24} height={24} />
      </div>

      <div className="swiper-button-next-custom absolute top-1/2 right-12 z-50 cursor-pointer text-white text-4xl hidden md:block">
        <Image src="/right_arrow.png" alt="next" width={24} height={24} />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        className="h-screen w-full relative"
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative h-screen w-full">
          <div className="relative h-full">
            <div className="relative md:absolute text-center md:top-1/4 md:right-1/7 text-white max-w-lg z-50 mt-2">
              <p className="font-bold text-[30px] md:text-7xl md:leading-[84px] font-saira_condensed tracking-tight md:text-left text-center">
                <span className="block">TÜRKÇE RAP VE</span>
                <span className="block">DÜNYA MÜZİK</span>
                <span className="block text-nowrap">HABERLERİNİ TAKİP ET</span>
              </p>

              <p className="font-saira mt-6 mb-8 font-normal text-sm md:text-lg px-12 md:px-0 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>

              {/* Buton */}
              <div className="w-full flex justify-center lg:justify-start items-center">
                <button className="font-saira_condensed font-bold text-lg text-black px-4 py-2 bg-[#F0E74D] transform -skew-x-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
                  <span className="skew-x-12 font-saira text-sm font-bold">
                    Devamını Oku
                  </span>
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="swiper-pagination-custom absolute !-bottom-10 z-[1000] hidden xl:flex space-x-4 cursor-pointer"></div>
            </div>

            <div className="absolute top-56 md:top-0 xl:!-left-96 inset-0 h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src="/banner2.png"
                  alt="Background"
                  fill
                  priority
                  quality={85}
                  sizes="100vw"
                  className="md:object-[0%_30%] object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full md:h-64 h-36">
              <div className="relative h-full w-full">
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
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative h-screen w-full">
          <div className="relative h-full">
            <div className="relative md:absolute text-center md:top-1/4 md:right-1/7 text-white md:text-black max-w-lg z-50 mt-2">
              <p className="font-bold text-[30px] md:text-7xl md:leading-[84px] font-saira_condensed tracking-tight md:text-left text-center">
                <span className="block">DÜNYA RAP</span>
                <span className="block">TRENDLERİNİ</span>
                <span className="block text-nowrap">KONUŞUYORUZ</span>
              </p>

              <p className="font-saira mt-6 mb-8 font-normal text-sm md:text-lg px-12 md:px-0 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>

              {/* Buton */}
              <button className="cursor-pointer md:w-full mb-6">
                <Image
                  src="/more.png"
                  alt="Background"
                  width={136}
                  height={38}
                />
              </button>
            </div>

            <div className="absolute top-56 md:top-0 inset-0 h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src="/banner1.png"
                  alt="Background"
                  fill
                  quality={85}
                  sizes="100vw"
                  className="object-[25%_0%] object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full md:h-64 h-36">
              <div className="relative h-full w-full">
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
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Banner;
