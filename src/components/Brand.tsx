"use client";
import { useState } from "react";
import { test_category } from "../../practic";

function BrandColor() {
  const [active, setActive] = useState<{
    category: string;
    sub_category: string;
    brand: string;
  }>({
    category: "MEN",
    sub_category: "HOODIES",
    brand: "PERSIUS",
  });

  return (
    <div className=" hidden  md:block  h-[500px] flex items-center justify-center mx-">
      <div>
        <div className="flex justify-center text-gray-600 font-bold gap-x-14 ">
          {test_category.map((category) => (
            <button
              onClick={() =>
                setActive((prev) => ({ ...prev, category: category.name }))
              }
              key={category.id}
              className={`  ${
                category.name === active.category
                  ? "bg-green-600  p-1 text-white"
                  : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex mt-5 justify-center items-center gap-x-14 border-b-2 text-sm font-bold text-gray-600  mx-24  border-t-2 py-1">
          {test_category
            .find((category) => category.name === active.category)
            ?.sub_categories.map((sub_category) => (
              <button
                onClick={() =>
                  setActive((prev) => ({
                    ...prev,
                    sub_category: sub_category.name,
                    brand: sub_category.brands[0].name,
                  }))
                }
                key={sub_category.name}
                className={`${
                  sub_category.name === active.sub_category
                    ? "bg-green-600 p-1 text-white"
                    : ""
                }`}
              >
                {sub_category.name}
              </button>
            ))}
        </div>
        <div className="flex justify-center text-gray-600  items-center text-sm font-bold gap-x-14  mt-5">
          {test_category
            .find((category) => category.name === active.category)
            ?.sub_categories.find(
              (sub_cateogory) => sub_cateogory.name === active.sub_category
            )
            ?.brands.map((brand) => (
              <button
                onClick={() =>
                  setActive((prev) => ({ ...prev, brand: brand.name }))
                }
                className={`${
                  brand.name === active.brand
                    ? "bg-green-600 p-1 text-white"
                    : ""
                }`}
                key={brand.name}
              >
                {brand.name}
              </button>
            ))}
        </div>

        <div className="flex items-center justify-center gap-x-5 mt-5">
          {test_category
            .find((category) => category.name === active.category)
            ?.sub_categories.find(
              (sub_category) => sub_category.name === active.sub_category
            )
            ?.brands.find((brand) => brand.name === active.brand)
            ?.colors.map((color) => (
              <div
                key={color.color_name}
                className="flex flex-col items-center justify-center"
              >
                <img
                  alt=""
                  key={color.color_name}
                  className="w-20 h-20 object-cover hover:scale-105 transition-all duration-300 "
                  src={color.image_src}
                />
                <p className="color-name text-sm font-bold mt-6">
                  {color.color_name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BrandColor;
