import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";
import * as fonts from "../fonts/fonts.css";

export const imageContainer = style({
  backgroundImage: "url(/images/title_images/about_bg.jpg)",
  backgroundSize: "cover",
  position: "relative",
  height: "200px",
  marginTop: "70px",
  "@media screen and (max-width: 768px)": { marginTop: "150px",  },
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

export const contentImage = style({
  width: "30vw",
  height: "auto",
  overflow: "hidden",
   "@media screen and (max-width: 768px)": { marginTop: "50px",
  width:"90%",padding:"5px"  },
});

export const contentText = style({
  width: "90%",
  paddingTop: "4rem",
  textAlign: "justify",
});
