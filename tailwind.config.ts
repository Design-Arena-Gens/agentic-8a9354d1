import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      colors: {
        background: '#050505',
        foreground: '#f8f5ff',
        accent: '#7f5af0',
        accentSoft: '#2cb67d',
        base: '#16161a'
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))'
      },
      boxShadow: {
        glow: '0 0 40px rgba(127, 90, 240, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
