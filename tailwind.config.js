/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./page2.html", "./page3.html",
    "./js/**/*.{vue,js,ts,jsx,tsx}" // Это гарантирует, что Tailwind будет искать классы во всех JS файлах в папке js и её подпапках
  ],
  theme: {
    extend: {
      colors: {
        'blue-text': '#004F66',
        'blue': '#0083BB',
        'light-blue': '#F4F7F8',
        'grey-text': '#181818'
      },
      container: {
        screens:{
          '2xl': '1160px',
          'md:': '800px'
        }
      },
      borderRadius: {
        '3xl': '30px'
      }
    }
  },
  plugins: [],
}

