import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-bg": "url('/images/background.jpg')",
      },
      colors: {
        lama: "#F35C7A",
        butShop: "#FFF100",
        backWhite: "#e5e5e5",
      },
      screens: {
        " xs": "765px",
      },
    },
  },
  plugins: [],
};
export default config;
