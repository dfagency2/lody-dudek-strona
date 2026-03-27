import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF6",
          100: "#FAF3E8",
          200: "#F5E8D0",
          300: "#EDD4A8",
        },
        warm: {
          50: "#FFF9F5",
          100: "#FFF0E8",
          200: "#FFD9C0",
        },
        pink: {
          50: "#FFF5F9",
          100: "#FFE0EF",
          200: "#FFC4DC",
          300: "#FF9DC0",
          400: "#FF6B9D",
          500: "#FF4785",
          600: "#E63370",
          700: "#C01F57",
        },
        ink: "#1A1A1A",
        slate: "#383838",
        muted: "#888888",
        light: "#CCCCCC",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
