// components/Header.tsx
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="md:fixed top-0 left-0 w-full flex justify-between items-center bg-[#1212121A] backdrop-blur-[24px] md:border-b border-[#2A2A2A] text-white px-5 md:px-20 h-20 z-50">
      {/* LOGO */}
      <div>
        <Image src="/logo.svg" alt="Logo" width={235} height={60} />
      </div>

      {/* NAV */}
      <nav className="md:inline-block hidden">
        <ul className="flex space-x-[30px] text-sm font-saira">
          <li>HABERLER</li>
          <li>ETKİNLİKLER</li>
          <li>MÜZİKLER</li>
          <li>VİDEOLAR</li>
          <li>İLETİŞİM</li>
        </ul>
      </nav>

      {/* SEARCH & BUTTON */}
      <div className="md:flex items-center justify-center hidden">
        <div>
          <Image
            src="/search.svg"
            alt="Search Icon"
            width={23}
            height={22}
            className="inline-block mr-[35px]"
          />
        </div>

        <button className="bg-white text-black font-bold text-sm h-10 w-[120px] flex justify-center items-center">
          GİRİŞ YAP
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden block">
        <Image
          src="/hamburger_icon.png"
          alt="Menu Icon"
          width={23}
          height={22}
        />
      </div>
    </div>
  );
};

export default Header;
