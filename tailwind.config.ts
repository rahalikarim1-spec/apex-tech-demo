import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1117',
        navy: '#101C29',
        steel: { DEFAULT: '#397A9C', light: '#8DA8B8', dark: '#2B6079' },
        metal: '#AAB3BA',
        paper: '#F4F6F7',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '80rem' },
      keyframes: {
        spin: { to: { transform: 'rotate(360deg)' } },
        rise: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
        scan: { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } },
      },
      animation: { rise: 'rise .6s cubic-bezier(.2,.7,.2,1) both', scan: 'scan 3.5s linear infinite' },
    },
  },
  plugins: [],
};
export default config;
