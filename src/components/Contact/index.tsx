"use client";

import LayoutSection from "../Layout";
import { useState } from "react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const buttonClass = loading
  ? "h-12 px-6 rounded-md shadow-md flex items-center justify-center gap-2 bg-gray-400 text-white cursor-not-allowed"
  : "h-12 px-6 rounded-md shadow-md flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 dark:bg-red-400 dark:text-slate-900 dark:hover:bg-red-500 transition-all duration-300";

  return (
    <LayoutSection id="contact" className="mb-20">
        {/* TITLE */}
        <div className="text-center space-y-4">
          <h4
            data-aos="fade-up"
            className="font-bold text-3xl lg:text-4xl uppercase text-red-700 dark:text-red-400"
          >
            Hubungi Kami
          </h4>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-red-600 dark:text-red-300 text-base px-6"
          >
            Jangan ragu untuk mengirim pesan kapan saja!
          </p>
        </div>

        {/* CONTENT */}
        <div data-aos="zoom-in" className="mt-10 flex justify-center">
          <div className="w-full max-w-xl shadow-md rounded-md p-6 bg-white dark:bg-slate-800">
            <h5
              data-aos="fade-down"
              className="text-xl font-bold text-red-700 dark:text-red-400 flex items-center gap-2"
            >
              <i className="bx bx-envelope"></i>
              <span>Kirim Pesan kepada Kang Geprek</span>
            </h5>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* NAMA */}
              <div data-aos="fade-up" data-aos-delay="100">
                <label className="block text-red-700 dark:text-red-400 font-medium">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full h-12 px-3 border border-red-400 dark:border-red-500 rounded-md outline-none bg-white dark:bg-slate-700 text-red-800 dark:text-red-200 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* EMAIL */}
              <div data-aos="fade-up" data-aos-delay="200">
                <label className="block text-red-700 dark:text-red-400 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full h-12 px-3 border border-red-400 dark:border-red-500 rounded-md outline-none bg-white dark:bg-slate-700 text-red-800 dark:text-red-200 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* PESAN */}
              <div data-aos="fade-up" data-aos-delay="300">
                <label className="block text-red-700 dark:text-red-400 font-medium">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tulis pesan Anda..."
                  className="w-full p-3 border border-red-400 dark:border-red-500 rounded-md outline-none bg-white dark:bg-slate-700 text-red-800 dark:text-red-200 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={buttonClass}
              >
                <span>{loading ? "Mengirim..." : "Kirim"}</span>
                <i className="bx bx-send"></i>
              </button>
            </form>
          </div>
        </div>
    </LayoutSection>

  );
};

export default ContactSection;
