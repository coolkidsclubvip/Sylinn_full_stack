import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const userNav = style({
  fontSize: vars.fontSizes["2x"],
  fontStyle: "italic",
  marginTop: "1rem",
  paddingTop: "1rem",
});

////////////target a decendant tag///////////
globalStyle(`${userNav} a`, {
  textDecoration: "none",
  color: vars.colors.brandDark,
});

globalStyle(`${userNav} a:hover`, {
  textDecoration: "none",
  color: vars.colors.brand,
});
