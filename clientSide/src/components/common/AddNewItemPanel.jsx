import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import * as styles from "../../styles/components/AddNewItemPanel.css";
import SyCard from "./SyCard";
import SyButton from "./SyButton";
import productService from "../../services/productService";
import { toast } from "react-toastify";
import writeUtils from "../../utils/writeUtils";
import { RiDeleteBinLine } from "react-icons/ri";

function AddNewItemPanel({ setShowAddNewPanel, category, fetchCollections }) {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    category: category,
    newCollection: "",
    code: "",
    description: "",
    urls: [],
    downloadUrls: [],
    onSale: false,
    title: "",
    // products: [{}],
    products: [{ id: "", name: "", rrp: 0, stock: 0 }],
  });

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

  // A state to receieve upload non-image files (pdf)
  const [uploadedFiles, setUploadedFiles] = useState([]);

  //////////////////////////////////////
  const [imageFields, setImageFields] = useState([{ value: null }]);
  const [fileFields, setFileFields] = useState([{ value: null }]);

  //
  const addImageField = () => {
    const newField = { value: null };
    setImageFields([...imageFields, newField]);
  };

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

  // To remove a File upload field and its corresponding fileField
  const removeUploadImage = (index) => {
    // Create a shallow copy of uploadedImages
    const updatedImages = [...uploadedImages];
    // Remove the file at the specified index
    updatedImages.splice(index, 1);
    // Update the state with the modified array
    setUploadedImages(updatedImages);
    // Create a shallow copy of fileFields
    const updatedImageFields = [...imageFields];
    // Remove the ImageField at the specified index
    updatedImageFields.splice(index, 1);
    // Update the state with the modified array
    setImageFields(updatedImageFields);
  };

  // To remove a File upload field and its corresponding fileField
  const removeUploadFile = (index) => {
    // Create a shallow copy of uploadedFiles
    const updatedFiles = [...uploadedFiles];
    // Remove the file at the specified index
    updatedFiles.splice(index, 1);
    // Update the state with the modified array
    setUploadedFiles(updatedFiles);
    // Create a shallow copy of fileFields
    const updatedFileFields = [...fileFields];
    // Remove the fileField at the specified index
    updatedFileFields.splice(index, 1);
    // Update the state with the modified array
    setFileFields(updatedFileFields);
  };

  // Run function when SUBMIT is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // API request
    try {
      console.log("productData sending to server is:", productData);
      const response = await productService.post(productData);
      console.log("response is:", response);
      toast.success(`${productData.title} has been created successfully`);
      // setLoading(false);
      await fetchCollections();
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      setShowAddNewPanel(false);
    } catch (err) {
      console.log("Error: " + err);
      toast.error(`${err}`);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };



  return (
    <Container>
      <div className={`${styles.container} `}>
        <h1>
          {" "}
          Adding a new product into{" "}
          <b>{writeUtils.formatCategoryName(`${category}`)}</b>
        </h1>

        <SyCard title="Add Product" className={styles.card}>
          <button
            type="button"
            onClick={() => {
              setShowAddNewPanel(false);
            }}
            className={`btn btn-warning shadow ${styles.closeBtn}`}
          >
            <b>X</b>
          </button>
          <Form onSubmit={handleSubmit}>
            {/* GROUP 1 New Collection */}
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Collection URL(Unique)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new collection name"
                name="newCollection"
                value={newCollection}
                onChange={handleTextChange}
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
                row={10}
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
            {/* GROUP 5 & 6: IMAGE UPLOAD & PDF FILE UPLOAD */}

            <Row>
              <Col lg={6} md={6} sm={12}>
                {imageFields.map((field, index) => (
                  <Row key={index} className="mb-1">
                    <Col md={2}>
                      {imageFields.length>1 && (
                        <button
                          type="button"
                          onClick={() => removeUploadImage(index)}
                          className="btn btn-warning btn-sm mt-5 "
                        >
                          <RiDeleteBinLine />
                        </button>
                      )}
                    </Col>
                    <Col md={10}>
                      <Form.Group>
                        <Form.Label>Product image</Form.Label>
                        <Form.Control
                          type="file"
                          className="mb-4"
                          name="urls"
                          onChange={(e) => handleImageChange(e)}
                        />
                      </Form.Group>
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

              <Col lg={6} md={6} sm={12}>
                {fileFields.map((field, index) => (
                  <Row key={index} className="mb-1">
                    <Col md={10}>
                      <Form.Group>
                        <Form.Label>File Upload (Optional)</Form.Label>
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
            <Row>
              <Col lg={6} md={6} sm={12}>
                {" "}
                <Form.Group className="mb-3 mt-5">
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
              <div key={index} className="mt-5">
                Options (minimum 1):
                <hr style={{ color: "blue", height: "2px", width: "100%" }} />
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Product ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter variant ID"
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
              </div>
            ))}
            <Form.Group className="mb-3">
              <button
                type="button"
                onClick={addProduct}
                className="btn btn-primary mt-3"
              >
                Add More Option(Variant)
              </button>
            </Form.Group>
            <button className="btn btn-success mt-5">
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
            </button>
          </Form>
        </SyCard>
      </div>
    </Container>
  );
}

export default AddNewItemPanel;
