import * as styles from "../../styles/components/ProductsGrid.css";
import { Container  } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsGrid() {
  return (
    <>
    
      <Container>
        <div className={styles.gridWrapper}>
          {/* <!-- Photo Grid --> */}

          <div className={styles.row}>
            <div className={styles.column}>
              <Link to="/products/htr" style={{ textDecoration: "none" }}>
              
                <div className={`${styles.div1} ${styles.gridText}`}>
                  <span>HEATED TOWEL RACK</span>
                </div>
              </Link>
            </div>
            <div className={styles.column}>
              <Link to="/products/acc" style={{ textDecoration: "none" }}>
                <div className={`${styles.div2} ${styles.gridText}`}>
                
                  <span>ACCESSORY</span>
                </div>
              </Link>
              <Link to="/products/bath" style={{ textDecoration: "none" }}>
                <div className={`${styles.div3} ${styles.gridText}`}>
                  <span>BATH TUB</span>
                </div>
              </Link>
              <Link to="/products/grate" style={{ textDecoration: "none" }}>
                <div className={`${styles.div4} ${styles.gridText}`}>
                  <span>FLOOR GRATE</span>
                </div>
              </Link>
            </div>
            <div className={styles.column}>
              <Link to="/products/led" style={{ textDecoration: "none" }}>
                <div className={`${styles.div5} ${styles.gridText}`}>
                  <span>LED MIRROR</span>
                </div>
              </Link>
              <Link to="/products/sink" style={{ textDecoration: "none" }}>
                <div className={`${styles.div6} ${styles.gridText}`}>
                  <span>KITCHEN SINK</span>
                </div>
              </Link>
            </div>
          </div>
        </div>{" "}
      </Container>
    </>
  );
}

export default ProductsGrid;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import * as styles from "../../styles/components/ProductsGrid.css";

// function ProductsGrid() {
//   return (
//     <div className={styles.gridContainer}>
//       <Container>
//         <Row >
//           {/* For medium-sized screens and below, display two columns per row */}
//           <Col xs={12} sm={6} md={6} lg={4}>
//             <Link to="/products/htr" style={{ textDecoration: "none" }}>
//               <div className={`${styles.div1} ${styles.gridText}`}>
//                 <span>HEATED TOWEL RACK</span>
//               </div>
//             </Link>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={4} >
//             <Link to="/products/acc" style={{ textDecoration: "none" }}>
//               <div className={`${styles.div2} ${styles.gridText}`}>
//                 <span>ACCESSORY</span>
//               </div>
//             </Link>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={4}>
//             <Link to="/products/bath" style={{ textDecoration: "none" }}>
//               <div className={`${styles.div3} ${styles.gridText}`}>
//                 <span>BATH TUB</span>
//               </div>
//             </Link>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={4}>
//             <Link to="/products/grate" style={{ textDecoration: "none" }}>
//               <div className={`${styles.div4} ${styles.gridText}`}>
//                 <span>FLOOR GRATE</span>
//               </div>
//             </Link>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={4}>
//             <Link to="/products/led" style={{ textDecoration: "none" }}>
//               <div className={`${styles.div5} ${styles.gridText}`}>
//                 <span>LED MIRROR</span>
//               </div>
//             </Link>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={4}>
//             <Link to="/products/sink" style={{ textDecoration: "none" }}>
//               <div className={`${styles.div6} ${styles.gridText}`}>
//                 <span>KITCHEN SINK</span>
//               </div>
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ProductsGrid;
