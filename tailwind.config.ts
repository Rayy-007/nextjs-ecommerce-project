import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#006cff",

          secondary: "#d53000",

          accent: "#00aed4",

          neutral: "#020418",

          "base-100": "#223227",

          info: "#009aff",

          success: "#48c100",

          warning: "#ffc000",

          error: "#ff1871",
          body: {
            "background-color": "#223227",
          },
        },
      },
    ],
  },
};
export default config;
