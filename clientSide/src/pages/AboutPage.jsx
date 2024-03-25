import { Container, Row, Col } from "react-bootstrap";
import * as styles from "../styles/page/AboutPage.css";
import * as fonts from "../../src/styles/fonts/fonts.css";
import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>about us</title>
      </Helmet>
      <div className={styles.imageContainer}>
        <div className={styles.titleText}>SYLINN STORY</div>
      </div>
      <Container className="mt-5">
        <Row className=" py-3">
          <Col sm={12} md={6}>
            <div className={styles.contentImage}>
              {" "}
              <img src="/images/about_pic3.webp" />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={`${styles.contentText} ${fonts.normalText}`}>
              Since its entry into the Australian market in 2020, Sylinn, a
              renowned bathroom brand originating from a coastal region in
              China, has emerged as one of the leading brands in the Australian
              market. With a stellar reputation in the Chinese market, Sylinn
              has successfully brought its brand culture and product superiority
              to Australia. Rooted in Melbourne, Sylinn is committed to
              providing Australian consumers with affordable yet luxurious
              bathroom products, including shower enclosures, shower
              accessories, stainless steel kitchen sinks, bathtubs, LED bathroom
              mirrors, and more, catering to various preferences and needs.
            </div>
          </Col>
        </Row>
        <Row className=" py-1">
          <Col sm={12} md={6}>
            <div className={`${styles.contentText} ${fonts.normalText}`}>
              As a well-known bathroom brand from a coastal region in China,
              Sylinn has gained widespread recognition and trust for its unique
              design style and exquisite craftsmanship. With its expansion into
              the Australian market, Sylinn has established offices and
              showrooms in Melbourne, offering Australian consumers more
              convenient and high-quality services. Whether it's modern
              simplicity or classic luxury, Sylinn meets the diverse needs of
              consumers for bathroom products, creating comfortable, stylish,
              and practical home spaces.
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.contentImage}>
              {" "}
              <img src="/images/about_pic2.jpg" />
            </div>
          </Col>
        </Row>
        <Row className=" py-1">
          <Col sm={12} md={6} className="py-1">
            <div className={styles.contentImage}>
              {" "}
              <img src="/images/shutterstock.jpg" />
            </div>
          </Col>
          <Col sm={12} md={6} className="py-1">
            <div className={`${styles.contentText} ${fonts.normalText}`}>
              {" "}
              Sylinn's bathroom products not only emphasize aesthetics and
              quality but also pursue technological innovation and environmental
              consciousness. Through continuous research and development,
              Sylinn's products have reached international standards in
              performance and functionality, providing Australian consumers with
              smarter and more convenient bathroom experiences. Furthermore,
              Sylinn adheres to the principles of sustainable development,
              striving to promote the development of green and environmentally
              friendly industries, and contributing to the creation of a better
              home life. Sylinn brings you a new choice of comfortable, stylish,
              and eco-friendly bathroom products.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
