


import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});


  function  ShippingAndReturns () {
  return (
    <>
      <div className="pt-16 ">
        <div
          className={`${roboto.className} text-[10px] uppercase p-6   pt-10 pl-10`}
        >
          <span className="text-gray-500 pr-2  ">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
          </span>
          <span className="pr-2">|</span>
          <span>FAQ</span>
        </div>
      </div>
      <header
        className="relative w-full h-[30vh]  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://kouchinni.com/wp-content/uploads/2024/01/header-stairway.svg')",
        }}
      >
        <div className="relative flex flex-col justify-center items-start  h-full text-left">
          <div className="pl-10">
            <Image
              src="https://kouchinni.com/wp-content/uploads/2024/01/shipping-returns-icon.svg"
              width={180}
              height={180}
              className="hidden sm:block "
            />
          </div>
        </div>
      </header>
      <div className="max-w-5xl mx-auto p-10">
        {/* Header Section */}
        <div className="">
          <div className="w-1/2">
            <h1 className="text-4xl font-semibold text-black uppercase  mb-6">
              Countries and Shipping Costs
            </h1>
            <p className="text-gray-700   text-sm mb-12 text-justify">
              Your parcel will be dispatched from our NL warehouse within 2
              working days of placing your order. We try to dispatch all orders
              placed before 15:00 GMT on the same working day.
            </p>
            <div></div>
          </div>
        </div>
        {/* Shipping Section */}
        <section className="mb-12">
          {/* Example Shipping Table */}
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-gray-700">
            <thead>
              <tr className="">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Country
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Shipping*
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Free Shipping**
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border  border-gray-300 px-4 py-2">
                  Netherlands
                </td>
                <td className="border border-gray-300 px-4 py-2">€ 5,95</td>
                <td className="border border-gray-300 px-4 py-2">€ 100,00</td>
              </tr>
              <tr className="">
                <td className="border border-gray-300 px-4 py-2">Belgium</td>
                <td className="border border-gray-300 px-4 py-2"> € 7,95</td>
                <td className="border border-gray-300 px-4 py-2">€ 100,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Germany and Luxembourg
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 9,95</td>
                <td className="border border-gray-300 px-4 py-2">€ 150,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Austria, Czech Republic, France and Poland
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 13,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 175,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Croatia, Hungary, Slovakia, and Slovenia
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 16,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 200,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Ireland, Italy, and Spain
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 18,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 250,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Portugal and Romania
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 20,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 250,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bulgaria and Greece
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 21,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 300,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Denmark and Sweden
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 26,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 325,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Estonia, Finland, Latvia, and Lithuania
                </td>
                <td className="border border-gray-300 px-4 py-2"> € 27,95</td>
                <td className="border border-gray-300 px-4 py-2"> € 350,00</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="font-bold text-center text-xs uppercase">
          <p>
            *Starting shipping price, may increase due to parcel size for the
            selected item(s)
          </p>
          <p>**Free shipping status may be affected by promotions or sales</p>
          <p>Final shipping cost will always be displayed during checkout</p>
        </div>
        {/* Returns Section */}
        <section className="mb-12">
          <h2 className="font-bold text-4xl uppercase text-black my-10">
            Delivery Times
            <br /> Estimations
          </h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-gray-700">
            <thead>
              <tr className="">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Country
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Delivery time
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Netherlands
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  2-4 business days
                </td>
              </tr>
              <tr className="">
                <td className="border border-gray-300 px-4 py-2">Belgium</td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Germany and Luxembourg
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Austria, Czech Republic, France and Poland
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Croatia, Hungary, Slovakia, and Slovenia
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Ireland, Italy, and Spain
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Portugal and Romania
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bulgaria and Greece
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Denmark and Sweden
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Estonia, Finland, Latvia, and Lithuania
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  5-7 business days
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2 className="font-bold text-4xl uppercase text-black my-10">
            Returns and
            <br /> Exchanges:
          </h2>
          <div className="text-sm">
            <p className="pb-3">
              If you are unhappy with your product, please use the return label
              provided with the original parcel.
            </p>
            <p className="pb-3">
              Returns can be made as long as the items are: clean, unworn, with
              tags, folded neatly and placed back into its original packaging.
            </p>
            <p className="pb-3">
              Our sealing bags have a secondary sealing strip for just that
              purpose.
            </p>
          </div>
          <div className="text-sm pt-8 w-2/3">
            <ul className="list-decimal list-inside">
              <li>Place all items in its original packing.</li>
              <li>Remove the return label for the bag</li>
              <li>Place the return label over the original label</li>
              <li>Remove the seal from the secondary strip</li>
              <li>Tightly close the bag</li>
              <li>Bring it to a DHL Service Point to send it on its way</li>
              <li>
                As soon as we have received and inspected your return we will
                contact you via email regarding your return.
              </li>
              <li>
                If the item is in proper condition, the cost for returning the
                item will be deducted from your amount due and be transferred to
                you within 5 business days.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="mt-24 mb-32">
            <h3 className="font-bold text-4xl uppercase text-black ">
              FAQ PAGE
            </h3>
            <p className="text-xs pr-8 text-gray-700 pt-7 mb-12">
              In case you have anymore questions, please visit our FAQ page and
              might just find what you seek! 🔮✨
            </p>
            <Link
              href="/faq"
              className="px-16  py-6  text-xs font-semibold uppercase  bg-white text-black border border-black shadow hover:bg-black hover:text-white transition-colors duration-300"
            >
              {" "}
              FAQ PAGE
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShippingAndReturns;
