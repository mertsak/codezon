"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Montyly {
  id: number;
  attributes: {
    authors: string;
    title: string;
    img: string;
    content: string;
    slug: string;
    // Diğer gerekli alanlar
  };
}

const MontlyFavorites = () => {
  const [montyly, setMontly] = useState<Montyly[]>([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/c/a7c4-016a-47aa-8241"
        );
        const data = await response.json();
        setMontly(data); // API'nin dönen yapısına göre burası değişebilir
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div className="text-white lg:h-[450px] relative lg:flex items-center justify-between w-full">
      <div className="lg:absolute  left-0 top-0 w-[375px] md:w-[600px] h-28 flex justify-start items-center bg-white gap-10 text-black">
        <div className="flex justify-center items-center gap-9 ml-20">
          <Image
            src="/youtube_logo.svg"
            alt="spotify"
            width={162}
            height={36}
            className="w-[113px] h-[25px] md:w-[162px] md:h-[36px]"
          />

          <Image
            src="/spotify_logo.svg"
            alt="spotify"
            width={160}
            height={48}
            className="w-[111px] h-[33px] md:w-[160px] md:h-[48px]"
          />
        </div>
      </div>

      <div className="text-center md:text-left my-12 lg:my-0">
        <span className="font-saira_condensed font-bold text-6xl lg:ml-20 block">
          AYIN
        </span>
        <span className="font-saira_condensed font-bold text-6xl lg:ml-20 block">
          FAVORİLERİ
        </span>
      </div>

      <div className="2xl:w-[900px] xl:w-[750px] lg:w-[500px] w-full  flex justify-center items-end ml-10 lg:ml-0 pb-32 md:pb-0">
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".custom-progress",
            type: "progressbar",
          }}
          spaceBetween={10}
          slidesPerView={2.5} // default küçük ekran
          breakpoints={{
            1400: {
              // xl breakpoint
              slidesPerView: 2.5, // büyük ekranda 3 tane yan yana
              spaceBetween: 10,
            },

            1024: {
              // lg breakpoint
              slidesPerView: 1.75, // orta ekranda 2 tane yan yana
              spaceBetween: 10,
            },

            600: {
              // md breakpoint
              slidesPerView: 1.75, // küçük ekranda 1.5 tane yan yana
              spaceBetween: 0,
            },

            0: {
              // md breakpoint
              slidesPerView: 1.25, // küçük ekranda 1.5 tane yan yana
              spaceBetween: 0,
            },
          }}
          className="w-full h-full"
        >
          {montyly.slice(0, 5).map((montly, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center relative"
            >
              <div className="bg-[#2A2A2A] w-[272px] h-[384px] lg:h-[266px] flex flex-col justify-between overflow-hidden relative">
                <Image
                  src={montly.attributes.img}
                  alt={montly.attributes.title}
                  width={184}
                  height={184}
                  className="lg:w-full lg:h-[184px]  w-[159px] h-[159px] object-cover absolute top-10 lg:-left-4/6 left-1/6 -rotate-12 lg:object-left"
                  unoptimized
                />
                <div className="flex flex-col justify-end lg:justify-center items-center lg:items-end z-10 h-full lg:mr-10 lg:mb-6 pb-16 lg:pb-0">
                  <p className="font-saira bg-[#323232] px-[10px] py-[5px] rounded-full">
                    Top 10{" "}
                    <span className="font-saira font-bold">
                      ({index + 1}. Sıra)
                    </span>
                  </p>
                  <p className="text-xl text-center mr-3 mt-6 font-saira font-bold">
                    {montly.attributes.authors}
                  </p>
                </div>
                <div>
                  <Image
                    src="/montly_under.png"
                    alt="montly_under"
                    width={272}
                    height={48}
                    className="w-full h-[48px] object-cover absolute bottom-0"
                    unoptimized
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress bar container */}
        <div className="custom-progress fixed mt-4 h-[8px] bg-[#2A2A2A] rounded-full overflow-hidden mb-10">
          <span className="swiper-pagination-progressbar-fill !bg-orange-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default MontlyFavorites;
