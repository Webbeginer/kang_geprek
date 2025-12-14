"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface ModalProductProps {
  children: ReactNode;
}

export default function ModalProduct({
  children,
}: ModalProductProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
      <div className="relative">
        <button
          onClick={() => router.back()}
          className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full px-2 hover:bg-red-700 transition-colors"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
