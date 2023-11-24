import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

export const imageContainer = style({
  backgroundImage: "url(/images/title_images/products_bg.png)",
  width: "100vw",
  backgroundSize: "cover",
  position: "relative",
  height: "200px",
  marginTop: "70px",
  "@media screen and (max-width: 768px)": { marginTop: "150px" },
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

export const container = style({
  position: "relative",
  width: "100%",
  marginTop: "90px",
  minHeight: "68vh",
  textAlign: "center",
  // backgroundColor: "greenyellow",
});

export const card = style({
  top: 0,
  boxShadow: " 0 2px 5px rgba(0, 0, 0, 0.2)",
  transition: "all 0.5s smooth",
  ":hover": {
 
    top: "-5px",
    cursor: "pointer",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.11)",
  },
});

export const cardBody = style({
  ":hover": {
    backgroundColor: "linear-gradient(to top right, #1c82c7 30%, transparent)",
  },
});

 
