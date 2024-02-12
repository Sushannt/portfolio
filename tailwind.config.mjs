/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#264653",
          100: "#cadee7",
          200: "#95bece",
          300: "#609db6",
          400: "#3f7489",
          500: "#264653",
          600: "#1f3943",
          700: "#172b32",
          800: "#0f1c22",
          900: "#080e11",
        },
        "persian-green": {
          DEFAULT: "#2a9d8f",
          100: "#cef2ee",
          200: "#9de5dc",
          300: "#6cd8cb",
          400: "#3acbba",
          500: "#2a9d8f",
          600: "#217e73",
          700: "#195e56",
          800: "#113f39",
          900: "#081f1d",
        },
        saffron: {
          DEFAULT: "#e9c46a",
          100: "#faf3e1",
          200: "#f6e7c3",
          300: "#f1dca4",
          400: "#edd086",
          500: "#e9c46a",
          600: "#e0ad2e",
          700: "#b0851a",
          800: "#755912",
          900: "#3b2c09",
        },
        "sandy-brown": {
          DEFAULT: "#f4a261",
          100: "#fdede0",
          200: "#fbdac0",
          300: "#f8c8a1",
          400: "#f6b681",
          500: "#f4a261",
          600: "#f07e22",
          700: "#c05e0d",
          800: "#803e09",
          900: "#401f04",
        },
        "burnt-sienna": {
          DEFAULT: "#e76f51",
          100: "#fae2dc",
          200: "#f5c5b9",
          300: "#f1a896",
          400: "#ec8b73",
          500: "#e76f51",
          600: "#db441e",
          700: "#a43316",
          800: "#6e220f",
          900: "#371107",
        },

        fiord: {
          50: "#f5f7fa",
          100: "#eaeff4",
          200: "#d0dce7",
          300: "#a6bfd3",
          400: "#769dba",
          500: "#5581a2",
          600: "#426887",
          700: "#385671",
          800: "#30485c",
          900: "#2c3e4e",
          950: "#1d2834",
        },
      },
      fontFamily: {
        "Satoshi-V": "Satoshi-Variable",
        "Satoshi-L": "Satoshi-Light",
        "Satoshi-R": "Satoshi-Regular",
        "Satoshi-M": "Satoshi-Medium",
        "Satoshi-B": "Satoshi-Bold",
        "Satoshi-BLK": "Satoshi-Black",
      },
    },
  },
  plugins: [],
};