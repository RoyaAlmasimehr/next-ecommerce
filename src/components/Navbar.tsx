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
    <div className={` h-20 px-6 md:pr-8 ml-0 border text-sm`}>
      {/* mobile   */}
      <div className=" h-full  flex items-center justify-between md:hidden">
        <Link href="/">
          <Image
            src={logo}
            width={32}
            height={32}
            className="w-16 h-16 mt-2 "
          />
        </Link>
        <Menu />
      </div>
      {/* bigger screens   */}
      <div className="hidden md:flex items-center justify-between  h-full gap-4 ">
        <div className="w-2/3 flex items-center justify-start ">
          <div
            className={` ${yantramanav.className} flex gap-2  space-x-2  uppercase`}
          >
            <Link className="  hover:text-lama text-x " href="/">
              Home
            </Link>
            <Link className="  hover:text-lama " href="/">
              men
            </Link>
            <Link className="  hover:text-lama pr-2" href="/">
              woman
            </Link>
            <Link className=" hover:text-lama " href="/">
              behind the art
            </Link>
          </div>
        </div>
        <div>
          <Link href="/" className="">
            <Image
              src={logo}
              width={32}
              height={32}
              className="w-20 h-20 mt-2 "
            />
          </Link>
        </div>

        <div className="w-2/3  xl:w-1/2 flex justify-end gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
