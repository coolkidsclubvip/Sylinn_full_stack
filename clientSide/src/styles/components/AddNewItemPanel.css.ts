import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";


export const container = style({
  position: "absolute",
  width: "110vw",
  height: "auto",
  overflow: "hidden" ,
  backgroundColor: "rgba(200, 200, 200, 0.9)",
  zIndex: 99,
  marginLeft: "50%",
  translate: "-50%",
  marginTop: "-20vh",
  padding: "0",
});

export const card = style({
  position: "relative",
});

export const closeBtn = style({
  position: "absolute",
  width: "5rem",
  top: "0",
  right: "20%",
});
