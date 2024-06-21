import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        'whitesmoke':'#F5F5F5',
        'yellow':"#FFD52E"
      },
      width:{
        'line':"2px"
      },
      height:{
        "container":"92vh",
        "menu":"94vh",
        "wish-container":"75vh"
      },
      fontSize:{
        'mini':"12px"
      }
      
    },
  },
  plugins: [],
};
export default config;
