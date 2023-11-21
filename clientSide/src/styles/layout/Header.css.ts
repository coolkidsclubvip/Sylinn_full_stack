import { style, globalStyle, keyframes } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

// export const container = style({
//   // position: "absolute",
//   // width: "100vw",
//   // display: "flex",
//   // flexDirection: "column",
//   // height: "auto",
//   // zIndex: "99",
// });

export const bigHeader = style({
  position: "fixed",
  width: "100vw",
  height: "100px",
  top: 0,
  left: 0,
  right: 0,

  paddingTop: "0",
  // fontSize: vars.fontSizes["1x"],
  // fontWeight: vars.fontWeights["bold"],
  overflow: "hidden",
  borderBottom: `1px solid ${vars.colors.brand}`,
  zIndex: 99,
  color: vars.colors.black,
  backgroundColor: "white",
  transition: "all 0.5s ease",
  "@media screen and (max-width: 768px)": { height: "150px" },
});

export const smallHeader = style({
  position: "fixed",
  width: "100vw",
  // height: "8vh",
  height: "70px",
  top: 0,
  left: 0,
  right: 0,
  fontWeight: vars.fontWeights["bold"],
  overflow: "hidden",
  zIndex: 99,
  color: vars.colors.black,
  backgroundColor: "white",
  transition: "all 0.5s ease",
  "@media screen and (max-width: 768px)": { height: "122px" },
});

// export const hamburgerAndLogoGroup = style({
//   backgroundColor: "red",
//   "@media screen and (max-width: 768px)": { display:"flex", flexDirection: "row", marginLeft: 0,justifyContent:"space-between",  }
// });

globalStyle(`${bigHeader} a`, {
  textDecoration: "none",
  color: vars.colors.black,
});
globalStyle(`${bigHeader} a:hover`, {
  textDecoration: "none",
  color: vars.colors.brand,
});
globalStyle(`${smallHeader} a`, {
  textDecoration: "none",
  color: vars.colors.black,
});
globalStyle(`${smallHeader} a:hover`, {
  textDecoration: "none",
  color: vars.colors.brand,
});
export const navText = style({
  position: "absolute",
  color: vars.colors.black,
  // fontSize: vars.fontSizes["2x"],
  ":hover": { opacity: 0.5, transition: "opacity 0.7s ease-in-out" },
});

export const buttonsGroup = style({
  "@media screen and (max-width: 768px)": { paddingTop: "1rem" },
});

// Search bar fade in effect
export const fadeInDown = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const SearchBarDiv = style({
  //   display:"flex",
  // position: "absolute",
  position: "fixed",
  zIndex: "99",
  backgroundColor: "#EEEEEE",
  width: "100vw",
  textAlign: "center",
  animation: `${fadeInDown} 0.5s ease`, // Search bar fade in effect
});

export const top100px = style({
  marginTop: "100px",
  "@media screen and (max-width: 768px)": { marginTop: "150px" },
});
export const top70px = style({
  marginTop: "70px",
  "@media screen and (max-width: 768px)": { marginTop: "122px" },
});

export const close = style({
  marginLeft: "-20%",
  cursor: "pointer",
  zIndex: "100",
});
