import { style } from "@vanilla-extract/css";
import { vars } from "./global/themes.css";

export const container = style({
  position: "relative",
  width: "100%",
  marginTop: "15vh",
  minHeight: "68vh",
  textAlign: "center",
  // backgroundColor: "greenyellow",
});

export const modalContainer = style({
  position: "relative",
  width: "100%",
  height: "50vh",
  backgroundColor: "green",
  overflow:"visible",
  zIndex: "90",
});
export const infoContainer = style({
  position: "relative",
  width: "auto",
  height: "50vh",

  backgroundColor: "lightgrey",
});
export const descriptionContainer = style({
  position: "relative",
  width: "100%",
  height: "50vh",
 margin:"5vh auto",
  // backgroundColor: vars.colors.grey,
  
});