import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/Kouchinni-Logo-1.svg";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Yantramanav } from "@next/font/google";

const yantramanav = Yantramanav({
  weight: ["900"],
  subsets: ["latin"],
});

const Navbar = () => {
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
            <Link href="/" className="group relative pb-1">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/men" className="group relative pb-1">
              Men
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/women" className="group relative  pb-1">
              Women
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="group relative pb-1">
              Behind the Art
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
