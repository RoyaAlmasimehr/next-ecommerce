"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; // اصلاح مسیر ایمپورت
import { Yantramanav } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});
const yantramanav = Yantramanav({
  weight: ["900","700"],
  subsets: ["latin"],
});

const slides = [
  {
    id: 1,
    title: "find your activewear",
    description: "Sale! Up to 50% off!",
    img: "https://kouchinni.com/wp-content/uploads/2023/11/Kouchinni-activewear.jpg",
    url: "/shop",
  },
  {
    id: 2,
    title: "streetwear, in style",
    description: "Sale! Up to 50% off!",
    img: "https://kouchinni.com/wp-content/uploads/2023/11/Kouchinni-club-collection.jpg",
    url: "/shop",
  },
  {
    id: 3,
    title: "kouchinni our club ,our dynasty",
    description: "Sale! Up to 50% off!",
    img: "https://kouchinni.com/wp-content/uploads/2023/11/Kouchinni-streetwear-1.jpg",
    url: "/shop",
  },
];

const Slider = () => {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1500}
        modules={[Autoplay, Pagination]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className=" overflow-hidden relative h-screen w-screen md:w-screen md:h-screen ">
              <div className="relative w-full h-full amin-w-full min-h-full">
                <Image
                  src={slide.img}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  alt={slide.title}
                  className="absolute inset-0"
                />
              </div>
              <div className="absolute  inset-0 flex flex-col items-center justify-center text-white   mt-60">
                <h1
                  className={`${yantramanav.className} text-4xl mt-10 md:text-5xl font-semibold text-center uppercase`}
                >
                  {slide.title}
                </h1>
                <p
                  className={` ${roboto.className} mt-4  Class
Properties
font-thin  text-[12px] text-center`}
                >
                  Search our club's colletctions and find the ideal pieces for
                  you
                </p>
                <Link href={slide.url}>
                  <button
                    className={`${yantramanav.className} uppercase  mt-6 px-14 py-5 bg-transparent border border-butShop border-spacing-2 rounded-none   text-butShop  rounded-lg hover:bg-butShop hover:text-black text-bold  hover:text-black font-bold transition ease-in-out duration-500 `}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <div className="swiper-pagination">
          {/* Custom CSS for Pagination */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              @apply w-3 h-3 bg-white rounded-full mx-1;
            }
            .swiper-pagination-bullet-active {
              @apply bg-gray-800;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Slider;
