import { style } from "@vanilla-extract/css";

export const app = style({
  fontFamily: "Futura Bk,sans-serif",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "ffff",
});

export const appContent = style({
  margin: "1rem 0",
  flex: 1,
});
