"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";   
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hash, setHash] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleHamburger = () => setIsActive(!isActive);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👉 tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <nav className={`${scroll ? styles.navbarFixed : ""} top-0 w-full bg-transparent py-1 px-4 flex items-center justify-between z-[9999]`}>
      <div className="text-1xl font-bold ml-2 text-red-600">Kang Geprek</div>

      <div className="relative flex items-center" ref={dropdownRef}>
        {/* HAMBURGER */}
        <button
          id="hamburger-button"
          className={`hamburger mr-2 md:hidden z-[99999] ${isActive ? styles.hamburgerActive : ""}`}
          type="button"
          onClick={toggleHamburger}
        >
          <span className="w-[30px] h-[2px] bg-red-600 block my-2 transition duration-300 ease-in-out origin-top-left"></span>
          <span className="w-[30px] h-[2px] bg-red-600 block my-2 transition duration-300 ease-in-out"></span>
          <span className="w-[30px] h-[2px] bg-red-600 block my-2 transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>

        {/* DROPDOWN */}
        <div
          className={`text-base absolute right-0 w-[200px] bg-white shadow-md backdrop-blur-sm rounded-md mt-[240px] z-[9999] ${
            isActive ? "block" : "hidden"
          } md:block md:static md:w-auto md:bg-transparent md:shadow-none md:mt-0`}
        >
          <ul className="flex flex-col gap-4 m-4 md:flex-row">
            <li className={`group relative cursor-pointer ${pathname === "/home" && hash === "" ? "text-red-700" : "text-red-400"}`}>
              <Link href="/home">Home</Link>
            </li>
            <li className={`group relative cursor-pointer ${pathname === "/home" && hash === "#about" ? "text-red-700" : "text-red-400"}`}>
              <Link href="/home#about">About</Link>
            </li>
            <li className={`group relative cursor-pointer ${pathname === "/home" && hash === "#contact" ? "text-red-700" : "text-red-400"}`}>
              <Link href="/home#contact">Contact</Link>
            </li>
            <li className={`group relative cursor-pointer ${pathname === "/product" ? "text-red-700" : "text-red-400"}`}>
              <Link href="/product">Product</Link>
            </li>
            <li className={`group relative cursor-pointer ${pathname === "/cart" ? "text-red-700" : "text-red-400"}`}>
              <Link href="/cart" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
