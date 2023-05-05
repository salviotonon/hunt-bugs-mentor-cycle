/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "newBlack": "#031319"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hunt-bugs.png')",
        "hero-pattern-mobile": "url('/src/assets/bg-hero-pattern-mobile.png')",
      }
    },
  },
  plugins: [],
}

