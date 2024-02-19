import * as styles from "../../styles/components/ProductsGrid.css";
import { Container,Row,Col  } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css"

function ProductsGrid() {
  return (
    <>
      <Container>
        <div className={styles.gridWrapper}>
          <Row>
            <Col className="d-flex justify-content-end mb-3 " >
             
              <Link to={'/products'}><span className={`${fonts.futuraTabText} ${styles.underLine}`}  >  View All Products</span></Link>
            </Col>
          </Row>
          {/* <!-- Photo Grid --> */}
          <Row>
            <Col>
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
            </Col>
          </Row>
        </div>{" "}
      </Container>
    </>
  );
}

export default ProductsGrid;

 