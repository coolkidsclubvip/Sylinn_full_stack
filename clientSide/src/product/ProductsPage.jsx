import { useState, useEffect, useAuth, useParams } from "react";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import productService from "../services/productService";
import * as styles from "../styles/page/ProductsPage.css";
import * as fonts from "../styles/fonts/fonts.css";
import writeUtils from "../utils/writeUtils";
import acc_cate from "../assets/images/acc_cate.png";
import bath_cate from "../assets/images/bath_cate.png";
import grate_cate from "../assets/images/grate_cate.png";
import no_image_available from "../assets/images/no_image_available.jpeg";

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Get all categories
  async function getAllCategories() {
    try {
      const response = await productService.getAllCategories();

      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  console.log("categories are:", categories);

  // async function fetchCollections() {
  //   try {
  //     const response = await productService.getAllCollections(category);
  //     const responseData = response.data;

  //     setData(responseData);

  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err?.response);

  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   if (loading) {
  //     fetchCollections();
  //   }
  // }, [loading, category]);

  // Set SRC according to category id
  const imageSwitch = (cate) => {
    switch (cate) {
      case "acc":
        return acc_cate;

      case "bath":
        return bath_cate;
      case "grate":
        return grate_cate;

      default:
        return no_image_available;
    }
  };

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
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
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
              <Col sm={12} md={3} key={index} className="my-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={imageSwitch(category.id)} />
                  <Card.Body>
                    <Card.Title>
                      {writeUtils.formatCategoryName(category.id)}
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={12}>4</Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ProductsPage;
