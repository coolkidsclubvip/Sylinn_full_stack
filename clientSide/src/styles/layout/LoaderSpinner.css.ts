import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const container = style({
  width: "100%",
  height: "100%",
  position: "relative",
 marginLeft: "-3rem",
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  width: "6rem",
  height: "6rem",
  display: "grid",
  position: "absolute",
  top: "50%",
  left: "50%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotate} 3s infinite linear`,
  
});

export const spinnerBefore = style({
  content: "",
  width: "5rem",
  height: "5rem",
  display: "grid",
  position: "absolute",
  top: "50%",
  left: "50%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotate} 2s infinite linear`,
  margin: "5px",
});

export const spinnerAfter = style({
  content: "",
  width: "4rem",
  height: "4rem",
  display: "grid",
  position: "absolute",
  top: "50%",
  left: "50%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotate} 1s infinite linear`,
  margin: "8px",
});
