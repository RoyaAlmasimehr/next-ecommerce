import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Yantramanav } from "@next/font/google";

// فونت اختصاصی
const yantramanav = Yantramanav({
  weight: ["900", "700"],
  subsets: ["latin"],
});

// آرایه‌ای از داده‌های مربوط به طراحی‌ها
const designs = [
  {
    id: 1,
    title: "Persius",
    img: "https://kouchinni.com/wp-content/uploads/2024/02/behind-the-art-home-section-persius.jpg",
    logoUrl: "https://kouchinni.com/wp-content/uploads/2023/12/persius.svg",
    url: "/category/Persius",
  },
  {
    id: 2,
    title: "Royal ibex",
    img: "https://kouchinni.com/wp-content/uploads/2024/02/behind-the-art-home-section-ibex.jpg",
    logoUrl: "https://kouchinni.com/wp-content/uploads/2023/12/ibex.svg",
    url: "/category/Royal ibex",
  },
  {
    id: 3,
    title: "Atousa",
    img: "https://kouchinni.com/wp-content/uploads/2024/02/behind-the-art-home-section-atusa.jpg",
    logoUrl: "https://kouchinni.com/wp-content/uploads/2023/12/atusa.svg",
    url: "/category/Atousa",
  },
  {
    id: 4,
    title: "Homage",
    img: "https://kouchinni.com/wp-content/uploads/2024/02/behind-the-art-home-section-homage.jpg",
    logoUrl:
      "https://kouchinni.com/wp-content/uploads/2023/12/shop-by-edsign-homage.svg",
    url: "/category/Homage",
  },
];

const BehindTheArt = () => {
  return (
    <section className="py-14 px-6 mt-20 md:px-12">
      <p className="text-thin text-[8px] text-center text-gray-500 uppercase pb-2">
        explore the ancient tales which has fueled the designs of our new
        collection
      </p>
      <h2 className="text-center text-4xl font-bold mb-8 uppercase">
        BEHIND THE ART
      </h2>
      {/* Responsive Grid: col-1 for small screens, col-4 for md and up */}
      <div className="grid xx:grid-cols-1 sm:grid-cols-4 md:grid-cols-4  p-4">
        {designs.map((design, index) => (
          <Link
            key={design.id}
            href={design.url}
            className="group relative block overflow-hidden"
          >
            {/* تصویر اصلی */}
            <div className="relative overflow-hidden">
              <Image
                src={design.img}
                alt={design.title}
                width={400}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="absolute bottom-4 left-4 z-20 transition-all duration-500 ease-in-out group-hover:bottom-16">
              <h4
                className={`${
                  yantramanav.className
                } text-left text-lg font-bold uppercase ${
                  design.id % 2 === 0 ? "text-black" : "text-white"
                }`}
              >
                <p className="text-[10px]">the story of</p>
                {design.title}
              </h4>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex flex-col items-center">
                <Image
                  src={design.logoUrl}
                  alt={design.title}
                  width={300}
                  height={300}
                  className="mb-20 transition-transform duration-500 group-hover:scale-95 xs:group-hover:scale-120 sm:group-hover:scale-[0.5] md:group-hover:scale-[0.5]"
                />
              </div>
            </div>

            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white py-4 px-4 w-full border border-spacing-1 flex justify-between items-center text-black uppercase transition-transform duration-500 transform translate-y-6 group-hover:translate-y-0">
                <span className={`${yantramanav.className} font-bold text-xs`}>
                  Explore Collection
                </span>
                <FaArrowRight className="ml-2 xs:ml-8" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BehindTheArt;
