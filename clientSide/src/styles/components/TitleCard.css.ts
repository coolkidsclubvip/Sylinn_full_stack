import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

export const Wrapper = style({
  width: "70vw",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "15vh auto",
  "@media screen and (max-width: 768px)": { width: "100vw" },
});

export const List = style({
  width: "100%",
});

export const Item = style({
  height: "450px",
  overflow: "hidden",
  boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.3)",
  margin: "20px 4px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "5px",
});

export const ItemText = style({
  textAlign: "left",
  position: "relative",
  padding: "1.1rem",
  paddingTop: 0,
});

export const ItemImage = style({
  opacity: 1,
  // width: "100%",
  // height: "230px",  
  height: "100%",
  overflow: "hidden",
  padding: 0,
  transition: "all 0.5s ease",
  ":hover": { opacity: 0.9 },
  // when viewport less than 1200, move text higher a bit
  "@media screen and (max-width: 1200px)": { height: "200px" },
});

export const code = style({
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  opacity: 0.7,
});
// export const description = style({
//   fontFamily: vars.fonts.body,
//   fontSize: vars.fontSizes["1x"],
//   fontWeight: vars.fontWeights.normal,
// });

export const button = style({
  fontFamily: vars.fonts.brand,
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  border: "none",
  outline: 0,
  // display: "inline-block",
  padding: "4px",
  color: "white",
  backgroundColor: vars.colors.brand,
  textAlign: "center",
  cursor: "pointer",
  width: "80%",
  marginTop: "auto",
  marginBottom: "1rem",
  marginLeft: "50%",
  transform: "translateX(-50%)",
  ":hover": { backgroundColor: vars.colors.brandDark },
});
