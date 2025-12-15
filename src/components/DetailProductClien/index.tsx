"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "makanan" | "minuman";
}

interface CartItem extends Product {
  qty: number;
}

export default function DetailProductClient({
  product,
}: {
  product: Product;
}) {
  const [qty, setQty] = useState<number>(1);
  const router = useRouter();

  const addToCart = () => {
    const cart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div className="bg-white p-5 rounded-md w-[350px] space-y-3 border border-red-200">
      <div className="relative w-full h-52">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 350px"
          priority
        />
      </div>

      <h1 className="text-xl font-bold text-red-700">
        {product.name}
      </h1>

      <p className="text-red-600">
        {product.description}
      </p>

      <p className="font-semibold text-red-700 text-lg">
        {product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-3 py-1 border border-red-500 text-red-600 rounded hover:bg-red-100"
        >
          -
        </button>

        <span className="font-semibold text-red-700">{qty}</span>

        <button
          onClick={() => setQty((q) => q + 1)}
          className="px-3 py-1 border border-red-500 text-red-600 rounded hover:bg-red-100"
        >
          +
        </button>
      </div>

      <button
        onClick={addToCart}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
      >
        Tambah ke keranjang
      </button>
    </div>
  );
}
