/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,ts}',
    './src/components/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:  '#0D1117',   // near-black background
          navy:  '#0F2A4A',   // deep navy
          blue:  '#1D7ED8',   // Palmetto blue (from logo)
          red:   '#C0392B',   // accent red
          gold:  '#F0A500',   // gold/yellow accent
          light: '#F5F7FA',   // off-white background
          gray:  '#6B7280',   // body text gray
          card:  '#161B22',   // dark card bg
        },
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', '"Oswald"', 'ui-sans-serif', 'sans-serif'],
      },
      spacing: {
        section: '5rem',
      },
      boxShadow: {
        card:       '0 4px 24px 0 rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px 0 rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
};
