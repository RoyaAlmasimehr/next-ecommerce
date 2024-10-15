"use client";

import Link from "next/link";
import { useState } from "react";


export default function FAQAccordion() {
 
  const [openAccordion, setOpenAccordion] = useState(null);

  
  const handleAccordionToggle = (accordionName) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Shipping Information Accordion */}
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("shipping")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Shipping Information
          <span className="text-gray-500">
            {" "}
            {openAccordion === "shipping" ? "-" : "+"}
          </span>
        </button>
        <div
          className={` transition-all duration-700 overflow-hidden ${
            openAccordion === "shipping" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-black text-sm">
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Country</th>
                  <th className="border px-4 py-2 text-left">Shipping*</th>
                  <th className="border px-4 py-2 text-left">Free Shipping*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Netherlands</td>
                  <td className="border px-4 py-2">€ 5,95</td>
                  <td className="border px-4 py-2">€ 100,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Belgium</td>
                  <td className="border px-4 py-2">€ 7,95</td>
                  <td className="border px-4 py-2">€ 100,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Germany and Luxembourg</td>
                  <td className="border px-4 py-2">€ 11,95</td>
                  <td className="border px-4 py-2">€ 150,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Austria, Czech Republic, France and Poland
                  </td>
                  <td className="border px-4 py-2">€ 14,95</td>
                  <td className="border px-4 py-2">€ 175,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Croatia, Hungary, Slovakia, Slovenia, and UK
                  </td>
                  <td className="border px-4 py-2">€ 16,95</td>
                  <td className="border px-4 py-2">€ 200,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Ireland, Italy, and Spain
                  </td>
                  <td className="border px-4 py-2">€ 17,95</td>
                  <td className="border px-4 py-2">€ 250,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Portugal and Romania</td>
                  <td className="border px-4 py-2">€ 20,95</td>
                  <td className="border px-4 py-2">€ 250,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Bulgaria and Greece</td>
                  <td className="border px-4 py-2"> € 21,95</td>
                  <td className="border px-4 py-2"> € 300,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Denmark and Sweden</td>
                  <td className="border px-4 py-2"> € 24,95</td>
                  <td className="border px-4 py-2"> € 325,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Estonia, Finland, Latvia, and Lithuania
                  </td>
                  <td className="border px-4 py-2"> € 25,95</td>
                  <td className="border px-4 py-2"> € 350,00</td>
                </tr>
              </tbody>
            </table>
            <div className="font-bold text-center uppercase">
              <p className="text-xs">
                *Starting shipping price, may increase due to parcel size for
                the selected item(s)
              </p>
              <p className="text-xs">
                **Free shipping status may be affected by promotions or sales
              </p>
              <p className="text-xs">
                Final shipping cost will always be displayed during checkout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Accordion */}
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("productInfo")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Returns and Exchanges:
          <span className="text-gray-500">
            {openAccordion === "productInfo" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700 overflow-hidden ${
            openAccordion === "productInfo" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-600 text-sm">
            <p>
              If you are unhappy with your product, please use the return label
              provided with the original parcel.
            </p>
            <p className="">
              Returns can be made as long as the items are: clean, unworn, with
              tags, folded neatly and placed back into its original packaging.
            </p>
            <p>
              Our sealing bags have a secondary sealing strip for just that
              purpose.
            </p>
            <p className="mb-4">
              Our clothing is made from high quality cotton and in some items,
              recycled polyester.
            </p>
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
        </div>
      </div>

      {/* سایر اکاردیون‌ها به همین صورت */}
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("ReturnsOpen")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Sizing and Fit:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "ReturnsOpen" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700    overflow-hidden ${
            openAccordion === "ReturnsOpen" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-600 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              Do you provide a size guide?
            </h3>
            <p className="mb-6">
              All size guides are listed on the product pages with their
              respective item
            </p>
            <h3 className="text-black font-bold uppercase mb-4">
              Our size fits:
            </h3>
            <p className="mb-6">
              All our hoodies, sweaters and T-shirts are Unisex based, depending
              on your body type, the fit might vary, have a look at our size
              charts on the product pages to find more detailed results. Shirts
              and Polo’s run as a regular fit, for these items as well, the
              charts can be found in the product section.
            </p>
            <h3 className="text-black font-bold uppercase mb-4">
              Can customers exchange items for a different size?
            </h3>
            <p className="mb-6">
              Customers can, within a 14 day window, exchange their selection of
              items, please contact us via email or Instagram so that we can
              prepare your exchange, please note that all shipping costs for
              this exchange will be required to be paid. Use your return label
              to send us back the incorrect sized item, upon receiving and
              inspecting the item, we will ship your replacement right away.
              Please note that the exchanged items need to fit the same criteria
              as a regular return item.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("productInfoOpen")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Product Information:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "productInfoOpen" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700      overflow-hidden ${
            openAccordion === "productInfoOpen" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-600 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              How can customers care for their garments?
            </h3>
            <p className="mb-6">
              Handle with care, it’s a piece of clothing after all, not a toy 😊
            </p>
            <h3 className="text-black font-bold uppercase mb-4">
              What materials are used in your clothing items?
            </h3>
            <p className="mb-6">
              Our clothing is made from high quality cotton and in some items,
              recycled polyester.
            </p>
            <h3 className="text-black font-bold uppercase mb-4">
              Are the colors on the website accurate representations of the
              actual products?
            </h3>
            <p className="mb-6">
              The colors on the website are realistic reflection of what you
              will receive, have a look!
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("OrderingProcess")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Ordering Process:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "OrderingProcess" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700      overflow-hidden ${
            openAccordion === "OrderingProcess" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-600 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              How can customers place an order?
            </h3>
            <ul className="list-decimal list-inside mb-6">
              <li>
                Add the items you want to order to your basket, by choosing
                color and size.
              </li>
              <li>
                Follow the steps through our product pages towards the basket.
              </li>
              <li>
                Enter your payment option and fill in your details, voilà that’s
                all it took!
              </li>
            </ul>
            <h3 className="text-black font-bold uppercase mb-4">
              Can orders be modified or canceled after they are placed?
            </h3>
            <p className="mb-6">
              As long as we haven’t shipped your order, please reach out to us
              with your inquiry, that way we can find the ideal solution for
              your issue
            </p>
            <h3 className="text-black font-bold uppercase mb-4">
              Is there an order confirmation email?
            </h3>
            <p className="mb-6">
              Once your payment has been processed, you will receive a
              confirmation via email.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("PaymentMethods")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Payment Methods:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "OrderingProcess" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700    overflow-hidden ${
            openAccordion === "PaymentMethods" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-900 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              What payment methods do you accept?
            </h3>
            <p>We accept the following payments:</p>
            <ul className="list-disc list-inside mb-6">
              <li>Ideal</li>
              <li>Mastercard</li>
              <li>Visa</li>
              <li>PayPal</li>
              <li>GooglePay</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("AccountInfo")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Account Information:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "AccountInfo" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700     overflow-hidden ${
            openAccordion === "AccountInfo" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-900 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              How can customers create an account?
            </h3>
            <p className="mb-5">
              This feature will follow soon, for now, please register for our
              newsletter so that we can keep you updated, as soon as we have
              this feature ready, we will send you an invite!
            </p>
            <h3 className="text-black font-bold uppercase mb-4">
              What are the benefits of having an account?
            </h3>
            <p>
              The benefits, of course, of having an account are the following:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Special discounts based on your previous shoppingspree(s)</li>
              <li>
                If you leave your birthday, we will send you a little surprise
                on the big day!
              </li>
              <li>
                In your account you can find a detailed overview of your orders
                and track them as they are being shipped to you.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("Promotions")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Promotions and Discounts:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "Promotions" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700     overflow-hidden ${
            openAccordion === "Promotions" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-900 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              How can customers apply promotional codes?
            </h3>
            <p className="mb-5">
              Fill in the code in the allocated slot during checkout for your
              discount
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("ContactInfo")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Contact Information:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "ContactInfo" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700        overflow-hidden ${
            openAccordion === "ContactInfo" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-900 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              GET IN TOUCH WITH OUR customer support VIA:
            </h3>
            <Link className="text-blue-400 " href="/">
              {" "}
              info@kouchinni.com{" "}
            </Link>
            <h3 className="text-black font-bold uppercase mb-4 mt-6">
              Or contact us via Instagram chat:
            </h3>
            <Link className="text-blue-400 " href="/">
              https://www.instagram.com/kouchinniapparels/
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => handleAccordionToggle("Privacy")}
          className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
        >
          Privacy and Security:
          <span className="text-gray-500">
            {" "}
            {openAccordion === "Privacy" ? "-" : "+"}
          </span>
        </button>
        <div
          className={`transition-all duration-700    overflow-hidden ${
            openAccordion === "Privacy" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 text-gray-900 text-sm ">
            <h3 className="text-black font-bold uppercase mb-4">
              Assure customers about the security of their personal information.
            </h3>
            <p>
              As part of European law we adhere to the rules and regulations of
              the GDPR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
