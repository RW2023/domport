// tailwind.config.ts
import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config = {
  darkMode: 'class',

  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-caribbean)',
        accent: 'var(--color-peach)',
        neutral: 'var(--color-cambridge)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        heading: ['var(--font-geist-sans)', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },

  plugins: [
    daisyui({
      themes: [
        {
          custom: {
            primary: '#033f63',
            secondary: '#28666e',
            accent: '#fedc97',
            neutral: '#7c9885',
            'base-100': 'var(--background)',
            'base-content': 'var(--foreground)',
            info: '#93c5fd',
            success: '#86efac',
            warning: '#fde68a',
            error: '#fca5a5',
          },
        },
      ],
      darkTheme: 'custom',
      base: true,
      styled: true,
      utils: true,
      logs: false,
      rtl: false,
      prefix: '',
    }),
  ],
} as Config

export default config
