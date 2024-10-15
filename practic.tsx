type Categories = Category[];

type Category = {
  name: string;
  id: string;
  sub_categories: Subcategory[];
};

type Subcategory = {
  name: string;
  brands: Brand[];
};

type Brand = {
  name: string;
  colors: BrandColor[];
};

type BrandColor = {
  color_name: string;
  image_src: string;
};

export const test_category: Categories = [
  {
    id: "dasidasdaidaid",
    name: "MEN",
    sub_categories: [
      {
        name: "HOODIES",
        brands: [
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/persius/persius-hoodie-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/persius/persius-hoodie-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/persius/persius-hoodie-glazed-green.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/persius/persius-hoodie-ink-grey.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/persius/persius-hoodie-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/persius/persius-hoodie-sky-blue.svg",
              },
            ],
            name: "PERSIUS",
          },
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/royalIbex/ibex-hoodie-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/royalIbex/ibex-hoodie-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/royalIbex/ibex-hoodie-glazed-green.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/royalIbex/ibex-hoodie-ink-grey.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/royalIbex/ibex-hoodie-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/royalIbex/ibex-hoodie-sky-blue.svg",
              },
            ],
            name: "ROYAL IBEX",
          },
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/atousa/atusa-hoodie-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/atousa/atusa-hoodie-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/atousa/atusa-hoodie-glazed-green.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/atousa/atusa-hoodie-ink-grey.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/atousa/atusa-hoodie-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/atousa/atusa-hoodie-sky-blue.svg",
              },
            ],
            name: "ATUSA ",
          },
        ],
      },
      {
        name: "SWEATERS",
        brands: [
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/persius/persius-sweater-black.svg",
              },
              {
                color_name: "BURGUNDY",
                image_src: "/assets/persius/persius-sweater-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/persius/persius-sweater-canyon-pink.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/persius/persius-sweater-navy.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/persius/persius-sweater-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/persius/persius-sweater-sky-blue.svg",
              },
            ],
            name: "PERSIUS",
          },
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/royalIbex/ibex-sweater-black.svg",
              },
              {
                color_name: "BURGUNDY",
                image_src: "/assets/royalIbex/ibex-sweater-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/royalIbex/ibex-sweater-canyon-pink.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/royalIbex/ibex-sweater-navy.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/royalIbex/ibex-sweater-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/royalIbex/ibex-sweater-sky-blue.svg",
              },
            ],
            name: "ROYAL IBEX",
          },
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/atousa/atusa-sweater-black.svg",
              },
              {
                color_name: "BURGUNDY",
                image_src: "/assets/atousa/atusa-sweater-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/atousa/atusa-sweater-canyon-pink.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/atousa/atusa-sweater-navy.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/atousa/atusa-sweater-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/atousa/atusa-sweater-sky-blue.svg",
              },
            ],
            name: "ATUSA",
          },
        ],
      },
      {
        name: "T-SHIRTS",
        brands: [
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/homage/homage-t-shirt-black.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/homage/homage-t-shirt-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/homage/homage-t-shirt-glazed-green.svg",
              },
              {
                color_name: "INDIGO HUSH",
                image_src: "/assets/homage/homage-t-shirt-indigo-hush.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/homage/homage-t-shirt-sky-blue.svg",
              },
              {
                color_name: "VINTAGE WHITE",
                image_src: "/assets/homage/homage-t-shirt-vintage-white.svg",
              },
            ],
            name: "HOMAGE",
          },
        ],
      },
      {
        name: "SHIRTS",
        brands: [
          {
            colors: [
              {
                color_name: "WHITE/BLUE",
                image_src: "/assets/homage/homage-classic-oxford-white.svg",
              },
              {
                color_name: "BLUE/RED",
                image_src:
                  "/assets/homage/homage-classic-tailored-light-blue.svg",
              },
              {
                color_name: "BLUE/RED",
                image_src: "/assets/homage/homage-classic-oxford-blue.svg",
              },
              {
                color_name: "NAVY/GOLD",
                image_src: "/assets/homage/homage-oxford-navy.svg",
              },
              {
                color_name: "NAVY/RED",
                image_src: "/assets/homage/homage-classic-oxford-navy.svg",
              },
              {
                color_name: "BURGUNDY/GOLD",
                image_src:
                  "/assets/homage/homage-classic-tailored-burgundy.svg",
              },
              {
                color_name: "ZINC/PEARL WHITE",
                image_src: "/assets/homage/homage-classic-tailored-zinc.svg",
              },
              {
                color_name: "BLACK/PINK",
                image_src: "/assets/homage/homage-classic-tailored-black.svg",
              },
              {
                color_name: "BLACK/ GOLD",
                image_src: "/assets/homage/homage-t-shirt-black.svg",
              },
            ],
            name: "HOMAGE",
          },
        ],
      },
      {
        name: "POLO'S",
        brands: [
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/homage/homage-t-shirt-black.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/homage/homage-classic-oxford-navy.svg",
              },
              {
                color_name: "RED",
                image_src: "/assets/homage/homage-polo-red.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/homage/homage-t-shirt-sky-blue.svg",
              },
              {
                color_name: "WHITE",
                image_src: "/assets/homage/homage-classic-oxford-white.svg",
              },
            ],
            name: "HOMAGE",
          },
        ],
      },
    ],
  },
  {
    id: "hafarararr",
    name: "WOMAN",
    sub_categories: [
      {
        name: "HOODIES",
        brands: [
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/persius/persius-hoodie-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/persius/persius-hoodie-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/persius/persius-hoodie-glazed-green.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/persius/persius-hoodie-ink-grey.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/persius/persius-hoodie-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/persius/persius-hoodie-sky-blue.svg",
              },
            ],
            name: "PERSIUS",
          },
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/royalIbex/ibex-hoodie-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/royalIbex/ibex-hoodie-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/royalIbex/ibex-hoodie-glazed-green.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/royalIbex/ibex-hoodie-ink-grey.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/royalIbex/ibex-hoodie-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/royalIbex/ibex-hoodie-sky-blue.svg",
              },
            ],
            name: "ROYAL IBEX",
          },
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/atousa/atusa-hoodie-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/atousa/atusa-hoodie-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/atousa/atusa-hoodie-glazed-green.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/atousa/atusa-hoodie-ink-grey.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/atousa/atusa-hoodie-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/atousa/atusa-hoodie-sky-blue.svg",
              },
            ],
            name: "ATUSA ",
          },
        ],
      },
      {
        name: "SWEATERS",
        brands: [
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/persius/persius-sweater-black.svg",
              },
              {
                color_name: "BURGUNDY",
                image_src: "/assets/persius/persius-sweater-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/persius/persius-sweater-canyon-pink.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/persius/persius-sweater-navy.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/persius/persius-sweater-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/persius/persius-sweater-sky-blue.svg",
              },
            ],
            name: "PERSIUS",
          },
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/royalIbex/ibex-sweater-black.svg",
              },
              {
                color_name: "BURGUNDY",
                image_src: "/assets/royalIbex/ibex-sweater-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/royalIbex/ibex-sweater-canyon-pink.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/royalIbex/ibex-sweater-navy.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/royalIbex/ibex-sweater-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/royalIbex/ibex-sweater-sky-blue.svg",
              },
            ],
            name: "ROYAL IBEX",
          },
          {
            colors: [
              {
                color_name: "BLACK",
                image_src: "/assets/atousa/atusa-sweater-black.svg",
              },
              {
                color_name: "BURGUNDY",
                image_src: "/assets/atousa/atusa-sweater-burgundy.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/atousa/atusa-sweater-canyon-pink.svg",
              },
              {
                color_name: "NAVY",
                image_src: "/assets/atousa/atusa-sweater-navy.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/atousa/atusa-sweater-off-white.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/atousa/atusa-sweater-sky-blue.svg",
              },
            ],
            name: "ATUSA",
          },
        ],
      },
      {
        name: "T-SHIRTS",
        brands: [
          {
            colors: [
              {
                color_name: "BURGUNDY",
                image_src: "/assets/homage/homage-t-shirt-black.svg",
              },
              {
                color_name: "CANYON PINK",
                image_src: "/assets/homage/homage-t-shirt-canyon-pink.svg",
              },
              {
                color_name: "GLAZED GREEN",
                image_src: "/assets/homage/homage-t-shirt-sky-blue.svg",
              },
              {
                color_name: "INK GREY",
                image_src: "/assets/homage/homage-t-shirt-indigo-hush.svg",
              },
              {
                color_name: "OFF WHITE",
                image_src: "/assets/homage/homage-t-shirt-glazed-green.svg",
              },
              {
                color_name: "SKY BLUE",
                image_src: "/assets/homage/homage-t-shirt-vintage-white.svg",
              },
            ],
            name: "HOMAGE",
          },
        ],
      },
    ],
  },
];
