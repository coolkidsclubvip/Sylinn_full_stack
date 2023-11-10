import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

// export const headerWrapper = style({
//   position: "fixed",
//   display:"flex",
//   width: "100vw",
//   height: "13vh",
//   backgroundColor: "white",
//   zIndex: 97,
// margin:"0 auto"

// });

export const bigHeader = style({
  position: "fixed",
  width: "100%",
  height: "12vh",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  paddingTop: "0",
  // fontSize: vars.fontSizes["1x"],
  // fontWeight: vars.fontWeights["bold"],
  overflow: "hidden",
  borderBottom: `1px solid ${vars.colors.brand}`,
  zIndex: 99,
  color: vars.colors.black,
  backgroundColor: "white",
  transition: "all 0.5s ease",
});

export const smallHeader = style({
  position: "fixed",
  width: "100vw",
  height: "8vh",
  top: 0,
  left: 0,
  right: 0,
  fontWeight:vars.fontWeights["bold"],
  // margin: "-8px auto",
  // fontSize: vars.fontSizes["1x"],
  // fontWeight: vars.fontWeights["bold"],
  overflow: "hidden",
  // borderBottom: `1px solid ${vars.colors.brand}`,

  zIndex: 99,
  color: vars.colors.black,
  backgroundColor: "white",
  // transform: "scale(0.9)",
  boxShadow: "1px 1px 8px  rgba(0, 0, 0, 0.5)",
  transition: "all 0.7s ease",
});

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

// export const headerBG= style({
//   position:"absolute",
//   width: "100vw",
//   height: "13vh",
//   margin:"-8px",
//   backgroundColor: vars.colors.white,
//   zIndex:98,
// })

/////////// search bar style//////////////
// export const headerWrapper = style({
//   position: "relative",
// });
export const searchContainer = style({
  position: "absolute",
  width: "200px",
  display: "block",
  // backgroundColor: "red",
  margin: "1rem 12rem",
});

////////////////////////////////
export const dropdown = style({
  position: "relative",
  display: "block",
  width: "150px",
});

export const dropdownbtn = style({
  width: "200px",
  display: "block",
  float: "left",
  marginLeft: 0,
});

export const dropdownContent = style({
  position: "absolute",
  height: "auto",
  backgroundColor: vars.colors.white,
  minWidth: "150px",
  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.5)",
  zIndex: 99,
  marginTop: "1.5rem",
  marginLeft: "0px",
  lineHeight: "45px",
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.bold,
  transition: "all 1s ease-out",
});

export const dropdownContentLink = style({
  display: "inline-block",
  width: "100%",
  paddingLeft: "4px",
  ":hover": {
    backgroundColor: vars.colors.grey,
    transition: "all 0.5s ease-in-out",
  },
});

export const dropdownTextHover = style({
  ":hover": {
    transition: "all 0.5s ease-in-out",
  },
});
