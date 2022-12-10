/** @type {import('tailwindcss').Config} */

// yarn tailwindcss -o build.css --minify
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 'primary': '#A15843', // auburn
        'primary': '#8d5b31'
      },
    },
  },
  // theme: {
  //   screens: {
  //     'tablet': '640px',
  //     // => @media (min-width: 640px) { ... }

  //     'laptop': '1024px',
  //     // => @media (min-width: 1024px) { ... }

  //     'desktop': '1280px',
  //     // => @media (min-width: 1280px) { ... }
  //   },
  // }
  plugins: [],
}
