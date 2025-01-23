/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#BB86FC',
          secondary: '#03DAC6',
          error: '#CF6679',
          onBackground: '#FFFFFF',
          onSurface: '#FFFFFF',
          onPrimary: '#000000',
          onSecondary: '#000000',
          onError: '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}