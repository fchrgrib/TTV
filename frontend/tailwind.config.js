/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {

    extend: {},
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      transparent: 'transparent',
      current: 'currentColor',
      primary500: '#7FC7D9',
      primary400: '#DCF2F1',
      secondary500: '#0F1035',
      secondary400: '#365486',
      orange: colors.orange,
      tertiary: {
        500: '#A0DEFF',
        400: '#CAF4FF'
      },
      default: '#F1F1F1',
      card: '#EBF4F6',
    },
  },
  plugins: [],
}

