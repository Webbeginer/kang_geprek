// components/Intro.tsx
"use client";

type Props = {
  onEnter: () => void;
};

export default function IntroSection({ onEnter }: Props) {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="text-center bg-black/50 p-8 rounded-xl">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
          Kang Geprek
        </h1>


        <button
        onClick={onEnter}
        aria-label="Masuk ke halaman utama"
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
        Kepoin Yukk
      </button>
      </div>
    </section>
  );
}
