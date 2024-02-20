import React from "react";
import * as styles from "../../styles/layout/LoaderSpinner.css";

function LoaderSpinner() {
  return (
    <div className={styles.container}>
    
        <div className={styles.spinnerBefore1}>
          <div className={styles.spinnerBefore} />
        </div>

        <div className={styles.spinnerAfter1}>
          <div className={styles.spinnerAfter} />
        </div>
    
    </div>
  );
}

export default LoaderSpinner;
