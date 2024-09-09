
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

const items = [
  {
    id: 1,
    title: "Designed and embroidered in The Netherlands",
    desc: "All our designs and embroideries are made in-house at our Kouchinni HQ with the highest attention to detail.",
    img: "https://kouchinni.com/wp-content/uploads/2023/12/crown.svg",
  },
  {
    id: 2,
    title: "High Quality",
    desc: "We have selected, designed and produced our products with durability and sustainability in mind.",
    img: "https://kouchinni.com/wp-content/uploads/2023/12/sewing-machine.svg",
  },
  {
    id: 3,
    title: "Fast And Safe Shipping",
    desc: "Free shipping above €100,- in The Netherlands. Track your order with DHL.",
    img: "https://kouchinni.com/wp-content/uploads/2023/12/delivery.svg",
  },
];

const Quality = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-4  "
          >
            <img src={item.img} alt={item.title} className="w-16 h-16 mb-4" />
            <h4 className={` ${yantramanav.className}text-[28px] py-6 font-bold mb-2 uppercase`}>{item.title}</h4>
            <p className={ `${roboto.className} font-semibold   text-[17px]  text-gray-600 py-2`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;
