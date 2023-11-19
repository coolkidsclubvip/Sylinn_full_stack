import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const bannerWrapper = style({
  width: "70vw",
  height: "50vh",
  padding: 0,
  margin: "15vh auto",
  display: "flex",
  flexDirection: "column",

  "@media screen and (max-width: 768px)": { marginBottom: "60vh " },
});
export const right = style({
  backgroundColor: vars.colors.grey,
  width: "100%",
  height: "100%",
  padding: "17%",

});

export const left = style({

  width: "100%"  ,
  height: "50vh" ,
  // overflow: "hidden",
  backgroundImage: "url(/images/banner_images/banner2.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPositionY:"50%"
});
