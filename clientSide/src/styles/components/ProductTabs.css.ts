import { style } from "@vanilla-extract/css";

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
  textDecoration: "none",
  ":hover": { cursor: "pointer" },
});
export const restTab = style({
  width: "80%",
});

export const activeNavLink = style({
  color: "black",
  borderBottom: "2px solid black",
});

export const descriptionContent = style({
  display: "block" /* Show the Description content */
});

export const downloadsContent = style({
  
});
