import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";


export const notFoundWrapper = style({
  width: "70vw",
  height: "70vh",
  margin: "0 auto",
  padding: "2rem",
  marginTop: "10vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "all 1s ease",
  backgroundImage: "url(/images/404_bathroom_concept.jpg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const Text404 = style({
  padding: "0 auto",
  margin: "0 auto",
  color: vars.colors.brand,
});

export const button404 = style({
  marginTop: "55vh",
});
