/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy (primary institutional tone)
        navy: {
          50: '#eef3f9',
          100: '#d6e2f0',
          200: '#adc4df',
          300: '#7b9dc6',
          400: '#4a72a6',
          500: '#2b5286',
          600: '#1d3e6b',
          700: '#163a63',
          800: '#102a4a',
          900: '#0b1d36',
          950: '#07131f',
        },
        // Accent (kept under the name "teal" so existing classes keep working,
        // but tuned to PURPLE to match the blue + purple palette on white).
        teal: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,42,74,0.06), 0 1px 1px rgba(16,42,74,0.04)',
      },
    },
  },
  plugins: [],
};
