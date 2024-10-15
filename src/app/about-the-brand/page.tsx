import Image from "next/image";
import { Yantramanav } from "next/font/google";
import Link from "next/link";
import { Roboto } from "next/font/google";
import IconFooer from "@/components/IconFooter";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

const yantramanav = Yantramanav({
  weight: ["700", "900"],
  subsets: ["latin"],
});

export default function AboutTheBrand() {
  return (
    <div className="">
      <div className="w-full min-h-screen   pt-16">
        <div
          className={`${roboto.className} text-[10px] uppercase p-6   pt-10 pl-10`}
        >
          <span className="text-gray-500 pr-2  ">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
          </span>
          <span className="pr-2">|</span>
          <span>About the Brand</span>
        </div>
        {/* Header Section */}
        <header
          className="relative h-[60vh] md:h-[80vh] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://kouchinni.com/wp-content/uploads/2024/02/anout-the-brand-scaled.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="relative flex flex-col justify-center h-full text-left text-white px-4 sm:px-8 lg:px-16">
            <div className="border rounded-md p-6 bg-black bg-opacity-40 border-white max-w-full sm:max-w-lg">
              <Image
                src="https://kouchinni.com/wp-content/uploads/2023/12/shop-by-edsign-homage.svg"
                width={40}
                height={40}
                alt="Brand Icon"
                className="pb-2"
              />
              <h1 className="text-2xl sm:text-4xl font-bold uppercase tracking-wide mb-4">
                About The Brand
              </h1>
              <p className="text-xs sm:text-sm max-w-full sm:max-w-2xl">
                The inspiration for Kouchinni comes from a lineage of Persian
                art and history and love for it. A history so rich and vibrant
                yet nearly forgotten in recent days. Our inspiration is to bring
                that history back to life and its art to the forefront. By
                embroidering these classic designs onto quality garments, we
                hope to share these beautiful items with you.
              </p>
            </div>
          </div>
        </header>
        {/* Section 1: Image and Text */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-14">
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8  mb-16  ">
            <div className="flex flex-col justify-center gap-3 ">
              <h5
                className={`${yantramanav.className} font-semibold uppercase pt-2`}
              >
                brand story
              </h5>
              <h2
                className={`${yantramanav.className} font-semibold uppercase text-4xl`}
              >
                Inspiration
              </h2>
              <div
                className={` text-gray-700  text-justify font-normal text-sm   `}
              >
                <p className="pb-3">
                  What started the idea was a line of vintage safety match boxes
                  from the early 70’s from Iran. Concept wise this to us looked
                  more like a reverse “Brillo box” from Warhol.
                </p>
                <p className="pb-3">
                  Each matchbox baring a drawing of either a symbol, mythical
                  creature or character related to the Persian history.
                </p>

                <p className="pb-3">
                  As pre-79’ era Iran is widely known for its push and drive to
                  modernity, the designs of these match boxes made me question
                  as to what have made these symbols and designs to have such a
                  prevalent place in the mind of the public.
                </p>
              </div>
              <h2
                className={`${yantramanav.className} font-semibold uppercase text-4xl`}
              >
                Mission & Values
              </h2>
              <p
                className={` text-gray-700  text-justify font-normal text-sm  `}
              >
                The goal is to bring Persian symbols, characters, and stories,
                into our future collections and to share this world heritage
                with as many people as possible. It is to celebrate human
                endurance and ingenuity as well as and what we as the human race
                are capable of doing given our specific circumstances.
              </p>
            </div>

            <div className="flex items-start justify-start">
              <Image
                src="https://kouchinni.com/wp-content/uploads/2024/02/matchboxes.png"
                width={600}
                height={400}
                alt="Brand Vision"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          <h4
            className={` ${yantramanav.className} uppercase text-xl  font-bold  text-center tracking-wide px-4 sm:px-8 lg:px-16`}
          >
            Like, hey everyone look what we humans managed to accomplish in this
            part of the world.
          </h4>

          {/* Section 2: Text and Image */}
          <section className="grid grid-cols-1  gap-8 mb-16 ">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-4 mt-7 uppercase">
                Designer’ note
              </h2>
              <div
                className={` text-gray-700  text-justify font-normal text-sm   `}
              >
                <p className="pb-3">
                  I assume the drive for modernity is a constant desire and even
                  the need of the modern society however, the approach, which
                  interests me the most, is the one, which draws inspiration
                  from the roots of its host’s culture and maintains the
                  knowledge and highlights the experiences, gathered throughout
                  its history.
                </p>
                <p className="pb-3">
                  The older the symbols and artifacts become, the harder it is
                  to precisely imitate and represent them as they were
                  originally intended however with the clues and the knowledge
                  that we have we can piece together what they could mean to the
                  people of a great empire who lived thousands of years ago.
                </p>
                <p className="pb-3">
                  Did they actually believe in their mythologies or was it
                  always intended as a metaphor to bolster good virtues?
                </p>
                <p className="pb-3">
                  What I intended to do in the design of our collection is to
                  yet again revise the designs and to represent what they could
                  look to us base of the information we have about them. After
                  all this is exactly what the unknown matchbox artist did 4
                  decades ago, they never intended to represent their subjects
                  exactly as they were but rather to represent what the subjects
                  looked to them.
                </p>
                <p className="pb-3">
                  In addition, the experience sharing aspect of this was one of
                  the main reasons why we choose to embroider our designs rather
                  than printing them. We wanted everyone to be able to touch the
                  designs. It is like being sandwiched between thousands of
                  years of history. A modern reimagining of a 70’s consumer
                  oriented artistic effort which itself was striving to
                  revitalize and reimagine ancient stories, characters and
                  symbols dating back to 4th century BC.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Image and Text */}
          <section className="grid grid-cols-1 gap-8 ">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 uppercase">
                Brand Philosophy
              </h2>
              <div
                className={` text-gray-700  text-justify font-normal text-sm   `}
              >
                <p className="pb-3">
                  Our philosophy stems from the rich history of an ancient
                  culture
                </p>
                <p className="pb-3">
                  The Persian civilization today is a result of a
                  multi-millennia group effort. The difficulties of the early
                  great civilizations and the knowledge, tradition and cultures,
                  which enabled to create and sustain large empires for
                  thousands of years, have helped shape our modern society. Our
                  goal is to celebrate and draw inspirations from the more
                  overlooked part of the human history.
                </p>
                <p className="pb-3">
                  The history of an empire which lasted for more than a thousand
                  years and in its wake brought forth the first ever human
                  rights and even now after more than 2500 years its presence is
                  felt all over its birth land, be in architecture, artifacts or
                  traditions.
                </p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1  gap-8 ">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 uppercase">
                Unique Selling Points (USPs)
              </h2>
              <div
                className={` text-gray-700  text-justify font-normal text-sm   `}
              >
                <p className="pb-3">
                  What makes Kouchinni unique? One could argue quality clothing,
                  but so many offer that these days. Maybe our attention to
                  detail? It seems like everyone make that claim nowadays.
                </p>
                <p className="pb-3">
                  What truly sets us apart from other is the fact that all
                  embroidery is done in-house at Kouchinni HQ. Overseen by at
                  least 1 of the founders if not themselves.
                </p>
                <p className="pb-8">
                  By making sure we are involved in the creation of these
                  pieces, we ensure only true masterpieces are created, and
                  shipped to you. This way we hope to provide the best
                  experience you can imagine and simultaneously reducing the
                  number of potential returns as we aim to reduce the carbon
                  footprint our customers and we imprint.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <IconFooer />
    </div>
  );
}
