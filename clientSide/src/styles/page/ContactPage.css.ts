import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";
import * as fonts from "../fonts/fonts.css";

export const imageContainer = style({
  backgroundImage: "url(./images/contact_bg.jpg)",
  backgroundSize: "cover",
  position: "relative",
  height: "200px",
  marginTop: "70px",
  "@media screen and (max-width: 768px)": { marginTop: "150px" },
});

export const titleText = style({
  backgroundColor: "white",
  fontSize: vars.fontSizes["6x"],
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bold,
  margin: "0 auto",
  padding: "1rem",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  mixBlendMode: "screen",
});

export const image = style({
  display: "inline-block",
  width: "35px",
});

export const contentText = style({
  paddingLeft: "1rem",
});
