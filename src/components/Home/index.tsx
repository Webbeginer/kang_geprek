import LayoutSection from "../Layout";
import Link from "next/link";
import Image from "next/image";
const HomeSection = () => {
  return (
        <LayoutSection id="home">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-screen-xl px-4 sm:px-6 gap-6 mx-auto">

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left gap-4 lg:-mt-10">
              <h4 className="text-center text-3xl lg:text-4xl font-bold text-red-700 dark:text-red-400 font-roboto">
                Selamat Datang di Warung <p className="text-center text-red-800 dark:text-red-300">KANG GEPREK</p> 
              </h4>

              <p className="text-red-600 dark:text-red-300 lg:text-xl leading-relaxed">
                Menyajikan ayam geprek dengan cita rasa pedas autentik, sambal 
                segar racikan sendiri, dan ayam pilihan yang digoreng renyah.  
                Nikmati sensasi pedasnya yang bikin nagih!
              </p>

              <Link
                className="border p-2 border-red-600 dark:border-red-400 
                          text-red-700 dark:text-red-300 rounded-lg
                          flex items-center justify-center 
                          shadow-sm hover:shadow-md 
                          hover:bg-red-600 dark:hover:bg-red-400 
                          hover:text-white dark:hover:text-slate-900
                          transition-all duration-300"
                href="#about"
              >
                Get More
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="logo kang geprek"
                width={400}
                height={400}
              />
            </div>

          </div>
        </LayoutSection>

  );
};

export default HomeSection;
