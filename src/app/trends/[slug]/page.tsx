// import { notFound } from "next/navigation";

interface TrendPageProps {
  params: {
    slug: string;
  };
  // Diğer gerekli alanlar olursa ekle
}

export default async function TrendPage({ params }: TrendPageProps) {
  console.log(params.slug);

  //   const res = await fetch(`https://dummyjson.com/c/a7c4-016a-47aa-8241/${params.slug}`, {
  //     cache: "no-store", // güncel veri istiyorsan
  //   });

  //   if (!res.ok) {
  //     return notFound();
  //   }

  //   const trend = await res.json();

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold">{trend.attributes.title}</h1>
      <p className="mt-4">{trend.attributes.content}</p> */}

      <p className="text-white">veriler gelicek</p>
    </div>
  );
}
