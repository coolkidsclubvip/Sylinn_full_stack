import { Container, Row, Col } from "react-bootstrap";
import * as styles from "../styles/page/ContactPage.css";
import * as fonts from "../../src/styles/fonts/fonts.css";
import clock from "/images/clock.png";
import email from "/images/email.png";
import phone from "/images/phone.png";
import whouse from "/images/whouse.png";

function ContactPage() {
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.titleText}>CONTACT US</div>
      </div>
      <Container className="mt-5">
        <Row className=" py-3">
          <Col sm={12} md={6}>
            <img src={email} alt="email" className={styles.image} />

            <span className={`${styles.contentText} ${fonts.normalText}`}>
              <b>General Enquiry:</b> info.sylinn@gmail.com.au
            </span>
          </Col>
        </Row>
        <Row className=" py-3">
          <Col sm={12} md={6}>
            <img src={email} alt="email" className={styles.image} />

            <span className={`${styles.contentText} ${fonts.normalText}`}>
              <b>Warranty Claim:</b> warranty.sylinn@gmail.com.au
            </span>
          </Col>
        </Row>
        <Row className=" py-3">
          <Col sm={12} md={6}>
            <img src={phone} alt="phone" className={styles.image} />

            <span className={`${styles.contentText} ${fonts.normalText}`}>
              <b>Phone:</b> (03)97066618
            </span>
          </Col>
        </Row>
        <Row className=" py-3">
          <Col sm={12} md={6}>
            <img src={clock} alt="clock" className={styles.image} />

            <span className={`${styles.contentText} ${fonts.normalText}`}>
              <b>Hours of Business:</b> 9am – 5pm / Monday – Friday Closed on
              Public Holidays
            </span>
          </Col>
        </Row>
        <Row className=" py-3">
          <Col sm={12} md={6} className="w-100">
            <img src={whouse} alt="warehouse" className={styles.image} />

            <span className={`${styles.contentText} ${fonts.normalText}`}>
              <b>Address:</b> We are located in Dandenong Sth Victoria, our
              warehouse is NOT open to public.
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;
