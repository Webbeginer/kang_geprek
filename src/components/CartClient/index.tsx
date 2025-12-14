"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  qty: number;
};

export default function CartClient() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ambil cart dari localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  // update localStorage setiap cart berubah
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id: string) => {
    updateCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    updateCart(
      cart.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    updateCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


  const checkoutWhatsApp = () => {
    const phoneNumber = "+6285856895799";
    const waNumber = phoneNumber.replace("+", "");

    const itemsText = cart
      .map(
        item =>
          `- ${item.name} x${item.qty} = ${(
            item.price * item.qty
          ).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}`
      )
      .join("\n");

    const message = `
Halo, saya ingin memesan:

${itemsText}

Total: ${total.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })}
    `;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white p-6 rounded-md shadow">
        <h1 className="text-xl font-bold text-red-700">
          Keranjang masih kosong 🛒
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-md shadow w-full max-w-xl space-y-4">
      <h1 className="text-2xl font-bold text-red-700">Keranjang</h1>

      {cart.map(item => (
        <div
          key={item.id}
          className="flex gap-4 items-center border-b pb-3"
        >
          <Image
            src={item.image}
            alt="product"
            width={80}
            height={80}
            className="w-20 h-20 object-cover rounded"
            unoptimized
          />

          <div className="flex-1">
            <h2 className="font-semibold text-red-700">
              {item.name}
            </h2>
            <p className="text-sm text-red-600">
              {item.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>

            {/* QTY */}
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 bg-red-200 rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 bg-red-200 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 text-sm"
          >
            Hapus
          </button>
        </div>
      ))}

      {/* TOTAL */}
      <div className="flex justify-between items-center pt-4 font-bold">
        <span>Total</span>
        <span className="text-red-700">
          {total.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </span>
      </div>

      {/* CHECKOUT */}
      <button
        onClick={checkoutWhatsApp}
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
      >
        Checkout via WhatsApp
      </button>
    </div>
  );
}
