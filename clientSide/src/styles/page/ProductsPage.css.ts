import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

export const container = style({
  position: "relative",
  width: "100%",
  marginTop: "90px",
  minHeight: "68vh",
  textAlign: "center",
  // backgroundColor: "greenyellow",
});

export const imageContainer = style({
  backgroundImage: "url(./images/products_bg.png)",
  backgroundSize: "cover",
  position: "relative",
  height: "200px",
  marginTop: "70px",
});

export const titleText = style({
  backgroundColor: "white",
  fontFamily: vars.fonts.brand,
  fontSize: vars.fontSizes["6x"],
  fontWeight: vars.fontWeights.bolder,
  margin: "0 auto",
  padding: "1rem",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  mixBlendMode: "screen",
});


export const categoriesContainer = style({
     
});