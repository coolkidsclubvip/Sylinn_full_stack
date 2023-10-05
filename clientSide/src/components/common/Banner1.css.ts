import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const bannerWrapper = style({
  width: "70vw",
  height: "45vh",
padding: 0,
  margin: "15vh auto",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
});

export const left = style({
  backgroundColor: vars.colors.grey,
  width:"50%",
  height: "100%",
  padding:"8%"
});

export const right= style({
width: "50%",
backgroundImage:"url(./images/banner1.jpg)",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",

})