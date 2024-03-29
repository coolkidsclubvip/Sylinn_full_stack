import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/global/themes.css";

export const offcanvas = style({
  zIndex: "97",

});

export const navbtn = style({
  // width: "7rem",
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  cursor: "pointer", 
});

export const navLink = style({
  padding: "1em", // 调整内边距以增大可点击区域
  borderRadius: "0.25rem", // 添加边框半径以使背景色更加明显
  
  ":hover": {
    backgroundColor: vars.colors.grey,
  },
});

