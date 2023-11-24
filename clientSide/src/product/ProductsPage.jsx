import { useState, useEffect, useAuth, useParams } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Card,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import productService from "../services/productService";
import * as styles from "../styles/page/ProductsPage.css";
import * as fonts from "../styles/fonts/fonts.css";
import writeUtils from "../utils/writeUtils";
import acc_cate from "../assets/images/cate_images/acc_cate.png";
import bath_cate from "../assets/images/cate_images/bath_cate.png";
import grate_cate from "../assets/images/cate_images/grate_cate.png";
import htr_cate from "../assets/images/cate_images/htr_cate.png";
import led_cate from "../assets/images/cate_images/led_cate.png";
import sink_cate from "../assets/images/cate_images/sink_cate.png";
import no_image_available from "../assets/images//no_image_available.jpeg";

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Get all categories
  async function getAllCategories() {
    try {
      const response = await productService.getAllCategories();

      setCategories(response.data);

      // Store data in localStorage
      localStorage.setItem("products", JSON.stringify(response.data));

      setLoading(false);
    } catch (err) {
      console.log(err?.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem("products");
    if (cachedData) {
      // Use cached data if available
      setCategories(JSON.parse(cachedData));
      setLoading(false);
    } else {
      // Fetch data from the database if not available in localStorage
      getAllCategories();
    }
  }, [loading]);

  // Set SRC according to category id
  const imageSwitch = (cate) => {
    switch (cate) {
      case "acc":
        return acc_cate;

      case "bath":
        return bath_cate;
      case "grate":
        return grate_cate;

      case "htr":
        return htr_cate;
      case "led":
        return led_cate;
      case "sink":
        return sink_cate;

      default:
        return no_image_available;
    }
  };

  if (loading) {
    return (
      <Container>
        <div className={`${styles.container}`} style={{ paddingTop: "25%" }}>
          <Spinner />
        </div>
      </Container>
    );
  }

  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.titleText}>OUR PRODUCTS</div>
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
                <Breadcrumb.Item active>Products</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              {" "}
              <h1 className={fonts.futuraTitle}>BROWSE BY CATEGORY</h1>
            </Col>
          </Row>
          <Row>
            <div className="mt-5 "></div>
            {categories.map((category, index) => (
              <Col sm={6} md={4} lg={3} key={index} className="my-3">
                <Link to={`/products/${category.id}`}>
                  <Card className={styles.card} style={{textDecoration:"none"}}>
                    <Card.Img variant="top" src={imageSwitch(category.id)} />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title>
                        <span className={fonts.futuraGridCardTitles}>
                          {" "}
                          {writeUtils.formatCategoryName(category.id)}
                        </span>
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
          {/* <Row>
            <Col sm={12}>4</Col>
          </Row> */}
        </div>
      </Container>
    </>
  );
}

export default ProductsPage;
