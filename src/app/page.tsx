"use client";

// app/page.tsx
import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import Header from "@/components/Header";
import Live from "@/components/Live";
import MontlyFavorites from "@/components/MontlyFavorites";
import Trends from "@/components/Trends";

export default function Home() {
  return (
    <div className="relative w-full h-full md:h-screen overflow-x-hidden">
      {/* <Header /> */}
      <header>
        <Header />
      </header>

      {/* <Banner /> */}
      <Banner />

      {/* <Live /> */}
      <Live />

      {/* <Trends /> */}
      <Trends />

      {/* <MontlyFavorites /> */}
      <MontlyFavorites />

      {/* <Discover /> */}
      <Discover />
    </div>
  );
}
