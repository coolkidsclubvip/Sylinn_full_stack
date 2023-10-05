import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import * as fonts from "../../styles/fonts/fonts.css";

export const button = style({
  fontFamily: vars.fonts.brand,
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.bold,
  border: "1px solid black",

  outline: 0,
  //   display: "inline-block",
  color: vars.colors.black,
  backgroundColor: vars.colors.grey,
  textAlign: "center",
  cursor: "pointer",
  width: "9rem",
  height: "3rem",
  borderRadius: "3px",
  left: "10%",
  transition: "all 0.5s ease-out",
  ":hover": {
    backgroundColor: vars.colors.brand,
    border: "none",
    color: "white",
  },
});
