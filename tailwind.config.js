/** @type {import('tailwindcss').Config} */
module.exports = {
  themes: ["light"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'purple-dark': '#AD7EC8',
        'purple-light': '#F6F1F9',
        'blue-dark': '#1F6C98',
        'blue-light': '#EEF7FC',
        'green-dark': '#279057',
        'green-light': '#EFFBF4',
        'green-light-1': '#F3F7F4',
        'green-dark-1': '#78A584',
        'bg-gray': '#EFEFFB'
      }
    },
  },
  plugins: [require("daisyui")],
};
