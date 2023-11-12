import { useState, useEffect } from "react";
import * as styles from "../../styles/OnSaleSection.css";
// import * as styles from "../../styles/components/ProductTabs.css";
import productService from "../../services/productService";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css";
import { toast } from "react-toastify";
import writeUtils from "../../utils/writeUtils";

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

      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err);
      setLoading(false);
    }
  }
  // a new function to call 1st available category
  function fetchFirstCat() {
    if (titleInfos.length == 0) {
      console.log("no data");
    } else {
      const firstCat = titleInfos[0].category;
      setSelectedCategory(firstCat);
    }
  }

  useEffect(() => {
    if (loading) {
      FetchOnSaleTitleInfos();

      // call function to set default category
    }
    fetchFirstCat();
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
      <div className={styles.NAWrapper}>
        <p>
          <span className={fonts.futuraTitle}>Our best sellers</span> <br />
          <span className={fonts.normalText}>
            New European design that is fresh off the boat
          </span>
        </p>

        <div className={styles.tabsContainer}>
          <table className={styles.customTable}>
            <tbody>
              {/* Render category names */}
              <tr>
                {uniqueCategories.length >= 1 &&
                  uniqueCategories.map((category, index) => (
                    <td
                      key={index}
                      className={`${styles.firstTab} ${
                        selectedCategory === category
                          ? styles.activeNavLink
                          : ""
                      }`}
                      onClick={() => handleTabClick(category)}
                    >
                      {/* Use predefined formatter to prettier default category names */}
                      <span className={fonts.futuraTabText}>
                        {writeUtils.formatCategoryName(category)}
                      </span>
                    </td>
                  ))}
                {/* <td className={styles.restTab}>
                  <span></span>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>

        {selectedCategory && (
          <div className={`row ${styles.OSList}`}>
            {titleInfos
              .filter((data) => data.category === selectedCategory)
              .map((data, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className={styles.OSItem}>
                    <Link to={`/products/${data.category}/${data.collection}`}>
                      <img
                        src={data.titleInfo.urls[0]}
                        alt={data.titleInfo.title}
                        className={styles.OSItemImage}
                      />
                    </Link>
                    <div className={styles.OSItemText}>
                      <span className={fonts.futuraGridCardTitles}>
                        {writeUtils.capitalizeFirstLetter(data.titleInfo.title)}
                      </span>
                      <br />
                      <p className={styles.code}>{data.titleInfo.code}</p>
                    </div>
                    <Link to={`/products/${data.category}/${data.collection}`}>
                      <button className={styles.button}> DETAILS</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default OnSale;
