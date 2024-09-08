import Link from "next/link";
import Image from "next/image";
import { Yantramanav } from "@next/font/google";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const categories = [
  {
    id: 1,
    title: "Casual",
    img: "https://kouchinni.com/wp-content/uploads/2024/03/hoodie-outline-black-00.svg",
    hoverImg:
      "https://kouchinni.com/wp-content/uploads/2024/03/hoodie-outline-red-ds.svg",
    url: "/category/hoodie",
  },
  {
    id: 2,
    title: "Formal",
    img: "https://kouchinni.com/wp-content/uploads/2024/03/sweater-outline-black-00.svg",
    hoverImg:
      "https://kouchinni.com/wp-content/uploads/2024/03/sweater-outline-red-ds.svg",
    url: "/category/sweater",
  },
  {
    id: 3,
    title: "Sport",
    img: "https://kouchinni.com/wp-content/uploads/2024/03/t-shirt-outline-black-00.svg",
    hoverImg:
      "https://kouchinni.com/wp-content/uploads/2024/03/t-shirt-outline-red-ds.svg",
    url: "/category/t-shirt",
  },
  {
    id: 4,
    title: "Classic",
    img: "https://kouchinni.com/wp-content/uploads/2024/03/shirt-outline-black-00.svg",
    hoverImg:
      "https://kouchinni.com/wp-content/uploads/2024/03/shirt-outline-red-ds.svg",
    url: "/category/shirt",
  },
  {
    id: 5,
    title: "Polo",
    img: "https://kouchinni.com/wp-content/uploads/2024/04/polo-outline-black-00.svg",
    hoverImg:
      "https://kouchinni.com/wp-content/uploads/2024/04/polo-outline-red-ds-00.svg",
    url: "/category/polo",
  },
];

const CategoryList = () => {
  return (
    <section className="py-12 px-6 md:px-12 hidden md:block">
      <p className="text-gray-500 uppercase text-center text-[9px]">
        explore our new catalogue
      </p>
      <h2 className={` ${yantramanav.className}  text-center text-6xl font-bold mb-8 uppercase  mt-2 `}>
        {" "}
        by Style
      </h2>
      <div className="grid md:grid-cols-5 lg:grid-cols-5 ">
        {categories.map((category) => (
          <Link key={category.id} href={category.url} className="group">
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-28 h-8 flex items-center justify-center mb-4 relative">
                <Image
                  src={category.img}
                  alt={category.title}
                  width={96}
                  height={96}
                  className="absolute inset-0 transition-opacity   duration-500 group-hover:opacity-0  "
                />
                <Image
                  src={category.hoverImg}
                  alt={category.title}
                  width={96}
                  height={96}
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100   "
                />
              </div>

              <div className="w-full h-[2px] bg-transparent transition-all duration-300 mt-2 "></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
