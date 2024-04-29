/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '375px',
      },
      boxShadow: {
        shadowColor: "#F4F7FE"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        color1: "#6040FD",
        color2: "#523AF7",
        color3: "#352FEB",
        color4: "#4A26D0",
        color5: "#4533EB",
      },
      fontFamily: {
        "hanken-grotesk": ["HankenGrotesk", "fallback"],
        "hanken-grotesk-bold": ["HankenGrotesk-Bold", "fallback"],
        "hanken-grotesk-medium": ["HankenGrotesk-Medium", "fallback"],
        "hanken-grotesk-variable": [
          "HankenGrotesk-variableFont_wght",
          "fallback",
        ],
      },
    },
  },
  plugins: [],
};
