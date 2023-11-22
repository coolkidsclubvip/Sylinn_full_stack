import { style } from "@vanilla-extract/css";
import { vars } from "../global/themes.css";

export const modalContainer = style({
  display: "flex",
  flexDirection: "column",
 
});

export const bigImgContainer = style({
  width: "100%",
  height: "auto",
  position: "relative",
  overflow: "hidden",
});

// export const bigImg = style({
//   borderRadius: "5px",
//   cursor: "pointer",
//   transition: "0.3s",
// });

export const modal = style({
  display: "none",
  position: "fixed",
  zIndex: 99,
  paddingTop: "20vh",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",

});

export const modalContent = style({
  margin: "auto",
  display: "block",
  width: "150%",
  maxWidth: "1000px",
  // backgroundColor:"red"
});

export const caption = style({
  margin: "auto",
  display: "block",
  width: "80%",
  maxWidth: "700px",
  textAlign: "center",
  color: "#ccc",
  padding: "10px 0",
  height: "150px",
});

export const zoom = style({
  animationName: "zoom",
  animationDuration: "0.6s",
});

export const close = style({
  position: "absolute",
  textAlign: "center",
  width: "50px",
  top: "20vh",
  right: "10%",
  color: "white",
  fontSize: "50px",
  fontWeight: "bold",
  transition: "0.5s",
  borderRadius: "3px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  ":hover": {
    textDecoration: "none",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});

export const prev = style({
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  width: "auto",
  padding: "16px",
  marginTop: "-50px",

  fontWeight: "bold",
  fontSize: "40px",
  transition: "0.6s ease",
  borderRadius: "3px",
  // userSelect: "none",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  ":hover": { backgroundColor: "rgba(0, 0, 0, 0.9)" },
});

export const next = style({
  right: "10%",
});

export const prevLeft = style({
  left: "10%",
});

// export const active1 = style({
//   // background: "#1c82c7",
//   /* color: #fff; */
// });

export const smallImg = style({
  width: "80px",
  height: "auto",
  marginTop: "1rem",
  // transition: "all 0.6s ease",
  // ":hover": {
  //   cursor: "default",
  //   border: `2px solid ${vars.colors.brand}`,
  // },
});

export const borderedImg = style({
  border: `2px solid ${vars.colors.brand}`,
});

export const ul = style({
  listStyle: "none",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  // backgroundColor: "red"
});

export const li = style({
  float: "left",
  width: "120px",
  height: "auto",
  marginLeft: "10px",
  marginTop: "10px",
  // border: "2px solid #19191a1f",
  overflow: "hidden",
});

export const active = style({
  borderColor: "rgba(0, 0, 0, 0.699)",
});
