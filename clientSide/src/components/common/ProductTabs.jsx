import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as styles from "../../styles/components/ProductTabs.css";
import * as fonts from "../../styles/fonts/fonts.css";
import pdfIcon from "../../../src/assets/images/pdfIcon.png";
import readUtils from "../../utils/readUtils";

function ProductTabs({ titleInfo }) {
  const [selected, setSelected] = useState("description"); // Set an initial selected tab

  const handleTabClick = (tabKey) => {
    setSelected(tabKey); // Update the selected tab when a tab is clicked
  };

  // Split description by *, and render
  const renderDescriptionContent = () => {
    // Split the description into paragraphs and list items
    const paragraphsAndList = titleInfo.description.split(/\n(?=\* )/);
    return (
      <Container>
        <Row>
          <Col>
            {paragraphsAndList.map((item, index) => {
              // Check if the item is a list item (starts with '* ')
              if (/^\*\s*/.test(item)) {
                // Replace '*' with '<li>' and trim the item
                const listItem = `<li>${item
                  .replace(/^\*\s*/, "")
                  .trim()}</li>`;
                return (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: listItem }}
                  />
                );
              } else {
                return <p key={index}>{item.trim()}</p>;
              }
            })}
          </Col>
        </Row>
      </Container>
    );
  };

// Get download file name
const GetDownloadFileName=(url)=>{
const fileNameWithTimeStamp=readUtils.getFileFromUrl(url);

const downloadFileName = readUtils.deleteTimestampFromName(
  fileNameWithTimeStamp
);
return downloadFileName;
}
  return (
    <>
      <div className={styles.tabsContainer}>
        <table className={styles.customTable}>
          <tbody>
            <tr>
              <td
                className={`${styles.firstTab} ${
                  selected === "description" ? styles.activeNavLink : ""
                }`}
                onClick={() => handleTabClick("description")}
              >
                <span className={fonts.futuraTabText}>Description</span>
              </td>

              <td
                className={`${styles.firstTab} ${
                  selected === "downloads" ? styles.activeNavLink : ""
                }`}
                onClick={() => handleTabClick("downloads")}
              >
                <span className={fonts.futuraTabText}>Downloads</span>
              </td>
              <td className={styles.restTab}>
                <span></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {selected === "description" && (
        <div className={styles.descriptionContent}>
          {/* Render the Description content here */}
          {renderDescriptionContent()}
        </div>
      )}
      {selected === "downloads" && (
        <div className={styles.downloadsContent}>
          {/* Render the Downloads content here */}

          {/* 在这里渲染下载链接内容 */}
          <ul>
            {titleInfo.downloadUrls.map((url, index) => (
              <li
                key={index}
                style={{
                  listStyleType: "none",
                  // backgroundColor: "red",
                }}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  <img
                    src={pdfIcon}
                    style={{
                      height: "4rem",
                      overflow: "hidden",
                      margin: "1rem 0",
                    }}
                  />
                  {(GetDownloadFileName( url))}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ProductTabs;
