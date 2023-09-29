import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const LoginWrapper = style({
  width: "70vw",
  marginTop: "15vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const userNav = style({
  fontSize: vars.fontSizes["1x"],
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

export const cardSmallText = style({
  display: "block",
  paddingTop: "1rem",
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  fontStyle: "italic",
  color: vars.colors.black,
});
