import LayoutSection from "../Layout";

const AboutSection = () => {
  return (
    <LayoutSection id="about">
          {/* JUDUL */}
          <div data-aos="fade-up" className="text-center space-y-4">
            <h4 className="text-3xl lg:text-4xl font-bold uppercase text-red-700 dark:text-red-400">
              Tentang Kami
            </h4>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-base lg:text-2xl text-red-600 dark:text-red-300 px-6"
            >
              Warung Ayam <span className="font-bold">Kang Geprek</span> menyajikan ayam geprek pedas autentik
              dengan cita rasa khas Nusantara.
            </p>
          </div>

          {/* KONTEN 2 KOLOM */}
          <div className="mt-10 flex flex-col lg:flex-row gap-10 px-6">
            {/* KIRI */}
            <div data-aos="fade-right" className="lg:w-1/2 space-y-4">
              <h5 className="text-xl lg:text-2xl font-bold text-red-700 dark:text-red-400">
                Tentang Warung Kami
              </h5>

              <p className="text-base lg:text-xl text-red-700 dark:text-red-200 leading-relaxed">
                Warung Ayam <span className="font-bold">Kang Geprek</span> hadir sebagai pilihan terbaik bagi para
                pecinta kuliner pedas. Dengan ayam pilihan yang digoreng renyah,
                sambal segar racikan sendiri, serta cita rasa pedas yang bisa kamu
                atur sesuai selera.
              </p>

              <p
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-base lg:text-xl text-red-700 dark:text-red-200 leading-relaxed"
              >
                Kami mengutamakan bahan berkualitas, harga terjangkau, dan pelayanan
                ramah. Tidak heran jika Warung <span className="font-bold">Kang Geprek</span> menjadi favorit pelanggan.
              </p>
            </div>

            {/* KANAN */}
            <div data-aos="fade-left" className="lg:w-1/2 space-y-4">
              <h5 className="text-xl lg:text-2xl font-bold text-red-700 dark:text-red-400">
                Mengapa Memilih Kami?
              </h5>

              <p className="text-base lg:text-xl text-red-700 dark:text-red-200 leading-relaxed">
                Kami percaya makanan enak tidak harus mahal.
                Menu kami cocok untuk semua kalangan.
              </p>

              <ul className="text-red-700 dark:text-red-200 text-lg space-y-2">
                {[
                  "🔥 Sambal pedas autentik racikan sendiri",
                  "🍗 Ayam berkualitas, digoreng renyah",
                  "💸 Harga terjangkau",
                  "🌿 Bahan segar setiap hari",
                  "🤝 Pelayanan ramah & cepat",
                ].map((item, i) => (
                  <li key={i} data-aos="fade-left" data-aos-delay={i * 120}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* INFO WARUNG */}
          <div data-aos="fade-up" className="mt-14 px-6">
            <h5 className="text-xl lg:text-2xl font-bold text-red-700 dark:text-red-400 mb-6">
              Informasi Warung
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: "fa-store",
                  label: "Nama Warung",
                  value: "Kang Geprek",
                },
                {
                  icon: "fa-map-marker-alt",
                  label: "Lokasi",
                  value: (
                            <a
                              href="https://www.google.com/maps/place/Kang+Geprek+Bondowoso/@-7.9045122,113.8046552,17z/data=!4m6!3m5!1s0x2dd6dd1e2f42c477:0x90106b85e6e886fa!8m2!3d-7.9045137!4d113.8046542!16s%2Fg%2F11ww2m7rjx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-red-600 transition"
                            >
                              Bondowoso, Jawa Timur
                            </a>
                          ),
                },
                {
                  icon: "fa-clock",
                  label: "Jam Buka",
                  value: "10.00 - 22.00 WIB",
                },
                {
                  icon: "fa-phone-alt",
                  label: "Kontak",
                  value: "085856895799",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 120}
                  className="flex items-center gap-4"
                >
                  <div
                    className="h-12 w-12 lg:h-16 lg:w-16 flex justify-center items-center
                              rounded-full border border-red-600 dark:border-red-400
                              shadow text-2xl text-red-700 dark:text-red-300
                              bg-white dark:bg-red-900"
                  >
                    <i className={`fas ${item.icon}`}></i>
                  </div>

                  <p className="text-red-700 dark:text-red-200 lg:text-xl">
                    <span className="font-semibold">{item.label}:</span> {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
    </LayoutSection>

  );
};

export default AboutSection;
