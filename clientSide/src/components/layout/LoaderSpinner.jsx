import React from "react";
import * as styles from "../../styles/layout/LoaderSpinner.css";

function LoaderSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerBefore}/> 
      <div className={styles.spinner}/>
        
        <div className={styles.spinnerAfter}/> 
     </div>
  
  );
}

export default LoaderSpinner;
