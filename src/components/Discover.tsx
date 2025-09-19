"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Discover {
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

const Discover = () => {
  const [discover, setDiscover] = useState<Discover[]>([]);

  useEffect(() => {
    const fetchDiscover = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/c/a7c4-016a-47aa-8241"
        );
        const data = await response.json();
        setDiscover(data); // API'nin dönen yapısına göre burası değişebilir
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchDiscover();
  }, []);

  return (
    <div className="lg:px-20 px-5 flex flex-col lg:flex-row justify-center items-start pb-24 lg:mt-24 lg:gap-28">
      {/* <Left /> */}
      <div className="lg:w-4/6 h-full">
        {/* <LOGO FİLTER   /> */}
        <div className="flex justify-between items-center mb-10 lg:mb-24">
          <div className="flex justify-start items-center gap-6">
            <p className="font-saira_condensed font-bold text-[40px] lg:text-6xl text-white">
              KEŞFET
            </p>
            <Image
              src="/discover.svg"
              alt="discover"
              width={53}
              height={53}
              className="w-[42px] h-[42px] lg:w-[53px] lg:h-[53px]"
            />
          </div>

          <div className="flex justify-center items-center gap-6">
            <Image src="/search.svg" alt="discover" width={23} height={22} />

            <Image
              src="/filter_icon.svg"
              alt="discover"
              width={24}
              height={19}
            />

            <Image src="/list_icon.svg" alt="discover" width={23} height={19} />
          </div>
        </div>

        <p className="text-[40px] font-saira_condensed text-white text-left w-full font-bold mb-5 lg:hidden block">
          NE GÖRMEK İSTERSİN?
        </p>

        <div className="flex lg:hidden justify-start items-center whitespace-nowrap gap-2 text-white mb-14 lg:mb-52 overflow-hidden">
          <button className="flex justify-center items-center border border-white bg-transparent px-4 py-2.5 font-saira">
            Türk Rap
          </button>
          <button className="flex justify-center items-center border bg-[#F0E74D] px-4 py-2.5 font-saira font-bold text-black">
            Yabancı Rap
          </button>
          <button className="flex justify-center items-center border border-white bg-transparent px-4 py-2.5 font-saira">
            Rap Haberleri
          </button>
        </div>

        {/* < LİST İTEM   /> */}

        {discover.slice(0, 5).map((dis, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col justify-start items-center gap-5 mb-14 lg:mb-20"
          >
            <div className="flex flex-col justify-center items-start gap-9 h-full">
              <Image
                src={dis.attributes.img}
                alt="discover"
                width={301}
                height={196}
                className="lg:max-w-[301px] h-[196px] object-cover w-[388px]"
              />

              <p className="font-saira text-[#3b3b3b]">29 Mart 2022</p>
            </div>

            <div className="flex flex-col justify-between items-start text-white h-full gap-6">
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/jonathan.png"
                  alt="trends1"
                  width={32}
                  height={32}
                  unoptimized
                  className="rounded-full w-8 h-8 object-cover"
                />

                <p>Jonathan Stewart</p>
              </div>

              <div className="flex justify-center items-start flex-col gap-6">
                <p className="font-saira_condensed font-bold md:text-2xl text-xl">
                  {dis.attributes.content.length > 220
                    ? dis.attributes.content.slice(0, 220) + "..."
                    : dis.attributes.content}
                </p>

                <div className="border border-[#3B3B3B] w-full"></div>

                <p className="font-saira">Daha Fazla Oku</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <Right /> */}
      <div className="lg:w-2/6 h-full text-white">
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[40px] font-saira_condensed text-white text-left w-full font-bold mb-5 hidden lg:block">
            NE GÖRMEK İSTERSİN?
          </p>

          <div className="lg:flex hidden justify-start items-center flex-wrap gap-2.5 text-white mb-52">
            <button className="flex justify-center items-center border border-white bg-transparent px-5 py-2.5 font-saira">
              Türk Rap
            </button>
            <button className="flex justify-center items-center border bg-[#F0E74D]  px-5 py-2.5 font-saira font-bold text-black">
              Yabancı Rap
            </button>
            <button className="flex justify-center items-center border border-white bg-transparent px-5 py-2.5 font-saira">
              Rap Haberleri
            </button>
            <button className="flex justify-center items-center border border-white bg-transparent px-5 py-2.5 font-saira">
              Haftanın Klipleri
            </button>
            <button className="flex justify-center items-center border border-white bg-transparent px-5 py-2.5 font-saira">
              Ayın Klipleri
            </button>
            <button className="flex justify-center items-center border border-white bg-transparent px-5 py-2.5 font-saira">
              Rap Sohbetleri
            </button>
            <button className="flex justify-center items-center border border-white bg-transparent px-5 py-2.5 font-saira">
              Rap Müsabakaları
            </button>
          </div>

      <div className="flex lg:hidden justify-center items-center mt-18 mb-18 w-full">
        <button className="relative font-saira_condensed font-bold text-lg text-black px-8 py-3 bg-white transform -skew-x-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          <span className="inline-block skew-x-12">Tümünü Gör</span>
        </button>
      </div>


          <p className="lg:text-[40px] text-[25px] font-saira_condensed text-white text-left w-full font-bold mb-5">
            GELİŞMELERDEN İLK SEN HABERDAR OL!
          </p>

          <div className="flex justify-between items-center w-full px-2.5">
            <p className="font-saira font-bold text-sm">EMAIL</p>
            <div className="flex justify-center items-center gap-3.5">
              <p className="font-saira font-bold text-sm text-[#F0E74D]">
                GÖNDER
              </p>
              <Image
                src="/right_arrow_yellow.svg"
                alt="discover"
                width={14}
                height={14}
              />
            </div>
          </div>

          <div className="border border-[#3B3B3B] w-full mt-5 mb-12"></div>

          <div className="flex justify-start items-center w-full gap-5">
            <Image
              src="/facebook_logo.svg"
              alt="discover"
              width={15}
              height={29}
            />
            <Image
              src="/twitter_logo.svg"
              alt="discover"
              width={27}
              height={22}
            />
            <Image
              src="/discord_logo.svg"
              alt="discover"
              width={32}
              height={24}
            />
            <Image
              src="/facebook_logo.svg"
              alt="discover"
              width={14}
              height={14}
            />
            <Image
              src="/spotify_yellow_logo.svg"
              alt="discover"
              width={34}
              height={34}
            />
            <Image
              src="/youtube_yellow_logo.svg"
              alt="discover"
              width={34}
              height={24}
            />
          </div>

          <div className="flex justify-start items-center flex-wrap gap-x-14 gap-y-6 text-white mt-16">
            <p className="font-saira text-sm">HABERLER</p>
            <p className="font-saira text-sm">ETKİNLİKLER</p>
            <p className="font-saira text-sm">MÜZİKLER</p>
            <p className="font-saira text-sm">VİDEOLAR</p>
            <p className="font-saira text-sm">İLETİŞİM</p>
          </div>

          <div className="flex justify-start items-center mt-10 w-full">
            <p className="font-saira text-sm text-[#5C5C5C]">
              © RAPKOLOGY All Rights Are Reserved 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
