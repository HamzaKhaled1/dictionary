/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        custom:"rgba(var(--custom))",
        background:"var(--background)",
        color:"white"
      },
     fontFamily:{
      loraIalicBold:["LoraBoldItalic"],
      loraBold:["lora Bold"],
      lora:["lora"],
      inter:['inter'],
      interBold:['inter Bold'],
      inconsolata:['inconsolata'],
      inconsolaBold:['inconsolataBold']
          },
    },
  },
  plugins: [],
}

