/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        "inherit": "inherit",
      },
      maxHeight: {
        "inherit": "inherit",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
