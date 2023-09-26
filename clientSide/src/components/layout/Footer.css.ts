import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  width: "70vw",
  height: "10vh",
  margin: "0 auto",
  paddingTop: 0,
  bottom: 0,
  fontFamily:vars.fonts.brand,
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights["bold"],
  overflow: "visible",
  borderTop: "1px solid rgba(0, 0, 0, 0.15)",
});

export const smLogos = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignContent: "space-between",
  paddingTop: "1rem",
});

export const smLogosHover = style({
  ":hover": { opacity: 0.5, transition: "opacity 0.7s ease-in-out" },
});

export const footerNavText = style({
  textDecoration: "none",
  color: vars.colors.black,
  margin: "0 0 0.5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: "1rem",
});

export const footerNavTextHover = style({
  ":hover": { opacity: 0.7, transition: "opacity 0.7s ease-in-out" },
});

export const footerSyLogo = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: "1rem",
});

export const copyrightText = style({
  display: "flex",
  flex: 1,
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights["normal"],
  justifyContent: "center",
  paddingTop: "2rem",
});
