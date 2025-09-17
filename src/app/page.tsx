// app/page.tsx
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Live from "@/components/Live";

export default function Home() {
  return (
    <div className="relative w-full h-full md:h-screen ">
      <header>
        <Header />
      </header>

      <Banner />
      {/* <Live /> */}
      <Live />
    </div>
  );
}
