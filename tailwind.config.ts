import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#074940",      
            "secondary": "#fdf6ce",          
            "accent": "#f5f5f4",          
            "neutral": "#ff00ff",          
            "base-100": "#f5f5f4",          
            "info": "#0000ff",          
            "success": "#00ff00",          
            "warning": "#00ff00",          
            "error": "#ff0000",
          },
        },
      ],
    },
  plugins: [require('daisyui')],
} satisfies Config;
