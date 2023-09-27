import { style} from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const NAWraper = style({
  width: "70vw",
  height: "auto",
  display:"flex",
  flexDirection:"row",
 
  flexWrap: "wrap",

  marginTop: "10rem",
});

export const NAList = style({
  width: "100%",

});

export const NAItem = style({
 
  height: "400px",
  overflow: "hidden",
  boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.5)",
  margin: "20px 4px",
});

export const NAItemText = style({
  height: "65px",
  fontSize: "16px",
  position: "relative",
//   textAlign: "center",
  padding: "1rem 10%",
//   paddingLeft: "1rem",
  fontWeight: "600",
});

export const NAItemImage = style({
  opacity: 1,
  width: "100%",
  height: "230px",
  padding: 0,
  transition:"all 0.5s ease",
  ":hover":{opacity: 0.8},
});


export const code=style({
     fontSize:vars.fontSizes["1x"],
     fontWeight:vars.fontWeights.light,
     opacity:0.8
})
export const description = style({
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal
});

export const button = style({
  fontSize: vars.fontSizes["1x"],
  fontWeight: vars.fontWeights.normal,
  border: "none",
  outline: 0,
  display: "inline-block",
  padding: "4px",
  color: "white",
  backgroundColor:vars.colors.brand,
  textAlign: "center",
  cursor: "pointer",
    width: "80%",
  position: "absolute",
 marginTop: 0,
  left: "10%",
  ":hover":{backgroundColor: vars.colors.brandDark}
});

// export const titleStyle = style({
//   color: vars.colors.black,
//   display: "inline-block",
//   marginTop: "10rem",
//   fontSize: vars.fontSizes["4x"],
//   fontWeight: vars.fontWeights.bold,

// });

// export const divideLineStyles = style({
//   width: "100%",
//   border: "0.5px solid rgba(29, 29, 29, 0.123)",
//   margin: "10px",
// });

// .newArrival {
//   width: 1200px;
//   height: auto;
//   margin-top: 50px;
// }

// .m-title {
//   width: 500px;
//   height: 80px;
//   line-height: 80px;
//   background-image: url(../images/blue-euclidean-blue-ribbon-background-blue-angle.png);
//   background-repeat: no-repeat;
//   background-position: center;
//   text-align: center;
//   font-weight: 900;
//   color: rgba(0, 0, 0, 0.9);
//   margin: 10px auto;
// }

// .m-list {
//   width: 100%;
//   display: block;
//   float: left;
// }

// .m-list a {
//   width: 22%;
//   height: 310px;
//   overflow: hidden;
//   float: left;
//   /* border-radius: 10px; */
//   display: block;
//   box-shadow: 1px 2px 4px 2px rgba(75, 73, 73, 0.3);
//   margin: 20px 15px;
// }
// .m-list a p {
//   height: 65px;
//   font-size: 16px;
//   text-align: center;
//   /* line-height: 40px; */
//   padding: 16px;
//   font-weight: 600;
// }

// .m-list img {
//   opacity: 100%;
//   width: 100%;
//   height: 235px;
// }

// .m-list a:hover {
//   background: #1c82c7;
//   color: #fff;
//   opacity: 90%;
// }

// .m-list a img {
//   overflow: hidden;
// }

// .divideLine {
//   width: 100%;
//   border: 0.5px solid rgba(29, 29, 29, 0.123);
//   margin: 10px;
// }