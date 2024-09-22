import Image from "next/image";
import { Yantramanav } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"], // اضافه کردن استایل italic
});

const yantramanav = Yantramanav({
  weight: ["700", "900"],
  subsets: ["latin", ],
});

export default function BehindTheArt() {
  return (
    <div className="w-full min-h-screen bg-white px-6 py-24">
      <section className="text-center mb-12">
        <h2
          className={` italic text-4xl font-bold uppercase`}
        >
          Behind The Art
        </h2>

        <p
          className={`${roboto.className} text-gray-900 mt-4 text-xs mx-[10px] tracking-wide text-center`}
        >
          DISCOVER THE MYTH AND MEANING BEHIND THE DESIGNS OF OUR NEW COLLECTION
        </p>
        <h3
          className={`${roboto.className} text-black mt-4 text-xs mx-[10px] italic font-bold text-center`}
        >
          CHOOSE YOUR STORY
        </h3>
      </section>

      {/* بخش دوم: تصاویر و توضیحات */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/path-to-your-image-1.jpg"
            width={600}
            height={400}
            alt="Art description 1"
            className="w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">هنرمند ۱</h2>
          <p className="text-gray-600">
            توضیحی در مورد هنرمند ۱ و اثر هنری او.
          </p>
        </div>

        <div>
          <Image
            src="/path-to-your-image-2.jpg"
            width={600}
            height={400}
            alt="Art description 2"
            className="w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">هنرمند ۲</h2>
          <p className="text-gray-600">
            توضیحی در مورد هنرمند ۲ و اثر هنری او.
          </p>
        </div>
      </section>
    </div>
  );
}
