import * as styles from "../../styles/components/ProductsGrid.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsGrid() {
  return (
    <>
      {" "}
      <Container>
        <div className={styles.gridWrapper}>
          {/* <!-- Photo Grid --> */}

          <div className={styles.row}>
            <div className={styles.column}>
              <Link to="/htr" style={{ textDecoration: "none" }}>
                {" "}
                <div className={`${styles.div1} ${styles.gridText}`}>
                  <span>HEATED TOWEL RACK</span>
                </div>
              </Link>
            </div>
            <div className={styles.column}>
              <Link to="/htr" style={{ textDecoration: "none" }}>
                <div className={`${styles.div2} ${styles.gridText}`}>
                  {" "}
                  <span>ACCESSORY</span>
                </div>
              </Link>
              <Link to="/products/bath" style={{ textDecoration: "none" }}>
                <div className={`${styles.div3} ${styles.gridText}`}>
                  <span>BATH TUB</span>
                </div>
              </Link>
              <Link to="/htr" style={{ textDecoration: "none" }}>
                <div className={`${styles.div4} ${styles.gridText}`}>
                  <span>FLOOR GRATE</span>
                </div>
              </Link>
            </div>
            <div className={styles.column}>
              <Link to="/htr" style={{ textDecoration: "none" }}>
                <div className={`${styles.div5} ${styles.gridText}`}>
                  <span>LED MIRROR</span>
                </div>
              </Link>
              <Link to="/htr" style={{ textDecoration: "none" }}>
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
