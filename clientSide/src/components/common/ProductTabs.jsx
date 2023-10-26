import { useState } from "react";
// import { Nav } from "react-bootstrap";
import * as styles from "../../styles/components/ProductTabs.css";

function ProductTabs({titleInfo}) {
  const [selected, setSelected] = useState("description"); // Set an initial selected tab

  const handleTabClick = (tabKey) => {
    setSelected(tabKey); // Update the selected tab when a tab is clicked
  };

  
  return (
    <>
      <div className={styles.tabsContainer}>
        <table className={styles.customTable}>
          <tr>
            <td
              className={`${styles.firstTab} ${
                selected === "description" ? styles.activeNavLink : ""
              }`}
              onClick={() => handleTabClick("description")}
            >
              <span>Description</span>
            </td>
            <td className={styles.firstTab}>
              <span>{"      "}</span>
            </td>
            <td
              className={`${styles.firstTab} ${
                selected === "downloads" ? styles.activeNavLink : ""
              }`}
              onClick={() => handleTabClick("downloads")}
            >
              <span>Downloads</span>
            </td>
            <td className={styles.restTab}>
              <span></span>
            </td>
          </tr>
        </table>
      </div>
      {selected === "description" && (
        <div className={styles.descriptionContent}>
          {/* Render the Description content here */}
          <p>{titleInfo.description}</p>
        </div>
      )}
      {selected === "downloads" && (
        <div className={styles.downloadsContent}>
          {/* Render the Downloads content here */}
          <a href={`${titleInfo.downloadUrls}`} target="_blank" rel="noreferrer">
            downloand pdf{" "}
          </a>
        </div>
      )}
    </>
  );
}

export default ProductTabs;
