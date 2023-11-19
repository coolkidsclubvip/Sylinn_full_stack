import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./global/themes.css";

export const container = style({
  position: "relative",
  width: "100%",
  marginTop: "20vh",
  minHeight: "68vh",
  textAlign: "center",

  // backgroundColor: "greenyellow",
});

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "auto",
  // backgroundColor: "green",
  overflow: "visible",
  zIndex: "90",
  paddingRight: "1rem",
  borderRight: `2px solid ${vars.colors.border}`,
  // "@media": {
  //   "(max-width: 1366px)": {
  //     marginTop: "20vh", // md and below width margin top
  //   },
  // },
  "@media screen and (max-width: 768px)": { marginTop: "2rem" },
});

export const infoContainer = style({
  position: "relative",
  width: "auto",
  height: "50vh",
  textAlign: "left",
  // '@media': {
  //   '(max-width: 1366px)': {
  //     marginTop: "20vh", // md and below width margin top
  //   }},
  "@media screen and (max-width: 768px)": { height: "20vh", marginTop: "2rem" },
});

export const rrp = style({
  textAlign: "center",
  marginTop: "2rem",
});
export const stock = style({
  height: "25px",
  textAlign: "center",
  marginTop: "2rem",
});

export const inStock = style({
  color: "green",
});

export const lowStock = style({
  color: "purple",
});

export const noStock = style({
  color: "red",
});

export const buttonsGroups = style({
  textAlign: "center",
});

export const tabsContainer = style({
  position: "relative",
  width: "100%",
  height: "50vh",
  margin: "5vh auto",
  // backgroundColor: vars.colors.grey,
  "@media screen and (max-width: 768px)": { marginTop: "2rem" },
});

export const border = style({
  borderTop: `2px solid  ${vars.colors.border}`,
});

export const relatedProductsContainer = style({
  width: "100%",
  height: "auto",

  "@media screen and (max-width: 768px)": { marginTop: "2rem" },
});
