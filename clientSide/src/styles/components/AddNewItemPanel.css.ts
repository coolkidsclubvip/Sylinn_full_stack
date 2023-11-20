import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const container = style({
  textAlign: "center",
});

export const card = style({
  position: "relative",
});

export const closeBtn = style({
  position: "absolute",
  width: "5rem",
  top: "50px",
  right: "20%",
});
