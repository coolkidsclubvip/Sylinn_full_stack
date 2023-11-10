// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import * as styles from "../styles/FelicityBathPage.css";
// import productService from "../services/productService";
// import Loader from "../components/common/Loader";
// import ProductImageModal from "../components/common/ProductImageModal";
// import ProductOptions from "../components/common/ProductOptions";
// import ProductTabs from "../components/common/ProductTabs";

// function FelicityBathPage() {
//   const [data, setData] = useState([]);
//   const [titleInfo, setTitleInfo] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(""); //setSelectedOption from ProductOptions component
//   const [RRP, setRRP] = useState(""); // set RRP to selected option
//   const [stock, setStock] = useState(""); // set stock to selected option

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//           //  const category = "bath";
//           //  const collection = "felicity";
//         const response = await productService.getProduct("bath", "felicity");
//         const responseData = response.data;
//         console.log("responseData: " ,responseData);
//         setData(responseData.docs);
//         setTitleInfo(responseData.titleInfo)
//         setLoading(false);
//       } catch (err) {
//         console.log(err?.response);
//         setError(true);
//         setLoading(false);
//       }
//     }

//     if (loading) {
//       fetchProducts();
//     }
//   }, [loading]);

//   // When option is selected, update the RRP and Stock accordingly
//   useEffect(() => {
//     // find the product with the selectedOption(id) passed in
//     if (selectedOption !== "") {
//       const selectedProduct = data.find(
//         (product) => product.id === selectedOption
//       );

//       if (selectedProduct) {
//         // Update rRP and Stock state
//         setRRP(selectedProduct.rrp);
//         setStock(selectedProduct.stock);
//       }
//     }
//   }, [selectedOption, data]);

//   if (error) {
//     return (
//       <Container className="text-center mt-4">
//         <p>Error page</p>
//       </Container>
//     );
//   }

//   if (loading) {
//     return (
//       <Container className="text-center mt-4">
//         <Loader />
//       </Container>
//     );
//   }

//   console.log("data is: ", data);
//   console.log("titleInfo is: ", titleInfo);
//   console.log("stock is:", stock);
//   return (
//     <Container>
//       <div className={styles.container}>
//         <h1>Felicity bath</h1>

//         {/* 1st row */}
//         <Row>
//           {/* Big image */}
//           <Col sm={12} md={7}>
//             <div className={styles.modalContainer}>
//               <ProductImageModal data={data} />
//             </div>{" "}
//           </Col>
//           {/* Title,subTitle,RRP,stock */}
//           <Col sm={12} md={5}>
//             <div className={styles.infoContainer}>
//               {/* Product title starts */}
//               <div className="productTitle">
//                 <h1>{titleInfo.title}</h1>
//                 <span className="pdtcode">Product Code: {titleInfo.code}</span>
//                 <br />
//                 <br />
//                 <br />
//                 <br />

//                 <h2>
//                   $<span id="rrp">{RRP ? RRP : `${data[0].rrp}`}</span>
//                 </h2>
//                 <br />
//                 <br />
//                 <br />
//                 {/* stock availability, 3 cases */}
//                 <div id="stocknote">
//                   {/* if stock is undefined, no show anything, otherwise show availability accordingly */}
//                   {stock >= 10 ? (
//                     <span className="instock">In Stock</span>
//                   ) : stock < 10 && stock > 1 ? (
//                     <span className="lowstock">Low Stock</span>
//                   ) : stock === 0 ? (
//                     <span className="nostock">No Stock</span>
//                   ) : (
//                     ""
//                   )}

//                   <ProductOptions
//                     setSelectedOption={setSelectedOption}
//                     data={data}
//                   />
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         {/* 2nd row */}

//         <Row>
//           <Col>
//             <div className={styles.descriptionContainer}>
//               <ProductTabs titleInfo={titleInfo} />
//             </div>{" "}
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default FelicityBathPage;
