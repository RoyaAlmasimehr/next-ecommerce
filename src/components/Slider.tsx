"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; // اصلاح مسیر ایمپورت
import { Yantramanav } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
const yantramanav = Yantramanav({
  weight: ["900"],
  subsets: ["latin"],
});

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/shop",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/shop",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
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
              <div className="absolute  inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                <h1 className="text-xl mt-10  md:text-6xl font-bold text-center">
                  {slide.title}
                </h1>
                <p className="mt-4 text-md md:text-2xl text-center">
                  {slide.description}
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
