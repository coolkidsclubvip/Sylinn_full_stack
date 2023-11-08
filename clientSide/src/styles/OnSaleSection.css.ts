import { style } from "@vanilla-extract/css";
import { vars } from "./global/themes.css";
import * as fonts from "./fonts/fonts.css";

export const NAWrapper = style({
  width: "70vw",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "15vh auto",
});

export const OSList = style({
  width: "100%",
  padding: "5rem 0"
});

export const OSItem = style({
  height: "400px",
  overflow: "hidden",
  boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.5)",
  margin: "20px 4px",
});

export const OSItemText = style({
  height: "65px",
  fontSize: "16px",
  position: "relative",
  textAlign: "left",
  //   textAlign: "center",
  padding: "2% 10%",
  //   paddingLeft: "1rem",
  fontWeight: "600",
});

export const OSItemImage = style({
  opacity: 1,
  width: "100%",
  height: "230px",
  padding: 0,
  transition: "all 0.5s ease",
  ":hover": { opacity: 0.8 },
});

export const code = style({
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  opacity: 0.7,
});
export const description = style({
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
});

export const button = style({
  fontFamily: vars.fonts.brand,
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  border: "none",
  outline: 0,
  display: "inline-block",
  padding: "4px",
  color: "white",
  backgroundColor: vars.colors.brand,
  textAlign: "center",
  cursor: "pointer",
  width: "80%",
  position: "absolute",
  marginTop: 0,
  left: "10%",
  ":hover": { backgroundColor: vars.colors.brandDark },
});


// /////////// Tabs style////////////

export const tabsContainer = style({
  width: "100%",
});

export const customTable = style({
  width: "100%",
  //   borderCollapse: "collapse",
  borderBottom: "1px solid #ddd",
});

export const firstTab = style({
  width: "1rem",
  padding: "0",
  color: "rgba(0,0,0,0.5)",
  // backgroundColor:"green",
  textDecoration: "none",
  ":hover": { cursor: "pointer" },
});
export const restTab = style({
  width: "50%",
  // backgroundColor: "grey",
});

export const activeNavLink = style({
  color: "black",
  borderBottom: "2px solid black",
});

export const descriptionContent = style({
  display: "block" /* Show the Description content */,
});

export const downloadsContent = style({});
