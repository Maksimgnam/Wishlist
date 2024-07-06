import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./intro-components/**/*.{js,ts,jsx,tsx,mdx}",
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
        'dark':'rgba(0, 0, 0, 0.7)'
   
      },
      width:{
        'line':"2px",
        'sidebar':'23%'
      },
      height:{
        "container":"92vh",
        "menu":"94vh",
        "wish-container":"75vh",
        "line":"2px"
      },
      fontSize:{
        'mini':"12px"
      },
       keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '8' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      
    },
  },
  plugins: [],
};
export default config;
