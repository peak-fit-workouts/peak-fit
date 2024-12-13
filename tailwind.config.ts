import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: {
          light: "#D9EAFB", 
          DEFAULT: "#B2C7E8", 
          dark: "#94AFC7", 
        },
        textColor: {
          DEFAULT: "#2C3E50", 
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
