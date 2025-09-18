// app/page.tsx
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Live from "@/components/Live";
import MontlyFavorites from "@/components/MontlyFavorites";
import Trends from "@/components/Trends";

export default function Home() {
  return (
    <div className="relative w-full h-full md:h-screen overflow-x-hidden">
      <header>
        <Header />
      </header>

      <Banner />
      {/* <Live /> */}
      <Live />
      <Trends />
      {/* <MontlyFavorites /> */}
      <MontlyFavorites />

    </div>
  );
}
