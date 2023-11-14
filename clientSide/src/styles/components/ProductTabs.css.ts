import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";
import * as fonts from "../fonts/fonts.css";

export const tabsContainer = style({
  width: "100%",
  marginTop:"10rem"
});

export const customTable = style({
  width: "100%",
  //   borderCollapse: "collapse",
  borderBottom: "2px solid #ddd",
});

export const firstTab = style({
  width: "10%",
  padding: "5px",
  textAlign: "center",
  textDecoration: "none",
  opacity: 0.6,
  ":hover": {
    cursor: "pointer",
    opacity: 1,
    backgroundColor: vars.colors.grey,
  },
});
export const restTab = style({
  width: "50%",
});

export const activeNavLink = style({
  opacity: 1,
  borderBottom: "2px solid black",
  backgroundColor: vars.colors.grey,
});

export const descriptionContent = style({
  // display: "block" /* Show the Description content */
  textAlign: "left",
  paddingTop:"3rem"
});

export const downloadsContent = style({
  textDecoration: "none",
  textAlign:"left",
  display: "flex"
});
