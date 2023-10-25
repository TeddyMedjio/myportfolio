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
        green: "#04FF5A",
        gray: {
          10: "#111111",
          30: "#131313",
          20: "#9BA1A6",
        },
      },
      borderRadius: {
        "5lg": "5px",
      },
    },
  },
  plugins: [],
};
export default config;
