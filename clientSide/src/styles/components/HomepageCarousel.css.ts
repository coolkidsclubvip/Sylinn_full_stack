import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const carouselContainer = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  margin: "0 auto",
  marginBottom: "10rem",
});

// Video styles
export const videoContainer = style({
  position: "relative",
  width: " 100%",
  height: "100%",
});

export const carouselVideo = style({

  "@media screen and (max-width: 768px)": {
      width: "auto" /* 控制视频最大宽度 */,
  height: "100%" /* 自适应高度 */,
  position: "absolute",
    // bottom: "-10%",
    left: "-50%",
    transform: "scale(0.8)",
  },
});

export const image0 = style({
  width: "100vw",
  height: "100vh",
});

export const image1 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s001.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundPositionY:"10%",

  "@media screen and (max-width: 768px)": { backgroundPositionX: "80%" },
});

export const image2 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s002.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundPositionY:"10%",

  "@media screen and (max-width: 768px)": { backgroundPositionX: "80%" },
});

export const image3 = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/images/carousel_images/s003.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundPositionY: "50%",
  "@media screen and (max-width: 768px)": { backgroundPositionX: "80%" },
});

// Carousel captions style
export const carouselCaption = style({
  position: "absolute",
  bottom: "60%",
  left: "25%",
  transform: "translateX(-50%)",
  textAlign: "center",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  color: vars.colors.black,
  fontSize: vars.fontSizes["6x"],
  fontWeight: vars.fontWeights.bold,
  // transition: "all 1s ease-out",
  // ":hover": {
  //   color: vars.colors.black,
  // },
  "@media screen and (max-width: 576px)": {
    width: "100vw",
    bottom: "55%",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: vars.fontSizes["4x"],
    fontWeight: vars.fontWeights.normal,
  },

  "@media screen and (min-width: 576px) and (max-width: 768px)": {
    bottom: "60%", // 视口变小时调整位置
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: vars.fontSizes["4x"],
    fontWeight: vars.fontWeights.normal,
  },
  "@media screen and (min-width: 768px) and (max-width: 992px)": {
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "60%",
    fontSize: vars.fontSizes["5x"],
    fontWeight: vars.fontWeights.bold,
  },

  "@media screen and (min-width: 992px) and (max-width: 1200px)": {
    width: "70vw",
    left: "50%",
    transform: "translateX(-50%)",
    top: "30%",
  },

  "@media screen and (min-width: 1200px)": {
    top: "30%",
  },
});

export const carouselText = style({
  position: "absolute",
  width: "30%",
  // bottom: "40%", // 根据需要调整
  left: "25%",
  transform: "translateX(-50%)",
  textAlign: "justify",
  // textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  color: "black",
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,

  "@media screen and (max-width: 576px)": {
    width: "90vw",
    bottom: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: vars.fontSizes["2x"],
    fontWeight: vars.fontWeights.normal,
  },

  "@media screen and (min-width: 576px) and (max-width: 768px)": {
    width: "80vw",
    bottom: "35%",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: vars.fontSizes["2x"],
    fontWeight: vars.fontWeights.normal,
  },
  "@media screen and (min-width: 768px) and (max-width: 992px)": {
    width: "70vw",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "40%",
    fontSize: vars.fontSizes["2x"],
    fontWeight: vars.fontWeights.normal,
  },

  "@media screen and (min-width: 992px) and (max-width: 1200px)": {
    width: "60vw",
    left: "50%",
    transform: "translateX(-50%)",
    top: "50%",
    fontSize: vars.fontSizes["2x"],
    fontWeight: vars.fontWeights.normal,
  },

  "@media screen and (min-width: 1200px)": {
    // bottom: "40%",
    top: "45%",
    fontWeight: vars.fontWeights.normal,
  },
});

export const carouselButton = style({
  position: "absolute",
  bottom: "30%", // 根据需要调整
  left: "25%",
  transform: "translateX(-50%)",

  "@media screen and (max-width: 576px)": {
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
  },

  "@media screen and (min-width: 576px) and (max-width: 768px)": {
    bottom: "20%", // 视口变小时调整位置
    left: "50%",
    transform: "translateX(-50%)",
  },
  "@media screen and (min-width: 768px) and (max-width: 992px)": {
    left: "50%",
    transform: "translateX(-50%)",

    bottom: "30%",
  },

  "@media screen and (min-width: 992px) and (max-width: 1200px)": {
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "20%",
  },

  "@media screen and (min-width: 1200px)": {
    bottom: "25%",
  },
});
