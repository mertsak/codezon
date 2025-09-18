"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Trend {
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

const Trends = () => {
  const [trends, setTrends] = useState<Trend[]>([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/c/a7c4-016a-47aa-8241"
        );
        const data = await response.json();
        setTrends(data); // API'nin dönen yapısına göre burası değişebilir
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div className="flex flex-col justify-center md:items-start items-center lg:px-20 px-4">
      <div className="flex justify-center items-center gap-6 md:mb-24 mb-12">
        <p className="text-white text-[40px] md:text-6xl font-saira_condensed font-bold">
          TRENDLER
        </p>
        <Image
          src="/tiktak_arrow.svg"
          alt="trends"
          width={55}
          height={32}
          className="w-[41px] h-[24px] md:w-[55px] md:h-[32px]"
        />
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-12 justify-center items-center text-white">
        {trends.slice(0, 6).map((trend, index) => (
          <div
            key={index}
            className="flex justify-center items-center md:gap-16 gap-10 h-full"
          >
            <div className="flex justify-center items-start h-full">
              <p className="font-saira_condensed font-bold text-6xl text-[#2A2A2A]">
                0{index + 1}
              </p>
            </div>

            <div className="flex flex-col justify-center items-start">
              <div className="flex justify-center items-center gap-4 mb-4">
                <Image
                  src={trend.attributes.img}
                  alt="trends1"
                  width={32}
                  height={32}
                  unoptimized
                  className="rounded-full w-8 h-8 object-cover"
                />

                <p>{trend.attributes.authors}</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <p className="font-saira_condensed font-bold md:text-2xl text-xl mb-5">
                  {trend.attributes.content.length > 120
                    ? trend.attributes.content.slice(0, 120) + "..."
                    : trend.attributes.content}
                </p>

                <div className="border border-[#3B3B3B] w-full mb-5"></div>

                <Link
                  href={`/trends/${trend.attributes.slug}`}
                  className="font-saira"
                >
                  Daha Fazla Oku
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-18 mb-18 w-full">
        <button className="relative font-saira_condensed font-bold text-lg text-black px-8 py-3 bg-white transform -skew-x-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          <span className="inline-block skew-x-12">Tümünü Gör</span>
        </button>
      </div>


    </div>
  );
};

export default Trends;
