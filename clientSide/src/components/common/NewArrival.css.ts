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

export const name= style({
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bold,
  
});
export const code=style({
     fontSize:vars.fontSizes["1x"],
     fontWeight:vars.fontWeights.normal,
     opacity:0.7
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

