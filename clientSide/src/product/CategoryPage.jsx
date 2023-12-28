import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as styles from "../styles/CategoryPage.css";
import { Container, Row, Col, Breadcrumb, Spinner } from "react-bootstrap";
import productService from "../services/productService";
import TitleCard from "../components/common/TitleCard";
import AddNewItemCard from "../components/common/AddNewItemCard";
import * as fonts from "../styles/fonts/fonts.css.ts";
import writeUtils from "../utils/writeUtils";
import useAuth from "../hooks/useAuth";
import AddNewItemPanel from "../components/common/AddNewItemPanel";
import { Helmet } from "react-helmet";

function CategoryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { category, collection } = useParams();
  const [showAddNewPanel, setShowAddNewPanel] = useState(false);

  async function fetchCollections() {
    try {
      const response = await productService.getAllCollections(category);
      const responseData = response.data;

      setData(responseData);

      // Store data in localStorage
      localStorage.setItem(
        `categoryData_${category}`,
        JSON.stringify(responseData)
      );

      setLoading(false);
    } catch (err) {
      console.log(err?.response);

      setLoading(false);
    }
  }

  useEffect(() => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(`categoryData_${category}`);

    if (cachedData) {
      // Use cached data if available
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      // Clear other categoryData before fetching or setting new data
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("categoryData_")) {
          localStorage.removeItem(key);
        }
      });

      // Fetch data from the database if not available in localStorage
      fetchCollections();
    }
  }, [loading, category]);

  const formattedCategory = writeUtils.formatCategoryName(category);

  if (loading) {
    return (
      <Container>
        <div
          className={`${styles.NAWrapper}}`}
          style={{ paddingTop: "50vh", paddingLeft: "50%" }}
        >
          <Spinner />
        </div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>product category</title>
      </Helmet>
      {showAddNewPanel && (
        <div className={styles.addItemBG}>
          {" "}
          <AddNewItemPanel
            setShowAddNewPanel={setShowAddNewPanel}
            fetchCollections={fetchCollections}
            category={category}
          />
          <div style={{ marginTop: "20vh" }}></div>
        </div>
      )}
      <div className={styles.imageContainer}>
        <div className={styles.titleText}>
          {writeUtils.capitalizeAllLetter(formattedCategory)}
        </div>
      </div>
      <Container>
        <div className={styles.container}>
          <Row>
            <Col sm={12}>
              {" "}
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to={"/"}>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {" "}
                  <Link to={"/products"}>Products</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {writeUtils.formatCategoryName(category)}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <div className={styles.NAWrapper}>
            <div className={"row"}>
              {/* add new item card is the 1st card, only visible to Admin */}
              {user && user.isAdmin === "true" && (
                <AddNewItemCard setShowAddNewPanel={setShowAddNewPanel} />
              )}
              {/* start mapping products */}
              {data.map((item, index) => (
                <TitleCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div> 
      </Container>
    </>
  );
}

export default CategoryPage;
