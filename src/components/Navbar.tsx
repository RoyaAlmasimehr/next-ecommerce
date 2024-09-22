"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/Kouchinni-Logo-1.svg";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Yantramanav } from "@next/font/google";

const yantramanav = Yantramanav({
  weight: ["700", "900"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    men: false,
    women: false,
    behindTheArt: false,
  });

  const timers = useRef({}); // To store timeout references

  const handleMouseEnter = (section) => {
    clearTimeout(timers.current[section]); // Clear any pending timeout
    setDropdownVisible((prevState) => ({
      ...prevState,
      [section]: true,
    }));
  };

  const handleMouseLeave = (section) => {
    timers.current[section] = setTimeout(() => {
      setDropdownVisible((prevState) => ({
        ...prevState,
        [section]: false,
      }));
    }, 200); // Delay before closing the dropdown
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 px-6 md:pr-8 ml-0 border text-sm bg-white z-50">
      {/* mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image src={logo} width={32} height={32} className="w-16 h-16 mt-2" />
        </Link>
        <Menu />
      </div>
      {/* bigger screens */}
      <div className="hidden md:flex items-center justify-between h-full gap-4">
        <div className="w-2/3 flex items-center justify-start">
          <div
            className={`${yantramanav.className} flex gap-6 uppercase text-xs`}
          >
            <Link href="/" className="group relative pb-1 uppercase">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Men Section */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("men")}
              onMouseLeave={() => handleMouseLeave("men")}
            >
              <button className="group relative pb-1 uppercase">
                Men
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              {dropdownVisible.men && (
                <div
                  className="absolute  -left-20 top-12 w-screen bg-white   shadow-lg p-4 z-10 border"
                  onMouseEnter={() => handleMouseEnter("men")} // Keep the menu open when mouse is on it
                  onMouseLeave={() => handleMouseLeave("men")} // Close after delay when mouse leaves both button and menu
                >
                  <div className="flex justify-around">
                    <div>
                      <h3
                        className={`${yantramanav.className} text-[11px] text-gray-500 py-2`}
                      >
                        Shop by style
                      </h3>
                      <ul className="pb-2 text-[11px]">
                        <li className="pt-3 group relative ">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            T-Shirt
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/shoes"
                            className="relative text-[10px] pb-1 "
                          >
                            Sweaters
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/Hoodies"
                            className="relative text-[10px] pb-1 "
                          >
                            Hoodies
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/polos"
                            className="relative text-[10px] pb-1 "
                          >
                            Polos
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3  group relative">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            Shirts
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3  group relative">
                          <Link
                            href="/men/Hoodies"
                            className="relative text-[10px] pb-1 "
                          >
                            All
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3
                        className={`${yantramanav.className} text-[11px] text-gray-500 py-2`}
                      >
                        Shop by design
                      </h3>
                      <ul className="pb-2 text-[11px]">
                        <li className="pt-3 group relative ">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            Atousa
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/shoes"
                            className="relative text-[10px] pb-1 "
                          >
                            Persius
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/Hoodies"
                            className="relative text-[10px] pb-1 "
                          >
                            Royal ibex
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/polos"
                            className="relative text-[10px] pb-1 "
                          >
                            Homage
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3  group relative">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            All
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Women Section */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("women")}
              onMouseLeave={() => handleMouseLeave("women")}
            >
              <button className="group relative pb-1 uppercase">
                Women
                <span className="absolute  left-0  bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              {dropdownVisible.women && (
                <div
                  className="absolute  -left-32 top-12  w-screen bg-white  shadow-lg p-4  z-10 border"
                  onMouseEnter={() => handleMouseEnter("women")} // Keep the menu open when mouse is on it
                  onMouseLeave={() => handleMouseLeave("women")} // Close after delay when mouse leaves both button and menu
                >
                  <div className="flex justify-around">
                    <div>
                      <h3
                        className={`${yantramanav.className} text-[11px] text-gray-500 py-2`}
                      >
                        Shop by style
                      </h3>
                      <ul className="pb-2 text-[11px]">
                        <li className="pt-3 group relative ">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            T-Shirt
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/shoes"
                            className="relative text-[10px] pb-1 "
                          >
                            Sweaters
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/Hoodies"
                            className="relative text-[10px] pb-1 "
                          >
                            Hoodies
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>

                        <li className="pt-3  group relative">
                          <Link
                            href="/men/Hoodies"
                            className="relative text-[10px] pb-1 "
                          >
                            All
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3
                        className={`${yantramanav.className} text-[11px] text-gray-500 py-2`}
                      >
                        Shop by design
                      </h3>
                      <ul className="pb-2 text-[11px]">
                        <li className="pt-3 group relative ">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            Atousa
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/shoes"
                            className="relative text-[10px] pb-1 "
                          >
                            Persius
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/Hoodies"
                            className="relative text-[10px] pb-1 "
                          >
                            Royal ibex
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3 group relative">
                          <Link
                            href="/men/polos"
                            className="relative text-[10px] pb-1 "
                          >
                            Homage
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black  transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="pt-3  group relative">
                          <Link
                            href="/men/shirts"
                            className="relative text-[10px] pb-1 "
                          >
                            All
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Behind the Art Section */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("behindTheArt")}
              onMouseLeave={() => handleMouseLeave("behindTheArt")}
            >
              <button className="group relative pb-1 uppercase">
                Behind the Art
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              {dropdownVisible.behindTheArt && (
                <div
                  className="absolute  -left-48 top-12  w-screen bg-white  shadow-lg p-4  z-10 border"
                  onMouseEnter={() => handleMouseEnter("behindTheArt")} // Keep the menu open when mouse is on it
                  onMouseLeave={() => handleMouseLeave("behindTheArt")} // Close after delay when mouse leaves both button and menu
                >
                  <div className="flex justify-around  px-2">
                    <Link href="/">
                      <p className="text-[10px] text-gray-500  py-4">
                        the story of persius
                      </p>
                      <Image
                        src="https://kouchinni.com/wp-content/uploads/2024/03/bta-menu-persius.jpg"
                        width={250}
                        height={350}
                        className="pb-2"
                      />
                    </Link>
                    <Link href="/">
                      <p className="text-[10px] text-gray-500  py-4">
                        the story royal ibex
                      </p>
                      <Image
                        src="https://kouchinni.com/wp-content/uploads/2024/03/bta-menu-ibex.jpg"
                        width={250}
                        height={350}
                        className="pb-2"
                      />
                    </Link>
                    <Link href="/">
                      <p className="text-[10px] text-gray-500  py-4">
                        the story of Atousa
                      </p>
                      <Image
                        src="https://kouchinni.com/wp-content/uploads/2024/03/bta-menu-atusa.jpg"
                        width={250}
                        height={350}
                        className="pb-2"
                      />
                    </Link>
                    <Link href="/">
                      <p className="text-[10px] text-gray-500  py-4">
                        the story of homage
                      </p>
                      <Image
                        src="https://kouchinni.com/wp-content/uploads/2024/03/bta-menu-homage.jpg"
                        width={250}
                        height={350}
                        className="pb-2"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <Link href="/">
            <Image
              src={logo}
              width={32}
              height={32}
              className="w-20 h-20 mt-2"
            />
          </Link>
        </div>

        <div className="w-2/3 xl:w-1/2 flex justify-end gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
