import { style } from "@vanilla-extract/css";

export const footer = style({
  width: "70vw",
  height: "10vh",
  margin: "0 auto",
  paddingTop: 0,
  bottom: 0,
  fontSize: "large",
  overflow: "visible",
  borderTop: "1px solid rgba(0, 0, 0, 0.15)",
});

export const smLogos = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignContent: "space-between",
  paddingTop: "1rem",
});

export const smLogosHover = style({
  ":hover": { opacity: 0.5, transition: "opacity 0.7s ease-in-out" },
});

export const footerNavText = style({
  fontFamily: "Futura Bk",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.9)",
  margin: "0 0 0.5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: "1rem",
});

export const footerNavTextHover = style({
  ":hover": { opacity: 0.7, transition: "opacity 0.7s ease-in-out" },
});

export const footerSyLogo = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: "1rem",
});

export const copyrightText = style({
  display: "flex",
  flex: 1,
  fontSize: "1rem",
  fontWeight: "500",
  justifyContent: "center",
  paddingTop: "2rem",
});
