import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";


export const customClass= style({
     padding: "0 2rem",

// backgroundColor:"green"
})

export const carouselContainer = style({
  paddingTop: "3rem",
zIndex:"1"
});



export const customDotList = style({
  position: "absolute",
  top: "90%",

});



export const RPItem = style({
  height: "420px",
  overflow: "hidden",
  margin: "20px 4px",
  display: "flex",
  flexDirection: "column",

});

export const RPItemText = style({
  textAlign: "left",
  position: "relative",
top:"0",
});

export const RPItemImage = style({
  opacity: 1,
  width: "100%",
  height: "230px",
  overflow: "hidden",
  padding: 0,
  transition: "all 0.5s ease",
  ":hover": { opacity: 0.8 },
  
});

export const code = style({
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  opacity: 0.7,
});
 

// export const button = style({
//   fontFamily: vars.fonts.brand,
//   fontSize: vars.fontSizes["1x"],
//   fontWeight: vars.fontWeights.normal,
//   border: "none",
//   outline: 0,
//   display: "inline-block",
//   padding: "4px",
//   color: "white",
//   backgroundColor: vars.colors.brand,
//   textAlign: "center",
//   cursor: "pointer",
//   width: "80%",
//   marginTop: "auto",
//   marginBottom: "1rem",
//   ":hover": { backgroundColor: vars.colors.brandDark },
// });
