import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";
import * as fonts from "../fonts/fonts.css";

export const OsContainer = style({
  width: "70vw",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  margin: "15vh auto",
  "@media screen and (max-width: 768px)": { width: "100vw" },
});

export const OSList = style({
  width: "100%",
  padding: "2rem 0",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

export const OSItem = style({
  height: "420px",
  overflow: "hidden",
  boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.3)",
  margin: "20px 4px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "5px",
  // "@media screen and (max-width: 768px)": {
  //   width: "90vw",
  //   height: "auto",
  //   margin: "1rem auto",
  // },
});

export const OSItemText = style({
  textAlign: "left",
  position: "relative",
  padding: "1.1rem",
});

export const OSItemImage = style({
  opacity: 1,
  width: "100%",
  height: "230px",
  overflow: "hidden",
  padding: 0,
  transition: "all 0.5s ease",
  ":hover": { opacity: 0.9 },
});

export const code = style({
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  opacity: 0.7,
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
  marginLeft: "10%",
  marginTop: "auto",
  marginBottom: "1rem",
  ":hover": { backgroundColor: vars.colors.brandDark },
});

// /////////// Tabs style////////////

export const tabsContainer = style({
  width: "100%",
  borderBottom: "2px solid #ddd",
});

// export const customTable = style({
//   width: "100%",
//   //   borderCollapse: "collapse",
//   borderBottom: "2px solid #ddd",
// });

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

// export const restTab = style({
//   width: "50%",
//   // backgroundColor: "grey",
// });

export const activeNavLink = style({
  opacity: 1,
  backgroundColor: vars.colors.grey,
  borderBottom: "2px solid black",
});
