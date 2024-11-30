import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#72383D",      
          "secondary": "#fdf6ce",          
          "accent": "#f5f5f4",          
          "neutral": "#ff00ff",          
          "base-100": "#f5f5f4",          
          "info": "#0000ff",          
          "success": "#00ff00",          
          "warning": "#00ff00",          
          "error": "#ff0000",
          "link-visited": "#3b82f6",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities } : any) {
      addUtilities(
        {
          ".text-shadow-sm": {
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
          },
          ".text-shadow": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.75)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
} satisfies Config;
