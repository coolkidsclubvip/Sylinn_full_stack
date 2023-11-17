import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const carouselContainer = style({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0 auto",
  marginBottom:"10rem"
});

export const image1 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s001.jpeg)",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  // backgroundPositionY:"10%",
})

export const image2 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s002.jpeg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
    backgroundPositionY: "50%",
});

export const image3 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s003.jpeg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundPositionY: "50%",
});