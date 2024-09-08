import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookSquare, FaTiktok } from "react-icons/fa"; 
import logo from "../../public/icons/Kouchinni-Logo-1.svg"; 
import { Yantramanav } from "@next/font/google";

const yantramanav = Yantramanav({
  weight: ["900", "700"],
  subsets: ["latin"],
});


const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black mt-10 pt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4   gap-6 py-8">
        {/* ستون اول: لوگو و توضیحات */}
        <div className="mb-8">
          <Image src={logo} alt="Kouchinni Logo" width={100} height={50} />
        </div>
        <div className="mb-8">
          <h3
            className={` ${yantramanav.className} font-bold   text-lg font-semibold mb-4 uppercase`}
          >
            Follow Us on
          </h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com"
              className="text-black hover:text-lama transition ease-in-out duration-500"
            >
              <FaInstagram className="text-2xl" />
            </Link>
            <Link
              href="https://www.facebook.com"
              className="text-black hover:text-lama transition ease-in-out duration-500 "
            >
              <FaFacebookSquare className="text-2xl" />
            </Link>

            <Link
              href="https://www.tiktok.com"
              className="text-black hover:text-lama transition ease-in-out duration-500  "
            >
              <FaTiktok className="text-2xl" /> 
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h3
            className={`${yantramanav.className} font-bold text-lg font-semibold mb-4 uppercase`}
          >
            About us
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/category/hoodie"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                About the brand
              </Link>
            </li>
            <li>
              <Link
                href="/category/sweater"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                Behind the art
              </Link>
            </li>
          </ul>
        </div>

        {/* ستون سوم: لینک های فروشگاه */}
        <div className="mb-8">
          <h3
            className={`${yantramanav.className} font-bold text-lg font-semibold mb-4 uppercase`}
          >
            Customer support
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/men"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                contact
              </Link>
            </li>
            <li>
              <Link
                href="/women"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                shopping & returns
              </Link>
            </li>
            <li>
              <Link
                href="/new-arrivals"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                faq
              </Link>
            </li>
            <li>
              <Link
                href="/new-arrivals"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                terms &conditions
              </Link>
            </li>
            <li>
              <Link
                href="/new-arrivals"
                className={`${yantramanav.className} font-semibold uppercase text-xs relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
              >
                privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm border-t border-gray-700 p-4 bg-black">
        &copy; 2024 Kouchinni. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
