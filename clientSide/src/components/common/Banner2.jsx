import * as styles from "../../styles/components/Banner2.css";
import * as fonts from "../../styles/fonts/fonts.css";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButton from "./BannerButton";

function Banner2() {
  return (
    <>
      {" "}
      <Container>
        <div className={styles.bannerWrapper}>
          {" "}
          <Col md={6} sm={12} className={styles.left}></Col>
          <Col md={6} sm={12} className={styles.right}>
            <h2 className={fonts.futuraTitle}> Stay In the Loop</h2>
            <p className={fonts.normalText}>
              Don't miss out! Sign up now to receive our regular newsletter and
              enjoy the added convenience of creating a wishlist for your
              favorite products.
            </p>{" "}
            <Link to="/register">
              <BannerButton>REGISTER</BannerButton>{" "}
            </Link>
          </Col>
        </div>
      </Container>
    </>
  );
}

export default Banner2;

