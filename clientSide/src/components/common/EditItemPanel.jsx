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

function EditItemPanel({
  setShowEditPanel,
  titleInfo,
  data,
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
  console.log("即时的productData is: ", productData);
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
  const removeFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
    // Set input in form to " "
    const fileInputs = document.getElementsByName("downloadUrls");
    if (fileInputs[index]) {
      fileInputs[index].value = "";
    }
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
    console.log("deletedImage is:", deletedImage);
    deletedImage.src = NAImage;
    // Get the button and disable it
    const deletedBtn = document.getElementById("btn" + `${url}`);
    console.log("deletedBtn is:", deletedBtn);
    deletedBtn.disabled = true;
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
      toast.success(`${productData.title} has been udpated successfully`);
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
        <h1> Edit Product Panel </h1>
        <button
          type="button"
          onClick={() => {
            setShowEditPanel(false);
          }}
        >
          X
        </button>
        <SyCard title="Edit Product">
          <span>
            You are enditing <b> xxxx</b>
          </span>
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

            <Row>
              {titleInfo.urls.map((url, index) => (
                <Col key={index}>
                  <div className="mt-5 mb-5">
                    <img src={url} id={url} />
                    <button
                      id={"btn" + `${url}`}
                      type="button"
                      onClick={(e) => {
                        handleImageDelete(e, url);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Col>
              ))}
            </Row>

            {/* GROUP  : IMAGE UPLOAD & PDF FILE UPLOAD */}

            <Row>
              <Col lg={6} md={6} sm={12}>
                {imageFields.map((field, index) => (
                  <Form.Group key={index} className="mb-3">
                    <Form.Label>Add Image</Form.Label>
                    <Form.Control
                      type="file"
                      className="mb-4"
                      name="urls"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </Form.Group>
                ))}
                <button type="button" onClick={addImageField}>
                  Add Image Upload
                </button>
              </Col>
              <Col lg={6} md={6} sm={12}>
                {fileFields.map((field, index) => (
                  <div key={index}>
                    {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>File Upload</Form.Label>
                      <Form.Control
                        type="file"
                        className="mb-4"
                        name="downloadUrls"
                        onChange={(e) => handleFileChange(e)}
                      />
                      <button type="button" onClick={() => removeFile(index)}>
                        Remove
                      </button>
                    </Form.Group>
                  </div>
                ))}
                <button type="button" onClick={addFileField}>
                  Add File Upload
                </button>
              </Col>
            </Row>

            {/* GROUP 7: onSale */}
            <Row>
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
                        disabled={true}
                        placeholder={`${products[index].id}`}
                        // name={`products[${index}].id`}
                        // value={product.id}
                        // onChange={(e) =>
                        //   handleProductTextChange(e, index, "id")
                        // }
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
              </div>
            ))}
            <Form.Group className="mb-3">
              <button type="button" onClick={addProduct}>
                Add Another Product(Variant)
              </button>
            </Form.Group>
            <SyButton loading={loading}>
              {loading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Submit"
              )}
            </SyButton>
          </Form>
        </SyCard>
      </div>
    </Container>
  );
}

export default EditItemPanel;
