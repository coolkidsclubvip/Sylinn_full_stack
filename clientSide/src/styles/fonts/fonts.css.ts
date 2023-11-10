import { globalFontFace, style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

const futura = "Futura Bk";

globalFontFace(futura, {
  src: "url('/fonts/Futura-Book.ttf')",
});

export const futuraTitle = style({
  fontFamily: futura,
  fontSize:vars.fontSizes["4x"],
  fontWeight:vars.fontWeights.bolder
});

export const futuraNav = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
opacity: 0.6,
  color: vars.colors.black,
  ":hover": { opacity: 1 },
});

export const futuraTabText = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.black,
 
});

export const futuraGridCardTitles = style({
  fontFamily: futura,
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
});

export const normalText = style({
  fontFamily: vars.fonts.body,
  fontWeight:vars.fontWeights.normal,
  fontSize: vars.fontSizes["1x"]
})