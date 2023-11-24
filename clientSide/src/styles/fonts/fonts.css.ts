import { globalFontFace, style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

const futura = "Futura Bk";

globalFontFace(futura, {
  src: "url('/fonts/Futura-Book.ttf')",
});

export const futuraTitle = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bolder,
  textDecoration: "none",
});

export const futuraNav = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
  opacity: 0.9,
  color: vars.colors.black,
  textDecoration: "none",
  ":hover": { opacity: 1 },
});

export const futuraTabText = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.black,
  textDecoration: "none",
});

export const futuraGridCardTitles = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
});

export const normalText = style({
  fontFamily: vars.fonts.body,
  fontWeight: vars.fontWeights.normal,
  fontSize: vars.fontSizes["1x"],
  textDecoration: "none",
});
