import { createGlobalTheme, style } from "@vanilla-extract/css";
import twColors from "tailwindcss/colors";


export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Futura Bk,Arial, apple-system, sans-serif",
    body: "Roboto, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    white: "white",
    black: twColors.slate[950],
    brand: "#1c82c7",
    gold: "#BF9D5A",
    grey: "#EFEFEF",
    border:"#dddd",
    brandLight: twColors.sky[500],
    brandDark: twColors.sky[700],

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    sky200: twColors.sky[200],
    sky300: twColors.sky[300],
    sky400: twColors.sky[400],
    sky500: twColors.sky[500],
    sky600: twColors.sky[600],
  },
  space: {
    none: "0",
    "1x": "12px",
    "2x": "14px",
    "3x": "18px",
    "4x": "32px",
    "5x": "40px",
    "6x": "48px",
  },
  fontSizes: {
    "0.5x": "12px",
    "1x": "16px",
    "2x": "20px",
    "3x": "24px",
    "4x": "32px",
    "5x": "40px",
    "6x": "48px",
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
});

export const vars = { ...root };



