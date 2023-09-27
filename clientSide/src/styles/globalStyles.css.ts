import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./themes.css";

const globalStyles = globalStyle("titleStyle", {
  color: vars.colors.black,
  display: "inline-block",
  marginTop: "10rem",
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bold,
});

export default globalStyles;