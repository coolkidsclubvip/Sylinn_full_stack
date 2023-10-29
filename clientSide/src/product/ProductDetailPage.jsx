import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as styles from "../styles/ProductDetailPage.css";
import productService from "../services/productService";
import Loader from "../components/common/Loader";
import ProductImageModal from "../components/common/ProductImageModal";
import ProductOptions from "../components/common/ProductOptions";
import ProductTabs from "../components/common/ProductTabs";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import SyButton from "../components/common/SyButton"


function ProductDetailPage() {
  const [data, setData] = useState([]);
  const [titleInfo, setTitleInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); //setSelectedOption from ProductOptions component
  const [selectedProduct, setSelectedProduct] = useState({});
  const [RRP, setRRP] = useState(""); // set RRP to selected option
  const [stock, setStock] = useState(""); // set stock to selected option
  let { category, collection } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productService.getProduct(category, collection);
        const responseData = response.data;

        setData(responseData.docs);
        setTitleInfo(responseData.titleInfo);
        setLoading(false);
      } catch (err) {
        console.log(err?.response);
        setError(true);
        setLoading(false);
      }
    }

    if (loading) {
      fetchProducts();
    }
  }, [loading]);

  // When option is selected, update the RRP and Stock accordingly
  useEffect(() => {
    // find the product with the selectedOption(id) passed in
    if (selectedOption !== "") {
      const selectedProduct = data.find(
        (product) => product.id === selectedOption
      );

      if (selectedProduct) {
        // Update rRP and Stock state
        setRRP(selectedProduct.rrp);
        setStock(selectedProduct.stock);
        setSelectedProduct(selectedProduct);
      }
    }
  }, [selectedOption, data]);

  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container className="text-center mt-4">
        <Loader />
      </Container>
    );
  }

  // Handle delete collection request
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("Delete clicked");
    try {
      setLoading(true);
           console.log("category,collection", category, collection);
      const res = await productService.del(category, collection);
 
         // onSuccess - Redirect
      setLoading(false);
      toast.success(`Product ${titleInfo.title} has been deleted successfully`);
      navigate(`/products/${category}`);
    } catch (error) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      console.log(error);
     
    }
  };

  return (
    <Container>
      <div className={styles.container}>
        {/* 1st row */}
        <Row>
          {/* Big image */}
          <Col sm={12} md={7}>
            <div className={styles.modalContainer}>
              <ProductImageModal titleInfo={titleInfo} />
            </div>{" "}
          </Col>
          {/* Title,subTitle,RRP,stock */}
          <Col sm={12} md={5}>
            <div className={styles.infoContainer}>
              {/* Product title starts */}
              <div className="productTitle">
                <h1>{titleInfo.title}</h1>
                <span className="pdtcode">Product Code: {titleInfo.code}</span>
                <br />
                <br />
                <br />
                <br />

                <h2>
                  $<span id="rrp">{RRP ? RRP : `${data[0].rrp}`}</span>
                </h2>
                <br />
                <br />
                <br />
                {/* stock availability, 3 cases */}
                <div id="stocknote">
                  {/* if stock is undefined, no show anything, otherwise show availability accordingly */}
                  {stock >= 10 ? (
                    <span className="instock">In Stock</span>
                  ) : stock < 10 && stock > 1 ? (
                    <span className="lowstock">Low Stock</span>
                  ) : stock === 0 ? (
                    <span className="nostock">No Stock</span>
                  ) : (
                    ""
                  )}
                  <ProductOptions
                    setSelectedOption={setSelectedOption}
                    data={data}
                  />
                  <div className={styles.buttonsGroups}>
                    {" "}
                    {!user || user.isAdmin === "false" ? (
                      <button>Add to wishlist</button>
                    ) : (
                      <div>
                        {" "}
                        <Button onClick={""}>Edit</Button>
                        <SyButton loading={loading} onClick={handleDelete}>Delete</SyButton>{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Row>
            {" "}
            <Col sm={12} md={5}></Col>
          </Row>
        </Row>
        {/* 2nd row */}

        <Row>
          <Col>
            <div className={styles.descriptionContainer}>
              <ProductTabs titleInfo={titleInfo} />
            </div>{" "}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProductDetailPage;
