import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#f9fafa",
      gray01: "#f7f7f8",
      gray02: "#bac3c3",
      gray03: "#97a1aa",
      gray04: "#535c65",
      main: "#00cdac",
      accent01: "#e3f6f4",
      accent02: "#00a79d",
    },
    extend: {
      backgroundImage: {},
    },
    fontFamily: {
      prompt: ["Prompt"],
    },
  },
  plugins: [require("daisyui")],
};

export default config;
