/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        citria: {
          pink: '#FA2A6A',
          'pink-hover': '#E01D59',
          'pink-dark': '#B51242',
          'pink-light': '#FFE5ED',
          'pink-subtle': '#FFF0F5',
          cream: '#FFF9F5',
          cocoa: '#2A1810',
          'cocoa-light': '#4A332A',
          charcoal: '#1A1A1A',
          orange: '#FF7A00',
          yellow: '#FFD13B',
          citrus: '#F9A03F',
          sand: '#F7F3EE',
          lime: '#DCF8C6'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Didot', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Caveat"', 'cursive']
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(42, 24, 16, 0.06)',
        'card': '0 12px 36px rgba(250, 42, 106, 0.08)',
        'glow': '0 0 25px rgba(250, 42, 106, 0.35)',
        'float': '0 20px 40px -15px rgba(250, 42, 106, 0.2)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
