// File: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        caribbean: 'var(--color-caribbean)',
        cambridge: 'var(--color-cambridge)',
        sage: 'var(--color-sage)',
        peach: 'var(--color-peach)',
      },
    },
  },
  plugins: [],
};

export default config;
