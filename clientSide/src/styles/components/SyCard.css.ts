import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

export const container = style({
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  marginTop: "3rem",
});

export const leadCard = style({
  background: vars.colors.white,
  width: "100%",
  color: vars.colors.brandDark,
  margin: "0 auto",
  padding: "2rem",
  boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  overflow: "scroll",
});

export const authForm = style({
  maxWidth: "30vw",
  background: vars.colors.white,
  width: "100%",
  color: vars.colors.brandDark,
  margin: "0 auto",
  padding: "2rem",
  boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.3)",
  textAlign: "center",

  "@media screen and (max-width: 992px)": {
    maxWidth: "90vw",
  },

  "@media screen and (min-width: 992px) and (max-width: 1200px)": {
    maxWidth: "50vw",
  },
});

export const cardTitle = style({
  color: vars.colors.brand,
  paddingBottom: "1rem",
});

export const cardText = style({
  color: vars.colors.black,
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.normal,
  padding: "1rem",
  // textAlign: "left",
});
