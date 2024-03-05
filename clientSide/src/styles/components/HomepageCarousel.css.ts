import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const carouselContainer = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  margin: "0 auto",
  marginBottom: "10rem",
});

export const image1 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s001.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundPositionY:"10%",

  "@media screen and (max-width: 768px)": { backgroundPositionX: "90%" },
});

export const image2 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s001.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPositionY: "50%",
  "@media screen and (max-width: 768px)": { backgroundPositionY: "40%" },
});

export const image3 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s003.jpeg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundPositionY: "50%",
  "@media screen and (max-width: 768px)": { backgroundPositionX: "40%" },
});

// Carousel captions style
export const carouselCaption = style({
  position: "absolute",
  bottom: "60%", // 根据需要调整
  left: "25%",
  transform: "translateX(-50%)",
  textAlign: "center",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  color: vars.colors.white,
  fontSize: vars.fontSizes["5x"],
  fontWeight: vars.fontWeights.bold,
  // transition: "all 1s ease-out",
  // ":hover": {
  //   color: vars.colors.black,
  // },

  "@media screen and (max-width: 768px)": {
    bottom: "60%", // 视口变小时调整位置
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: vars.fonts["x1"], // 可能需要调整字体大小
  },
});


export const carouselText = style({
  position: "absolute",
  width: "30%",
  bottom: "40%", // 根据需要调整
  left: "25%",
  transform: "translateX(-50%)",
  textAlign:"justify",
  // textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  color: "black",
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
  "@media screen and (max-width: 768px)": {
    bottom: "30%", // 视口变小时调整位置
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    fontSize: vars.fonts["x1"], // 可能需要调整字体大小
  },
});

export const carouselButton = style({
  position: "absolute",
  bottom: "30%", // 根据需要调整
  left: "25%",
  transform: "translateX(-50%)",
  "@media screen and (max-width: 768px)": {
    bottom: "20%", // 视口变小时调整位置
    left: "50%",
    transform: "translateX(-50%)",}
});