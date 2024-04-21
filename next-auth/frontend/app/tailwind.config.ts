import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "green-100": "var(--green-100)",
        "green-200": "var(--green-200)",
        "green-300": "var(--green-300)",
      }
    },
  },
  plugins: [],
}
export default config
