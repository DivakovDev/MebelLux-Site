/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        luxBlue: '#C9F0FF',
        luxAzure: '#EAFFFD',
        luxWhite: '#EFEFF0',
        luxThistle: '#D5CAD6',
        luxWenge: '#6B5E62',
        luxBrown: '#5E503F',
        luxOrange: '#FF9D5C',
      },
    },
  },
  plugins: [],
}
