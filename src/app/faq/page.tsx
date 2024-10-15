import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

import LeaveReplyForm from "@/components/LeaveReply";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});


function FAQ() {


    return (
      <div>
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
          {/* متن وسط صفحه */}
          <div className="relative flex flex-col justify-center items-start  h-full text-left">
            <h1 className=" text-3xl md:text-4xl font-bold px-4 sm:px-8      uppercase tracking-wide">
              Faq Page
            </h1>
          </div>
        </header>
        <FAQAccordion />
        <LeaveReplyForm />
      </div>
    );
}

export default FAQ;