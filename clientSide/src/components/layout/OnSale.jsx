import { useState, useEffect } from "react";
import * as styles from "../../styles/layout/OnSaleSection.css";
// import * as styles from "../../styles/components/ProductTabs.css";
import productService from "../../services/productService";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css";
import { toast } from "react-toastify";
import writeUtils from "../../utils/writeUtils";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg";

function OnSale() {
  const [titleInfos, setTitleInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  // titleInfos[0].category

  async function FetchOnSaleTitleInfos() {
    try {
      const response = await productService.getOnSaleCollections();
      // console.log("response.data is: ", response.data);
      setTitleInfos(response.data);
      // Store data in localStorage
      localStorage.setItem(`onSaleTitleInfos`, JSON.stringify(response.data));
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err);
      setLoading(false);
    }
  }
  // a new function to call 1st available category
  function fetchFirstCate() {
    if (titleInfos.length == 0) {
      console.log("no data");
    } else {
      const firstCat = titleInfos[0].category;
      setSelectedCategory(firstCat);
    }
  }

  useEffect(() => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(`onSaleTitleInfos`);

    if (cachedData) {
      // Use cached data if available
      setTitleInfos(JSON.parse(cachedData));
      setLoading(false);
    } else {
      FetchOnSaleTitleInfos();
    }

    // call function to set default category

    fetchFirstCate();
  }, [loading]);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };
  // / 使用 Set 来去重 titleInfos 中的 category
  const uniqueCategories = [
    ...new Set(titleInfos.map((data) => data.category)),
  ];
  // Put all unique categories in order alphabetically
  uniqueCategories.sort();
  // console.log("titleInfos are:", titleInfos);



  return (
    <Container>
      <div className={styles.OsContainer}>
        <span className={fonts.futuraTitle}>Our Best Sellers</span>

        <div className={`${styles.tabsContainer} mt-3`}>

          {loading && (
            <div
              className={styles.OsContainer}
              style={{ paddingTop: "0", paddingLeft: "50%"}}
            >
              <Spinner />
            </div>
          )}

          {/* Render category names */}
          <Row>
            {uniqueCategories.length >= 1 &&
              uniqueCategories.map((category, index) => (
                <Col
                  xs={6}
                  md={2}
                  key={index}
                  className={`${styles.firstTab} ${
                    selectedCategory === category ? styles.activeNavLink : ""
                  }`}
                  onClick={() => handleTabClick(category)}
                >
                  {/* Use predefined formatter to prettier default category names */}
                  <span className={fonts.futuraTabText}>
                    {writeUtils.formatCategoryName(category)}
                  </span>
                </Col>
              ))}
            {/* <td className={styles.restTab}>
                  <span></span>
                </td> */}
          </Row>
        </div>

        <Row>
          {selectedCategory && (
            <div className={`${styles.OSList}`}>
              {titleInfos
                .filter((data) => data.category === selectedCategory)
                .map((data, index) => (
                  <Col xs={12} md={4} key={index} className="px-3">
                    <div className={styles.OSItem}>
                      <Link
                        to={`/products/${data.category}/${data.collection}`}
                      >
                        <div className={styles.OSItemImage}>
                          {" "}
                          <img
                            src={
                              data.titleInfo.urls
                                ? data.titleInfo.urls[0]
                                : imagePlaceHolder
                            }
                            alt={data.titleInfo.title}
                          />
                        </div>
                      </Link>
                      <div className={styles.OSItemText}>
                        <span className={fonts.futuraGridCardTitles}>
                          {writeUtils.capitalizeFirstLetter(
                            data.titleInfo.title
                          )}
                        </span>
                        <br />
                        <p className={styles.code}>{data.titleInfo.code}</p>
                      </div>
                      <Link
                        to={`/products/${data.category}/${data.collection}`}
                      >
                        <button className={styles.button}> DETAILS</button>
                      </Link>
                    </div>
                  </Col>
                ))}
            </div>
          )}
        </Row>
      </div>
    </Container>
  );
}

export default OnSale;
