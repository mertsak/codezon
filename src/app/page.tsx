// app/page.tsx
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative w-full h-full md:h-screen ">
      <header>
        <Header />
      </header>

      <Banner />

      <div className="mt-56">
        <div className=" bg-black text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
          <p className="text-lg">This is a sample content section.</p>
        </div>

        <div className=" bg-gray-800 text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Another Section</h1>
          <p className="text-lg">More sample content goes here.</p>
        </div>

        <div className=" bg-gray-600 text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Final Section</h1>
          <p className="text-lg">Even more sample content.</p>
        </div>
      </div>
    </div>
  );
}
