import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const header = style({
  position: "relative",
  width: "70vw",
  height: "15vh",
  margin: "0 auto",
  paddingTop: "0",
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights["bold"],
  overflow: "visible",
  borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
  // backgroundColor: "green",
  zIndex: 99,

  color: vars.colors.black,
});

export const navText = style({
  position: "absolute",
  color: vars.colors.black,
  fontSize: vars.fontSizes["2x"],
  ":hover": { opacity: 0.5, transition: "opacity 0.7s ease-in-out" },
});



/////////// search bar style//////////////
export const headerWrapper = style({
  position: "relative",
 
});
export const searchContainer = style({
  position: "absolute",
  width: "200px",
  display: "block",
  
  // backgroundColor: "red",
  margin:"1rem 12rem",
 
});

export const searchInput = style({
  margin: "0 auto",
  width: "100%",
  height: "2rem",
  padding: "0 10px",
  fontSize: "1rem",
  border: "1px solid #D0CFCE",
  outline: "none",
  selectors: {
    "&:focus": {
      border: "1px solid #008ABF",
      transition: "0.35s ease",
      color: vars.colors.brandDark,
    },
    "&::-webkit-input-placeholder": {
      transition: "opacity 0.45s ease",
      opacity: 0,
    },
    "&::-moz-placeholder": {
      transition: "opacity 0.45s ease",
      opacity: 0,
    },
    "&:-ms-input-placeholder": {
      transition: "opacity 0.45s ease",
      opacity: 0,
    },
  },
});

export const searchIcon = style({
  position: "relative",
  float: "right",
  marginTop: "0",
  width: "70px",
  height: "70px",
  top: "-50px",
  right: "-22px",
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

export const navbtn = style({
  width: "200px",
  display: "block",
  textAlign: "center",
  float: "left",

});

export const dropdownContent = style({
  position: "absolute",
  height: "auto",
  backgroundColor: vars.colors.white,
  minWidth: "150px",
  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.5)",
  zIndex: 99,
  marginTop: "0px",
  marginLeft: "10px",
  lineHeight: "45px",
  color: vars.colors.black,
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
    color: vars.colors.gold,
    transition: "all 0.5s ease-in-out",
  },
});

// export const headerNavText = style({
//   textDecoration: "none",
//   color: vars.colors.black,

//   fontSize: vars.fontSizes["2x"],
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-evenly",
//   ":hover": { opacity: 0.7, transition: "opacity 0.7s ease-in-out" },
// });

// export const dropdownButton = style({ fontSize: vars.fontSizes["2x"],
// color:"black" });
// export const dropdownText = style({
//   fontSize: vars.fontSizes["1x"],
//   color: vars.colors.black,
//   ":hover": { backgroundColor: "green", transition: "color 0.7s ease-in-out" },
// });
