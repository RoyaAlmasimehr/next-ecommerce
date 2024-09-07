// components/ProductGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { Yantramanav } from "@next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const yantramanav = Yantramanav({
  weight: ["900"],
  subsets: ["latin"],
});

export const productsMan = [
  {
    id: 1,
    title: "Modern Art Piece",
    price: "$100",
    model: "Hoodies",
    hoverImg:
      "https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Men",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
    url: "/product/1",
  },
  {
    id: 2,
    title: "Classic Sculpture",
    price: "$150",
    model: "Sweaters",
    hoverImg:
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Men",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    url: "/product/2",
  },
  {
    id: 3,
    title: "Abstract Painting",
    price: "$200",
    model: "T-Shirt",
    hoverImg:
      "https://images.pexels.com/photos/3099026/pexels-photo-3099026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Men",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    url: "/product/3",
  },
  {
    id: 4,
    title: "Abstract Painting",
    price: "$900",
    model: "Shirt",
    hoverImg:
      "https://images.pexels.com/photos/14219035/pexels-photo-14219035.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    sex: "Men",
    img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/product/4",
  },
  {
    id: 5,
    title: "Abstract Painting",
    price: "$250",
    model: "Polo's",
    hoverImg:
      "https://images.pexels.com/photos/2463507/pexels-photo-2463507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Men",
    img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/product/5",
  },
];

export const productsWomen = [
  {
    id: 1,
    title: "Modern Art Piece",
    price: "$100",
    model: "Hoodies",
    hoverImg:
      "https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Women",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
    url: "/product/1",
  },
  {
    id: 2,
    title: "Classic Sculpture",
    price: "$150",
    model: "Sweaters",
    hoverImg:
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Women",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    url: "/product/2",
  },
  {
    id: 3,
    title: "Abstract Painting",
    price: "$200",
    model: "T-Shirt",
    hoverImg:
      "https://images.pexels.com/photos/3099026/pexels-photo-3099026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sex: "Women",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    url: "/product/3",
  },
  {
    id: 4,
    title: "Abstract Painting",
    price: "$900",
    model: "Shirt",
    hoverImg:
      "https://images.pexels.com/photos/14219035/pexels-photo-14219035.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    sex: "Women",
    img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/product/4",
  },
];
const ProductList = () => {
  return (
    <section className="py-12 px-6">
      <p className="text-gray-500 text-[10px] uppercase text-center">
        browser our latest collection
      </p>
      <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wide ">
        shop by style
      </h2>
      <h3 className="font-bold text-center text-xl mb-12 ">MEN'S</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsMan.map((product) => (
          <>
            <div
              key={product.id}
              className="group relative border rounded-lg overflow-hidden"
            >
              <Link href={product.url}>
                <div className="relative h-64 w-full">
                  <Image
                    src={product.img}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105  group-hover:opacity-0 transition-opacity  transition-transform duration-500"
                  />
                  <Image
                    src={product.hoverImg}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className={`${yantramanav.className} text-lg `}>
                    {product.title}
                  </h3>
                  <div
                    className={` ${roboto.className} flex justify-start tracking-wide  text-gray-500 text-[12px] Class
Properties
font-thin`}
                  >
                    <a href="/">{product.model} </a>{" "}
                    <span className="px-2">| </span>
                    <a href="/">{product.sex}</a>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-gray-500">{product.price}</p>
                    <Link
                      href="/"
                      className="  transition ease-in-out duration-500 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6  hover:text-lama"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
      <div>
        <Link href="/" className="flex justify-center mt-14 ">
          <button
            className={`${yantramanav.className} uppercase border border-gray-400  px-9 py-4 tracking-normal text-xs  hover:bg-black hover:text-white transition ease-in-out duration-500 `}
          >
            Men's collection
          </button>
        </Link>
      </div>
      <main className="mt-12">
        <h3 className="font-bold text-center text-xl mb-12  uppercase">
          women'S
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsWomen.map((product) => (
            <>
              <div
                key={product.id}
                className="group relative border rounded-lg overflow-hidden"
              >
                <Link href={product.url}>
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.img}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105  group-hover:opacity-0 transition-opacity  transition-transform duration-500"
                    />
                    <Image
                      src={product.hoverImg}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`${yantramanav.className} text-lg `}>
                      {product.title}
                    </h3>
                    <div
                      className={` ${roboto.className} flex justify-start tracking-wide  text-gray-500 text-[12px] Class
Properties
font-thin`}
                    >
                      <a href="/">{product.model} </a>{" "}
                      <span className="px-2">| </span>
                      <a href="/">{product.sex}</a>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <p className="text-gray-500">{product.price}</p>
                      <Link
                        href="/"
                        className="  transition ease-in-out duration-500 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6  hover:text-lama"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div>
          <Link href="/" className="flex justify-center mt-14 ">
            <button
              className={`${yantramanav.className} uppercase border border-gray-400  px-9 py-4 tracking-normal text-xs  hover:bg-black hover:text-white transition ease-in-out duration-500 `}
            >
              women's collection
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default ProductList;
