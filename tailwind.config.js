/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    colors: {
        // Coloque aqui :)
        'gverdinho': '#94AC92', 
        'gverdao': '#6D906B',
        'gbege1': '#DED9BE',
        'gbege2': '#CBC4A0',
        'gmarrom': '#4A4846',
        'gamareloestrela': '#EEBF5A',
        'grodape': '#466B44',
    },
    
    screens: {
      // Telas menores que os valores indicados
      'xl': { max: '1280px' },  // Até 1279px
      'lg': { max: '1024px' },  // Até 1023px
      'md': { max: '768px' },   // Até 767px
      'sm': { max: '640px' },   // Até 639px
    },
  plugins: [],


    },
  },
  plugins: [],
};