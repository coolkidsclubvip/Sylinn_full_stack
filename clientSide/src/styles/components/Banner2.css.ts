import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const bannerWrapper = style({
  width: "70vw",
  height: "45vh",
  padding: 0,
  margin: "5vh auto",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
});

export const right = style({
  backgroundColor: vars.colors.grey,
  width: "50%",
  height: "100%",
  padding: "8%",
});

export const left = style({
  width: "50%",
  backgroundImage: "url(/images/banner_images/banner2.png)",
 backgroundSize: "cover",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
});
