/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/**/*.js'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Include all core plugins by default
    preflight: true,
  },
  // Specify input and output file paths
  input: './style.css',
  output: './css/style.css',
};

