import * as styles from "../../styles/components/Banner1.css";
import * as fonts from "../../styles/fonts/fonts.css";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButton from "./BannerButton";


function Banner1() {
  return (
    <>
      <div className={styles.bannerWrapper}>
        <Container>
          <Row>
            <Col md={6} sm={12} className="p-0">
              <div className={styles.left}>
                {" "}
                <h2 className={fonts.futuraTitle}>
                  {" "}
                  From a humble beginng at Longkou China
                </h2>
                <p className={`${fonts.normalText} mt-3`}>
                  Our cherished bathware craftsmanship finds a poetic home in
                  Australia, as Sylinn's legacy unfolds anew.
                </p>
                <div className="mt-3">
                  <Link to="/about">
                    <BannerButton>OUR STORY</BannerButton>
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={6} sm={12} className="p-0">
              <div className={styles.right}>
             
              </div>
            </Col>
          </Row>
        </Container>{" "}
      </div>
    </>
  );
}

export default Banner1;
