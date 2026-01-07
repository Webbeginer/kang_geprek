/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

export default function ProductPage() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/api/product`,
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) return <div>Failed to load</div>;
    // skeleton card
  const SkeletonCard = () => (
  <div className="w-[250px] bg-white border rounded-xl shadow-sm p-4 animate-pulse">
    {/* gambar */}
    <div className="w-full h-[180px] bg-gray-200 rounded-lg" />

    {/* text */}
    <div className="mt-4 space-y-3">
      <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto" />
      <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
    </div>
  </div>
);

  if (!data)
  return (
    <div className="w-full px-4 py-6 space-y-10">
      {/* Skeleton Makanan */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
          🍗 Makanan
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>

      {/* Skeleton Minuman */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
          🥤 Minuman
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );


  const products = data.data ?? [];

  
  const makanan = products.filter(
    (item: any) => item.category === "makanan"
  );
  const makananRingan = products.filter(
    (item: any) => item.category === "makanan ringan"
  );

  const minuman = products.filter(
    (item: any) => item.category === "minuman"
  );

  const Card = ({ product }: { product: any }) => (
    <div
      key={product.id}
      className="w-[250px] bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4"
    >
      <Link
        href={`/product/detail/${product.id}`}
        className="group overflow-hidden block rounded-lg"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={180}
          className="w-full h-[180px] object-cover rounded-lg group-hover:scale-110 transition-all duration-300"
        />
      </Link>

      <div className="mt-4 text-center">
        <h1 className="font-bold text-lg text-gray-800">
          {product.name}
        </h1>

        <p className="text-red-600 font-semibold text-xl mt-1">
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
    </div>
  );


  return (
    <div className="w-full px-4 py-6 space-y-10">

      {/* MAKANAN */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
          🍗 Makanan
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6">
          
          {makananRingan.map((product: any) => (
            <Card key={product.id} product={product} />
          ))}
          {makanan.map((product: any) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* MINUMAN */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
          🥤 Minuman
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {minuman.map((product: any) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}
