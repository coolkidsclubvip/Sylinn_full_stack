import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";
import * as fonts from "../fonts/fonts.css";

export const container = style({
  position: "absolute",
  width: "110vw",
  height: "auto",
  backgroundColor: "rgba(200, 200, 200, 0.9)",
  zIndex: 99,
  marginLeft: "50%",
  translate: "-50%",
  marginTop: 0,
  padding: "2rem",
});
