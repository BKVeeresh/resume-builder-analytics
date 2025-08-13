/**
 * Tailwind CSS configuration for the resume builder.
 *
 * The content array tells Tailwind where to look for class names to
 * generate the appropriate CSS. We include the root HTML file and
 * all TypeScript/JSX/TSX files within the src directory.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
