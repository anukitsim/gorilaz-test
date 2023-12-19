/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        VcrMono: ['VCR OSD Mono', 'sans-serif'],
        Saira: ['Saira', 'sans-serif'],
        ASSUAN: ['a_Assuan'],
      },
      screens: {
        'sm': '300px', 
        '2sm': '700px',
        'md': '1200px',
        'lg': '1600px',
        'xl': '2000px',
        
      },
    
    },
  },
  plugins: [],
}
