import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

export const offcanvas = style({
  zIndex: "97",

});

export const navbtn = style({
  width:"7rem",
  display: "flex",
  flexDirection: "column",
 
  // textAlign: "center",

  marginTop: "1rem",
  ":hover":{
    
    backgroundColor: vars.colors.grey,
     
  }
});


