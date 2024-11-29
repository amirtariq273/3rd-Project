// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',   // Scan the pages directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Scan the components directory
    './src/app/**/*.{js,ts,jsx,tsx}',      // Scan the app directory (for Next.js 13+ with `app` structure)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
