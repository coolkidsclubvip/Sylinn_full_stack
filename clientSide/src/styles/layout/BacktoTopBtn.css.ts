import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const btn = style({
  backgroundImage: "url(/images/icons/back_to_top_logo.jpg)",
//   backgroundColor: "red",
  backgroundSize:"cover",
  backgroundRepeat: "no-repeat",
  width: "50px",
  height: "50px",
  position: "fixed",
  top: "85vh",
  right: "2vw",
   cursor: "pointer",
  opacity: "0.8",
  ":hover": {opacity: 1}
});
