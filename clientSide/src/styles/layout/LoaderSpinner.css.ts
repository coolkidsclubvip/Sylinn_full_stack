import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const container = style({
  width: "20rem",
  height: "20rem",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

// export const spinnerContainer = style({
//   // width: "20rem",
//   // height: "20rem",

 
//   // boxShadow:"1px 1px 2px #fff",
//   // position: "absolute",
//   // top: "50%",
//   // left: "50%",
//   // transform: "translate(-50%, -50%)",
// });

const rotateSlow = keyframes({
  "10%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const rotateMedium = keyframes({
  "20%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(-360deg)" },
});

const rotateFast = keyframes({
  "30%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});



export const spinnerBefore = style({
  width: "80%",
  height: "80%",
  margin: "10%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotateSlow} 5s infinite linear`,
  position: "absolute",
});

export const spinnerAfter = style({
  width: "60%",
  height: "60%",
  margin: "20%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotateMedium} 2s infinite linear`,
  position: "absolute",
});

export const spinnerBefore1 = style({
  width: "40%",
  height: "40%",
  margin: "30%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotateFast} 1.5s infinite linear`,
  position: "absolute",
});

export const spinnerAfter1 = style({
  width: "20%",
  height: "20%",
  margin: "40%",
  border: "4px solid #0000",
  borderRadius: "50%",
  borderRightColor: vars.colors.brandLight,
  animation: `${rotateFast} 0.5s infinite linear`,
  position: "absolute",
});
