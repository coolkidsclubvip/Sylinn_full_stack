import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const bannerWrapper = style({
  width: "70vw",
  height: "50vh",
  padding: 0,
  margin: "15vh auto",
  display: "flex",
  flexDirection: "column",
  "@media screen and (max-width: 768px)": {
    marginBottom: "60vh ",
    width: "100vw",
  },
});

export const left = style({
  // backgroundColor: vars.colors.grey,
  backgroundImage: "url(/images/banner_images/waterWave.webp)",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  padding: "17%",
});

export const right = style({
  flex: 1,
  width: "100%" /* 添加宽度 */,
  height: "50vh" /* 添加高度 */,
  overflow: "hidden",
  backgroundImage: "url(/images/banner_images/banner1.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  "@media screen and (max-width: 768px)": { backgroundPositionX: "70%" },
});
