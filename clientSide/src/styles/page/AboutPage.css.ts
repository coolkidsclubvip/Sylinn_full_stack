import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";
import * as fonts from "../fonts/fonts.css";

export const imageContainer = style({
  backgroundImage: "url(./images/about_bg.jpg)",
  backgroundSize: "cover",
  position: "relative",
  height: "200px",
  //为什么header总是会盖住内容，
 marginTop:"12vh"
});


export const titleText = style({
  backgroundColor: "white",
 
  fontSize: "3rem",
  fontWeight: vars.fontWeights.bolder,
  margin: "0 auto",
  padding: "1rem",
  width: "25%",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  mixBlendMode:"screen"
});

export const contentImage = style({
  width:"30vw",
  height:"auto",
  overflow: "hidden",
})


 export const  contentText=style({

paddingTop: "4rem"
  
 })