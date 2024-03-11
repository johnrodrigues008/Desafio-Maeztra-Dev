/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '--color-1-500': '#faa500',
        '--color-2-500': '#4a4441',
        '--color-2-900': '#000000',
        '--color-2-400': '#353535',
        '--color-3-500': '#c4c4c4',
        '--color-4-500': '#efefef',
        '--color-5-500': '#ffffff',
        '--color-6-500': 'rgba(0, 0, 0, 0.7)',
      },
      boxShadow: {
        custom: '0 0 0.8rem #efefef',
      }
    },
  },
  plugins: [],
}

