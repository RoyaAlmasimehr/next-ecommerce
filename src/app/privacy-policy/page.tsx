"use client"


import { useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import IconFooer from "@/components/IconFooter";


const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function PrivacyPolicyAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <span>Privacy Policy</span>
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
          <h1 className=" text-3xl md:text-4xl font-bold pl-8  mt  uppercase tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </header>
      <div className={`${roboto.className} w-full min-h-screen bg-white `}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
          <div className="text-sm text-gray-700  leading-relaxed">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
                >
                  {item.title}
                  <span className="text-gray-500">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="py-4 text-gray-600 text-sm">
                    {item.content.map((contentItem, contentIndex) => (
                      <div key={contentIndex}>
                        {contentItem.type === "p" ? (
                          <p className="pb-3">{contentItem.text}</p>
                        ) : contentItem.type === "ul" ? (
                          <ul className="list-disc pl-5 space-y-2">
                            {contentItem.items.map((listItem, listIndex) => (
                              <li key={listIndex}>{listItem}</li>
                            ))}
                          </ul>
                        ) : contentItem.type === "h3" ? (
                          <h3 className="font-bold text-black text-lg pt-4 pb-2">
                            {contentItem.text}
                          </h3>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <IconFooer />
    </>
  );
}

// Sample accordion data with mixed content
const accordionData = [
  {
    title: "When do you apply this privacy statement?",
    content: [
      {
        type: "p",
        text: "This privacy statement applies to all personal data that we process and to all domains related to us. This concerns the personal data of everyone who has ever had contact with us or visited our website, such as visitors, customers and business contacts. Personal data is all data that can be traced back to you as an individual, such as your name, telephone number, IP address, customer number or surfing behavior. If you want to know more about personal data, please visit the website of the Dutch Data Protection Authority.",
      },
    ],
  },
  {
    title: "Who uses your data?",
    content: [
      {
        type: "p",
        text: "Kouchinni V.o.F. is responsible for the website https://kouchinni.com/ and therefore the responsible organisation for the use of your personal data as described in this privacy statement.",
      },
      {
        type: "p",
        text: "The full details are:",
      },
      {
        type: "p",
        text: "Kouchinni V.o.F.",
      },
      {
        type: "p",
        text: "Jaap Edendreef 90",
      },
      {
        type: "p",
        text: "3562AW Utrecht",
      },
      {
        type: "p",
        text: "9022661",
      },
    ],
  },
  {
    title: "Whose data do we use?",
    content: [
      {
        type: "p",
        text: "We process the personal data of everyone who has had contact with us or visited our website. These include visitors, private customers, business customers and contact persons of our partners.",
      },
    ],
  },
  {
    title: "How do we get your data?",
    content: [
      {
        type: "p",
        text: "We receive the data directly from you as soon as you:",
      },
      {
        type: "ul",
        items: ["create an account", "fill in data on our website"],
      },
    ],
  },
  {
    title: "What data of you do we use?",
    content: [
      {
        type: "p",
        text: "We use the following data:",
      },
      {
        type: "ul",
        items: [
          "name",
          "gender",
          "address or business ",
          "address",
          "delivery address",
          "e-mail address",
          "telephone number",
          "payment details",
        ],
      },
    ],
  },
  {
    title: "What do we use your data for?",
    content: [
      {
        type: "p",
        text: "We only use your personal data for the purpose for which we are allowed to use it:",
      },
      {
        type: "ul",
        items: [
          "we have received your permission to use your personal data",
          "we use your data because we want to give you the best service as a customer and we can do without it information",
        ],
      },
    ],
  },
  {
    title: "How long do we keep your data?",
    content: [
      {
        type: "p",
        text: "We keep your personal data for as long as we are required to do so by law and for as long as necessary for the purpose forwhich we use your data. For example, as long as you are a customer with us, we store your data according to the statutory retention period of seven years. After that, we only keep your data for statistical purposes and to handle any complaints or legal matters. If you want to know more about how long we store specific data about you, please contact us.",
      },
    ],
  },
  {
    title: "Who do we share your data with?",
    content: [
      {
        type: "p",
        text: "We only process your personal data ourselves. We don't share your personal data with others.",
      },
    ],
  },
  {
    title: "Where do we store your data?",
    content: [
      {
        type: "p",
        text: "We process your data within the European Economic Area. This means that we also store your data within the EEA. If you have any questions about this, please feel free to contact us.",
      },
    ],
  },
  {
    title: "How safe is your data with us?",
    content: [
      {
        type: "p",
        text: "We have done a lot to protect your data as well as possible, both organisationally and technically. We have secured our systems and various means of communication to ensure that your data does not end up in the hands of others. Your data is therefore safe with us. We also ensure that your data is only used by people who have received permission from us. If you have any questions about the specific method of securing, please contact us.",
      },
    ],
  },
  {
    title: "What are your rights?",
    content: [
      {
        type: "p",
        text: "Because we use your personal data, you have various rights. We have listed these rights for you below.",
      },
      {
        type: "h3",
        text: "Right to information",
      },
      {
        type: "p",
        text: "We must explain to you in an understandable and clear manner what we do with your data and what control you have over it. That is why we explain in detail in this privacy statement what data we collect from you and how we handle your data.",
      },
      {
        type: "h3",
        text: "Right to access",
      },
      {
        type: "p",
        text: "You may always ask us to view the data we hold about you.",
      },
      {
        type: "h3",
        text: "Right to correction",
      },
      {
        type: "p",
        text: "You may ask us to have your data corrected if it is incorrect or incomplete.",
      },
      {
        type: "h3",
        text: "Right to object",
      },
      {
        type: "p",
        text: "You may object to the processing of your data if you do not agree with the way we handle your personal data. This right applies to the data we use for direct marketing. You can indicate to us that you no longer wish to receive e-mails from us. This also applies to personalized recommendations on our website.",
      },
      {
        type: "h3",
        text: "Right to data portability",
      },
      {
        type: "p",
        text: "If you are a customer of ours or if you have given permission for the use of your data, you may ask us to send you the digital data we have about you. This way you can transfer that data to another organisation if you wish.",
      },
      {
        type: "h3",
        text: "Right to restriction",
      },
      {
        type: "p",
        text: "You may ask to limit the use of your data. This means that in certain cases we may only store your data but not use it.",
      },
      {
        type: "h3",
        text: "Right to be forgotten",
      },
      {
        type: "p",
        text: "You may ask us to delete all data we have about you. We will then delete all data that can be traced back to you. In some cases we cannot or may not yet delete your data. For example, we have to keep some data for 7 years for the tax authorities.",
      },
      {
        type: "h3",
        text: "Right to submit a complaint",
      },
      {
        type: "p",
        text: "You may submit a complaint about the way in which we handle your data. If you have a complaint, we will be happy to resolve it for you. To do so, please contact us. You may also submit your complaint to the Dutch Data Protection Authority. Of course we hope that it does not come to that, but if it's necessary you can also go to court. In that case, the court in the place of business of Kouchinni V.o.F. is the one which will handle your complaint.",
      },
      {
        type: "h3",
        text: "How do I submit a request or complaint?",
      },
      {
        type: "p",
        text: "You can submit your request or complaint to us by sending a mail to info@kouchinni.com. We process every request or complaint within 30 days. If you submit multiple applications or complaints or if you submit a complex request or complaint, this may take more time. In that case, we will contact you within 60 days at the latest. We may ask you to identify yourself. In that case, we will ask you to submit certain information to ensure that you are the correct person whose personal data is.",
      },
    ],
  },
  {
    title: "What rules apply to this privacy statement?",
    content: [
      {
        type: "p",
        text: "Our privacy statement must meet several conditions. These conditions can be found in particular in the Dutch General Data Protection Regulation. In addition, the general rules that apply under Dutch law apply to our privacy statement.",
      },
    ],
  },
  {
    title: "Which cookies do we use?",
    content: [
      {
        type: "p",
        text: "You can indicate yourself what data we may use from you. If you have given us permission to personalize your profile based on your surfing and search behaviour, we can set up our website specifically for you so that its use becomes easier and more personal. We do this using cookies. A cookie is a small text file that is placed on your hardware when you visit our website.",
      },
      {
        type: "p",
        text: "We use the following types of cookies on our website:",
      },
      {
        type: "ul",
        items: [
          "functional cookies: like session and login cookies to collect session and login information",
          "anonymised analytic cookies: to obtain information regarding the visits to our website, like numbers of visitors, popular pages and topics",
          "non-anonymised analytic cookies: to obtain information regarding the visits to our website, like the number of visitors, popular pages and topics",
          "tracking cookies: like advertising cookies that are intended to show relevant advertisements",
        ],
      },
      {
        type: "p",
        text: "More specifically, we use the following cookies on our website:",
      },
      {
        type: "ul",
        items: [
          "anonymised Google Analytics (analytical cookie)",
          "Google Analytics (analytical cookie)",
          "Facebook (tracking cookie)",
          "Google Adwords (tracking cookie)",
        ],
      },
    ],
  },
  {
    title: "What do we do with data of minors?",
    content: [
      {
        type: "p",
        text: "We do not target minors with our website or as an organisation. This means that if you are under the age of 18, you need permission from a parent or guardian to use our website. If you are a minor when you visit our website or webshop, we assume that you have received this permission before your visit.",
      },
    ],
  },
  {
    title: "Do you have a question about this privacy policy?",
    content: [
      {
        type: "p",
        text: "If you have a question about our privacy policy, please feel free to contact us on info@kouchinni.com. We are happy to help.",
      },
    ],
  },

  // Add more sections as needed
];
