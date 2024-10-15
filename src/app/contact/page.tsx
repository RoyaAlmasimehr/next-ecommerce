import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { test_category } from "../../../practic";
import mail from "../../../public/icons/Mail-Send-Envelope--Streamline-Flex.svg"
import insta from '../../../public/icons/instagram-stroke-rounded.svg'
import time from '../../../public/icons/Time-Lapse--Streamline-Flex.svg'
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});


const ContactPage = () => {



  return (
    <>
      <div className="pt-16">
        <div
          className={`${roboto.className} text-[10px] uppercase p-6   pt-10 pl-10`}
        >
          <span className="text-gray-500 pr-2  ">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
          </span>
          <span className="pr-2">|</span>
          <span className="uppercase">Contact</span>
        </div>
      </div>
      <header
        className="relative w-full  md:h-[20vh] h-[25vh]  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://kouchinni.com/wp-content/uploads/2024/01/header-stairway.svg')",
        }}
      >
        <div className="relative flex flex-col justify-center items-start  h-full text-left"></div>
      </header>
      <div className="min-h-screen py-10 px-4 sm:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Get In Touch With Us
          </h1>
          <p className="mt-4 text-sm text-justify  px-16 md:px-24 lg:px-36 text-gray-600">
            Can't find what you need on the FAQ page? Please feel free to get in
            touch with us in case you have any questions. You can reach us via
            our email or message us on instagram and we'll do our best to answer
            as soon as possible.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            {/* Contact Details */}
            <div>
              <div className="flex items-start gap-x-6 pb-6">
                <Image src={mail} width={25} height={25} />
                <p className="mb-2">info@kouchinni.com</p>
              </div>
              <div className="flex items-start gap-x-6 pb-6">
                <Image src={insta} width={25} height={25} />
                <p className="mb-2">@kouchinniapparels</p>
              </div>

              <div className="flex items-start gap-x-6 ">
                <Image src={time} width={25} height={25} />
                <p className="mb-2 leading-10">
                  Monday to Friday: 9am-9pm <br />
                  Saturday to Sunday: 9am-10pm
                </p>
              </div>
              <p className="text-[10px] uppercase font-bold mt-10 pl-4">
                With the exception of dutch national holidays.
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 bg-gray-300">
              {/* Here you would embed a Google Map */}
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=... (Your Embed Link)"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white border border-black shadow-lg p-8">
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          <form>
            {/* Name Field */}
            <div className="mb-6">
              <input
                id="name"
                type="text"
                placeholder=" NAME"
                className="px-4 h-12 border-b-2 border-black bg-transparent w-1/2  focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer focus:placeholder-gray-900   placeholder:text-xs "
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <input
                id="email"
                type="email"
                placeholder=" EMAIL"
                className="px-4 h-12 border-b-2 border-black bg-transparent w-1/2  focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer focus:placeholder-gray-900 placeholder:text-xs "
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <textarea
                id="message"
                rows="5"
                placeholder=" MESSAGAE "
                className="px-4 h-48 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer placeholder:text-xs focus:placeholder-gray-900"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-4  text-xs font-semibold uppercase  bg-white text-black border border-black shadow hover:bg-black hover:text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div
          className="text-center
         mt-36"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            faq page
          </h2>
          <p className="mt-7 mx-9">
            In case you haven't already checked, here is our FAQ page. Please
            visit and you might just find what you seek! 🔮✨
          </p>
          <Link href="/faq">
            {" "}
            <button
              type="submit"
              className="px-24 py-6  text-xl font-semibold uppercase  bg-white text-black border border-black shadow hover:bg-black hover:text-white transition-colors duration-300 mt-7"
            >
              faq page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
