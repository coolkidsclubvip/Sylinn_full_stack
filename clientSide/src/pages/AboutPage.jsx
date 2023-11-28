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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur aliquam delectus magnam temporibus voluptate quae
              numquam veritatis, ipsa consequuntur praesentium, modi harum
              inventore! Saepe vitae dolore harum earum porro iure. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Fugiat dicta velit
              officiis dolorum veritatis ratione facere rerum ipsum ex maiores
              fuga, reprehenderit provident eius dolor, doloremque quis
              accusamus nobis consectetur?
            </div>
          </Col>
        </Row>
        <Row className=" py-3">
          <Col sm={12} md={6}>
            <div className={`${styles.contentText} ${fonts.normalText}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus rerum esse, impedit, modi voluptates maxime possimus
              beatae inventore optio earum eius eligendi iusto voluptatibus
              mollitia sapiente veritatis facilis autem cumque! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Perspiciatis possimus
              repellendus omnis rerum. Maxime molestias facilis fugit autem
              nostrum aperiam mollitia voluptatibus consectetur numquam, nihil
              odit assumenda, sunt delectus animi.
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.contentImage}>
              {" "}
              <img src="/images/about_pic2.jpg" />
            </div>
          </Col>
        </Row>
        <Row className=" py-3">
          <Col sm={12} md={6} className="py-5">
            <div className={styles.contentImage}>
              {" "}
              <img src="/images/shutterstock.jpg" />
            </div>
          </Col>
          <Col sm={12} md={6} className="py-5">
            <div className={`${styles.contentText} ${fonts.normalText}`}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus rerum esse, impedit, modi voluptates maxime possimus
              beatae inventore optio earum eius eligendi iusto voluptatibus
              mollitia sapiente veritatis facilis autem cumque! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Perspiciatis possimus
              repellendus omnis rerum. Maxime molestias facilis fugit autem
              nostrum aperiam mollitia voluptatibus consectetur numquam, nihil
              odit assumenda, sunt delectus animi.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
