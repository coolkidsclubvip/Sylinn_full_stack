import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const gridWrapper = style({
  width: "70vw",

  marginTop: "20vh",
  height: "auto",
  overflow: "hidden",
  transition: "all 1s ease",
});

export const row = style({
  display: "flex",
  // flexWrap: "wrap",
  // padding: "0 4px",
  justifyContent: "center",
});

// Create four equal columns that sit next to each other
export const column = style({
  flex: "1",
  maxWidth: "35%",
  padding: "0 4px",
  "@media screen and (max-width: 800px)": {
    flex: "50%",
    maxWidth: "50%",
//     height: "300px",
    padding: "8px",
  },

  "@media screen and (max-width: 600px)": {
    flex: "100%",
    maxWidth: "100%",
//     height: "200px",
    padding: "8px",
  },
});


//////////////////////////////

export const div1 = style({
  backgroundImage: "url(/images/htr1.jpg)",
  height: "70vh",
  backgroundSize: "cover",
  backgroundPositionX: "left",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-end",
  transition: "all 1s ease",
  ":hover": {
    backgroundPositionX: "50%",
  },
});

export const div2 = style({
  backgroundImage: "url(/images/acc1.jpg)",
  height: "20%",
  backgroundSize: "auto",
  backgroundPositionY: "62%",
  backgroundPositionX: "32%",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-end",
  transition: "all 1s ease",
  ":hover": {
    backgroundPositionX: "50%",
    backgroundPositionY: "40%",
  },
});
export const div3 = style({
  backgroundImage: "url(/images/bath1.jpg)",
  width: "100%",
  height: "58%",
  backgroundSize: "cover",
  marginTop: "2%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "all 1s ease",
  ":hover": {
    backgroundPositionY: "10%",
  },
});

export const div4 = style({
  backgroundImage: "url(/images/grate1.jpg)",
  width: "100%",
  height: "20%",
  backgroundSize: "cover",
  backgroundPositionY: "center",
  marginTop: "2%",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-start",
  transition: "all 1s ease",
  ":hover": {
    backgroundPositionY: "10%",
  },
});
export const div5 = style({
  backgroundImage: "url(/images/led1.png)",
  width: "100%",
  height: "49%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-start",
  transition: "all 1s ease",
  ":hover": {
    backgroundPositionY: "30%",
  },
});
export const div6 = style({
  backgroundImage: "url(/images/sink1.png) ",
  marginTop: "2%",
  height: "50%",
  backgroundSize: "cover",
  backgroundPositionX: "left",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-start",
  transition: "all 1s ease",
  ":hover": {
    backgroundPositionX: "60%",
  },
});
/////////////text style//////////
export const gridText = style({
   
  padding: "10px",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  color: vars.colors.white,
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
  transition: "all 1s ease-out",
  ":hover": {
    color: vars.colors.black,
  },
});
