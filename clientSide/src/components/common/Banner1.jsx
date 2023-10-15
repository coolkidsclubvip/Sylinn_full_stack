import * as styles from "../../styles/components/Banner1.css";
import * as fonts from "../../styles/fonts/fonts.css";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButton from "./BannerButton";

function Banner1() {
  return (
    <>
      {" "}
      <Container>
        <div className={styles.bannerWrapper}>
          <Col md={6} sm={12} className={styles.left}>
            <h2 className={fonts.futuraTitle}>
              {" "}
              From a humble beginng at Longkou China
            </h2>
            <p className={fonts.normalText}>
              Our cherished bathware craftsmanship finds a poetic home in
              Australia, as Sylinn's legacy unfolds anew.
            </p>
            <Link to="/about">
              <BannerButton>OUR STORY</BannerButton>
            </Link>
          </Col>
          <Col md={6} sm={12} className={styles.right}></Col>
        </div>
      </Container>
    </>
  );
}

export default Banner1;
