import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Breadcrumb,
} from "react-bootstrap";
import * as styles from "../styles/ProductDetailPage.css";
import productService from "../services/productService";
import DelayedLoaderSpinner from "../components/layout/DelayedLoaderSpinner";
import ProductImageModal from "../components/common/ProductImageModal";
import ProductOptions from "../components/common/ProductOptions";
import ProductTabs from "../components/common/ProductTabs";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import EditItemPanel from "../components/common/EditItemPanel";
import writeUtils from "../utils/writeUtils";
import * as fonts from "../styles/fonts/fonts.css";
import RelatedProductsCarousel from "../components/common/RelatedProductsCarousel";
import { Helmet } from "react-helmet";

function ProductDetailPage() {
  // Initialize product detail data
  const [data, setData] = useState([]);
  const [titleInfo, setTitleInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); //setSelectedOption from ProductOptions component
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [RRP, setRRP] = useState(""); // set RRP to selected option
  const [stock, setStock] = useState(""); // set stock to selected option
  const [relatedProducts, setRelatedProducts] = useState([]); // set related products
  let { category, collection } = useParams(); //useParams hook to be used only within a ROUTED component

  const { user } = useAuth();
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const response = await productService.getProduct(category, collection);
      const responseData = response.data;

      setData(responseData.docs);
      setTitleInfo(responseData.titleInfo);
      setLoading(false);
      return responseData;
    } catch (err) {
      console.log(err?.response);
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (loading) {
      fetchProduct();
    }
  }, [loading]);

  // When option is selected, update the RRP and Stock accordingly
  useEffect(() => {
    // find the product with the selectedOption(id) passed in
    if (selectedOption !== "") {
      const selectedProduct = data.find(
        (product) => product.id === selectedOption
      );
      // If in initial state, no selected option, stock should be " "
      if (selectedOption === "") {
        setStock("");
      }

      if (selectedProduct) {
        // Update rRP and Stock state
        setRRP(selectedProduct.rrp);
        setStock(selectedProduct.stock);
        setSelectedProduct(selectedProduct);
      }
    }
  }, [selectedOption, data]);

  // Fetch related products and prop into RelatedProductCarousel
  async function fetchCollections() {
    try {
      const response = await productService.getAllCollections(category);
      const responseData = response.data;

      // exclude current product
      const filteredProducts = responseData.filter(
        (item) => item.collectionId !== collection
      );

      setRelatedProducts(filteredProducts);
    } catch (err) {
      console.log(err?.response);
    }
  }
  // Fetch related products when initiated
  useEffect(() => {
    fetchCollections();
  }, [category, loading]);

  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    );
  }
  console.log("loading is :", loading);

  if (loading) {
    return (
      <div>
        <DelayedLoaderSpinner />
      </div>
    );
  }

  // Handle delete collection request
  const handleDelete = async (e) => {
    e.preventDefault();
    // Alert window to confirm delete
    const deleteConfirmed = confirm("Confirm delete?");
    if (deleteConfirmed) {
      try {
        setLoading(true);

        await productService.del(category, collection);

        // onSuccess - Redirect
        setLoading(false);
        toast.success(
          `Product ${titleInfo.title} has been deleted successfully`
        );
        navigate(`/products/${category}`);
      } catch (error) {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        toast.error(error.message);
      }
    } else {
      return;
    }
  };

  // Sort data in ascending order of RRP
  const sortedData = data.sort((a, b) => a.rrp - b.rrp);

  // Pass an initial product ID to Big image display
  const initialProductId = sortedData[0].id;

  return (
    <Container>
      <Helmet>
        <title>product detail</title>
      </Helmet>
      <div className={styles.container}>
        {showEditPanel && (
          <div className={styles.editItemBG}>
            <EditItemPanel
              setShowEditPanel={setShowEditPanel}
              data={data}
              titleInfo={titleInfo}
              category={category}
              collection={collection}
              fetchProduct={fetchProduct}
            />
          </div>
        )}

        {/* 1st row */}
        <Row>
          <Col>
            {" "}
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={"/products"}>Products</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/products/${category}`}>
                  {" "}
                  {writeUtils.formatCategoryName(category)}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {" "}
                {writeUtils.capitalizeFirstLetter(titleInfo.title)}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        {/* 2nd row */}
        <Row>
          {/* Big image */}
          <Col sm={12} md={7}>
            <div className={styles.imageContainer}>
              <ProductImageModal
                titleInfo={titleInfo}
                selectedOption={selectedOption}
                initialProductId={initialProductId}
              />
            </div>{" "}
          </Col>
          {/* Title,subTitle,RRP,stock */}
          <Col sm={12} md={5}>
            <div className={styles.infoContainer}>
              {/* Product title starts */}
              <div className={fonts.futuraTitle}>
                <h1>{writeUtils.capitalizeFirstLetter(titleInfo.title)}</h1>
              </div>
              <div className={styles.code}>Product Code: {titleInfo.code}</div>
              <div className={styles.rrp}>
                RRP:{" "}
                <h2>
                  $ <span id="rrp">{RRP ? RRP : `${data[0].rrp}`}</span>
                </h2>
              </div>

              {/* stock availability, 3 cases...and more */}
              <div id="stocknote" className={styles.stock}>
                {/* When there is only 1 product variant */}
                {!selectedOption && data.length > 1 ? (
                  " "
                ) : stock === "" ? (
                  data[0].stock >= 10 ? (
                    <span className={styles.inStock}>In Stock</span>
                  ) : data[0].stock < 10 && data[0].stock >= 1 ? (
                    <span className={styles.lowStock}>Low Stock</span>
                  ) : data[0].stock == 0 ? (
                    <span className={styles.noStock}>No Stock</span>
                  ) : (
                    "Please call us to check stock availability"
                  )
                ) : // When there are more product variant
                stock >= 10 ? (
                  <span className={styles.inStock}>In Stock</span>
                ) : stock < 10 && stock >= 1 ? (
                  <span className={styles.lowStock}>Low Stock</span>
                ) : stock == 0 ? (
                  <span className={styles.noStock}>No Stock</span>
                ) : (
                  "Please call us to check stock availability"
                )}
              </div>
              {/* Only show option field when variant quantity is more than 1 */}
              <div className={styles.option}>
                {data.length > 1 && (
                  <ProductOptions
                    setSelectedOption={setSelectedOption}
                    data={data}
                  />
                )}
                <div className={styles.buttonsGroups}>
                  {" "}
                  {user && user.isAdmin === "true" && (
                    <div>
                      {" "}
                      <Button
                        className="mt-5 me-5"
                        onClick={() => {
                          setShowEditPanel(!showEditPanel);
                        }}
                      >
                        {loading ? <Spinner /> : ""} Edit
                      </Button>
                      <Button
                        className="btn btn-danger mt-5 me-5"
                        onClick={handleDelete}
                      >
                        {loading ? <Spinner /> : ""} Delete
                      </Button>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* 3rd row */}

        <Row>
          <Col>
            <div className={styles.tabsContainer}>
              <ProductTabs titleInfo={titleInfo} />
            </div>{" "}
          </Col>
        </Row>
      </div>
      {/* Amateur way to avoid overlapping */}
      <div style={{ marginTop: "20px" }} />
      <Row>
        <Col>
          <div className={styles.relatedProductsContainer}>
            <span className={fonts.futuraTabText}>Related Products:</span>
            <div className={styles.border}>
              <RelatedProductsCarousel
                relatedProducts={relatedProducts}
                category={category}
                setLoading={setLoading}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
