import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/slider.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: {
          light: "#e1c8a5",
          DEFAULT: "#D4B17E",
          dark: "#947c58",
        },
        textColor: {
          DEFAULT: "#fff",
        },
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
