import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import * as styles from "../../styles/components/EditItemPanel.css";
import SyCard from "./SyCard";
import SyButton from "./SyButton";
import productService from "../../services/productService";
import { toast } from "react-toastify";
import NAImage from "../../../src/assets/images/no_image_available.jpeg";
import pdfIcon from "../../../src/assets/images/pdfIcon.png";
import readUtils from "../../utils/readUtils";
import { RiDeleteBinLine } from "react-icons/ri";

function EditItemPanel({
  setShowEditPanel,
  titleInfo,
  data,//data are products(variant)
  category,
  collection,
  fetchProduct,
}) {
  console.log("  title info in EditItemPanel are:", titleInfo);
  console.log("data in EditItemPanel are:", data);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productData, setProductData] = useState({
    category: category,
    newCollection: `${collection}`,
    code: `${titleInfo.code}`,
    description: `${titleInfo.description}`,
    urls: [],
    downloadUrls: [],
    onSale: `${titleInfo.onSale}`,
    title: `${titleInfo.title}`,

    products: data.map((product) => ({
      id: `${product.id}`,
      name: `${product.name}`,
      rrp: `${product.rrp}`,
      stock: `${product.stock}`,
    })),
  });
  // const [imageDeleted,setImageDeleted]=useState(false);

  // Destructure data state nested object properties
  const {
    newCollection,
    code,
    description,
    // urls,
    // downloadUrls,
    onSale,
    title,
    products,
  } = productData;

  // A state to receive uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  // A state to receive upload non-image files (pdf)
  const [uploadedFiles, setUploadedFiles] = useState([]);

  //////////////////////////////////////
  // Image Upload field(add more images)
  const [imageFields, setImageFields] = useState([{ value: null }]);
  // File Upload field(add more files)
  const [fileFields, setFileFields] = useState([{ value: null }]);

  // Add one more image upload field
  const addImageField = () => {
    const newField = { value: null };
    setImageFields([...imageFields, newField]);
  };
  // Add one more file upload field
  const addFileField = () => {
    const newField = { value: null };
    setFileFields([...fileFields, newField]);
  };
  //////////////////////////////////////

  // Form event handlers:
  // [1] handleTextChange will handle change in state value event for TEXT data
  // NOTE: To update state object, we create shallow copy & mutate properties according to input field changed
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // handle text input change
  const handleProductTextChange = (e, index, field) => {
    const { value } = e.target;
    const updatedProducts = [...products]; // make a shallow copy of products
    updatedProducts[index][field] = value; // add new value to each product in array

    setProductData({ ...productData, products: updatedProducts }); // add new products array to productData
  };

  // [2.1] handleImageChange will handle change in state for IMAGE data
  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    // console.log("image file is:", file);
    const files = e.target.files;
    const newUploadedImages = Array.from(files);
    const updatedImages = [...uploadedImages, ...newUploadedImages];
    setUploadedImages(updatedImages);
    setProductData({ ...productData, urls: updatedImages });
  };
  // [2.2] handleFileChange will handle change in state for FILE data
  const handleFileChange = (e) => {
    // const file = e.target.files[0];
    // console.log("pdf file is:", file);
    const files = e.target.files;
    const newUploadedFiles = Array.from(files);
    const updatedFiles = [...uploadedFiles, ...newUploadedFiles];
    setUploadedFiles(updatedFiles);
    setProductData({ ...productData, downloadUrls: updatedFiles });
  };
  //  Opens a new section to add one more variant
  const addProduct = () => {
    const newProducts = [...products, { id: "", name: "", rrp: 0, stock: 0 }]; // default values
    setProductData({ ...productData, products: newProducts });
  };

  // To delete files from to-be-deleted files list
  const removeUploadFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
    // Create a shallow copy of fileFields
    const updatedFileFields = [...fileFields];
    // Remove the fileField at the specified index
    updatedFileFields.splice(index, 1);
    // Update the state with the modified array
    setFileFields(updatedFileFields);
  };


    // To delete files from to-be-deleted files list
  const removeUploadImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
    // Create a shallow copy of fileFields
    const updatedImageFields = [...imageFields];
    // Remove the ImageField at the specified index
    updatedImageFields.splice(index, 1);
    // Update the state with the modified array
    setImageFields(updatedImageFields);
  };

  // Handle button click to DELETE EXISTING IMAGE
  const handleImageDelete = async (e, url) => {
    e.preventDefault();
    const response = await productService.postImageUrl(
      url,
      category,
      collection
    );
    toast.success(response.data);
    // Replace image with default N/A image
    const deletedImage = document.getElementById(url);

    deletedImage.src = NAImage;
    // Get the button and disable it
    const deletedBtn = document.getElementById("btn" + `${url}`);

    deletedBtn.disabled = true;
  };
  // Handle button click to DELETE EXISTING FILE

  const handleFileDelete = async (e, url) => {
    e.preventDefault();
    const response = await productService.postFileUrl(
      url,
      category,
      collection
    );
    toast.success(response.data);
    // Replace image with default N/A image
    const deletedImage = document.getElementById(url);

    deletedImage.src = NAImage;
    // Get the button and disable it
    const deletedBtn = document.getElementById("btn" + `${url}`);

    deletedBtn.disabled = true;
  };

  // Run function to delete a product(variant) by its ID

  const handleDeleteProduct = async (e, id) => {
    e.preventDefault();
    console.log("id is", id);
    id; // 要删除的产品的ID
    const filteredProducts = data.filter(
      (product) => product.id !== id
    );
    console.log("filteredProducts are:", filteredProducts);
    // setProductsData(filteredProducts);

    // Update the whole productData with updated productsData
    setProductData({ ...productData, products: filteredProducts });
  };

  // Run function when SUBMIT is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // API request
    try {
      const response = await productService.put(productData);
      //   console.log("response is:", response);
      //   toast.success(`${productData.title} has been created successfully`);
      //   // setLoading(false);
      //    // get refreshed Itemdetailpage
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      // Re-fetch data for parent page--Product detail page
      fetchProduct();

      // Close edit panel
      setShowEditPanel(false);
      toast.success(`${productData.title} has been updated successfully`);
      // Clear localStorage cache for the current category
      localStorage.removeItem(`categoryData_${category}`);
    } catch (err) {
      //   console.log("Error: " + err);
      //   toast.error(`${err}`);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  if (error) {
    return (
      <Container>
        <Spinner animation="border" variant="primary" size="lg">
          Loading
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <div className={`${styles.container} shadow`}>
        <h1>
          {" "}
          Editing <b> {titleInfo.title}</b>{" "}
        </h1>

        <SyCard title="Edit Product" className={styles.card}>
          <button
            type="button"
            onClick={() => {
              setShowEditPanel(false);
            }}
            className={`btn btn-warning shadow ${styles.closeBtn}`}
          >
            <b>X</b>
          </button>

          <Form onSubmit={handleSubmit}>
            {/* GROUP 1 New Collection */}
            <Form.Group className="mb-3 mt-3">
              <Form.Label> Collection</Form.Label>
              <Form.Control
                // type="text"
                disabled={true}
                placeholder={`${newCollection}`}
                // name="newCollection"
                // value={newCollection}
                // onChange={handleTextChange}
              />
            </Form.Group>
            {/*GROUP 2 Product Code */}
            <Form.Group className="mb-3">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product code"
                name="code"
                value={code}
                onChange={handleTextChange}
              />
            </Form.Group>
            {/*GROUP 3 Product Description */}
            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={10}
                placeholder="Enter product description"
                name="description"
                value={description}
                onChange={handleTextChange}
              />
            </Form.Group>
            {/* GROUP 4 Product Title */}
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                name="title"
                value={title}
                onChange={handleTextChange}
              />
            </Form.Group>
            {/* Display existing images */}
            <Row>
              {titleInfo.urls.map((url, index) => (
                <Col key={index}>
                  <div className="mt-5 mb-5">
                    <img
                      src={url}
                      id={url}
                      style={{
                        // minWidth: "25%",
                        // maxWidth: "50%",
                        height: "5rem",
                        overflow: "hidden",
                        margin: "1rem auto",
                      }}
                    />
                    <button
                      id={"btn" + `${url}`}
                      className="btn btn-danger btn-sm"
                      type="button"
                      onClick={(e) => {
                        handleImageDelete(e, url);
                      }}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </Col>
              ))}
            </Row>

            {/* GROUP  : IMAGE UPLOAD & PDF FILE UPLOAD */}

            <Row>
              <Col lg={6} md={6} sm={12}>
                {imageFields.map((field, index) => (
                  <Row key={index} className="mb-3">
                    <Col md={10}>
                      {" "}
                      <Form.Group>
                        <Form.Label>Image Upload</Form.Label>
                        <Form.Control
                          type="file"
                          className="mb-4"
                          name="urls"
                          onChange={(e) => handleImageChange(e)}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={2}>
                      {" "}
                      {imageFields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeUploadImage(index)}
                          className="btn btn-warning btn-sm mt-5"
                        >
                          <RiDeleteBinLine />
                        </button>
                      )}
                    </Col>
                  </Row>
                ))}

                <button
                  type="button"
                  onClick={addImageField}
                  className="btn btn-primary"
                >
                  Add More Image
                </button>
              </Col>

              {/* Display existing files */}
              <Row>
                {titleInfo.downloadUrls?.map((url, index) => (
                  <Col key={index}>
                    <div className="mt-5 mb-5">
                      <img
                        src={pdfIcon}
                        id={url}
                        style={{
                          height: "5rem",
                          overflow: "hidden",
                          margin: "1rem auto",
                        }}
                      />
                      <span>{readUtils.getFileFromUrl(url)}</span>
                      <button
                        id={"btn" + `${url}`}
                        type="button"
                        className="btn btn-danger btn-sm ms-3"
                        onClick={(e) => {
                          handleFileDelete(e, url);
                        }}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </Col>
                ))}
              </Row>

              <Col lg={6} md={6} sm={12}>
                {fileFields.map((field, index) => (
                  <Row key={index} className="mb-1">
                    <Col md={10}>
                      <Form.Group>
                        <Form.Label>File Upload</Form.Label>
                        <Form.Control
                          type="file"
                          className="mb-4"
                          name="downloadUrls"
                          onChange={(e) => handleFileChange(e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <button
                          type="button"
                          onClick={() => removeUploadFile(index)}
                          className="btn btn-warning btn-sm mt-5"
                        >
                          <RiDeleteBinLine />
                        </button>
                      </Form.Group>
                    </Col>
                  </Row>
                ))}
                <button
                  type="button"
                  onClick={addFileField}
                  className="btn btn-primary"
                >
                  Add More File
                </button>
              </Col>
            </Row>

            {/* GROUP 7: onSale */}
            <Row className="mt-5">
              <Col lg={6} md={6} sm={12}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Product sale status</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Standard"
                    name="onSale"
                    value="false"
                    checked={onSale === "false"}
                    onChange={handleTextChange}
                  />
                  <Form.Check
                    type="radio"
                    label="On Sale"
                    name="onSale"
                    value="true"
                    checked={onSale === "true"}
                    onChange={handleTextChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/***********  GROUP 8: Product Details  *************/}
            {products.map((product, index) => (
              <div key={index}>
                <hr style={{ color: "red" }} />
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Product ID</Form.Label>
                      <Form.Control
                        // type="text"
                        disabled={false}
                        placeholder={`${products[index].id}`}
                        name={`products[${index}].id`}
                        value={product.id}
                        onChange={(e) =>
                          handleProductTextChange(e, index, "id")
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter variant name"
                        name={`products[${index}].name`}
                        value={product.name}
                        onChange={(e) =>
                          handleProductTextChange(e, index, "name")
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Product Price</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id={`price-dollar-${index}`}>
                          $
                        </InputGroup.Text>
                        <Form.Control
                          type="number"
                          aria-describedby={`price-dollar-${index}`}
                          placeholder="0"
                          name={`products[${index}].rrp`}
                          value={product.rrp}
                          onChange={(e) =>
                            handleProductTextChange(e, index, "rrp")
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Product Stock</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        name={`products[${index}].stock`}
                        value={product.stock}
                        onChange={(e) =>
                          handleProductTextChange(e, index, "stock")
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {products.length > 1 && (
                  <button
                    onClick={(e) => {
                      handleDeleteProduct(e, `${products[index].id}`);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    <RiDeleteBinLine />
                  </button>
                )}
              </div>
            ))}
            <Form.Group className="mb-3">
              <button
                type="button"
                onClick={addProduct}
                className="btn btn-primary mt-3"
              >
                Add Another Product(Variant)
              </button>
            </Form.Group>
            <button className="btn btn-success mt-5  ">
              {loading ? (
                <>
                  <Spinner size="sm" /> Submit
                </>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </SyCard>
      </div>
    </Container>
  );
}

export default EditItemPanel;
