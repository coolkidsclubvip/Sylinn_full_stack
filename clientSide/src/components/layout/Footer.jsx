import * as styles from "./Footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Logo_sylinn_text from "../../assets/images/Logo-sylinn-text-height30px.png";
import fb_icon from "../../assets/images/fb_icon.png";
import youtube_icon from "../../assets/images/youtube_icon.png";
import instagram_icon from "../../assets/images/instagram_icon.png";
import pinterest_logo_icon from "../../assets/images/pinterest logo_icon.png";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Container fluid>
          <Row>
            <Col md={4} className={styles.footerNavText}>
              <Nav.Link href="">
                <span className={styles.footerNavTextHover}>Warranty</span>
              </Nav.Link>{" "}
              |{" "}
              <Nav.Link href="">
                <span className={styles.footerNavTextHover}>Privacy</span>
              </Nav.Link>{" "}
              |{" "}
              <Nav.Link href="">
                {" "}
                <span className={styles.footerNavTextHover}>Disclaimer</span>
              </Nav.Link>
            </Col>
            <Col md={4}>
              <div className={styles.footerSyLogo}>
                <img src={Logo_sylinn_text} height="30px" alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.smLogos}>
                <a href="">
                  <img
                    src={fb_icon}
                    height="30px"
                    alt="facebook"
                    className={styles.smLogosHover}
                  />
                </a>

                <a href="">
                  <img
                    src={youtube_icon}
                    height="30px"
                    alt="youtube"
                    className={styles.smLogosHover}
                  />
                </a>
                <a href="">
                  <img
                    src={instagram_icon}
                    height="30px"
                    alt="instagram"
                    className={styles.smLogosHover}
                  />
                </a>
                <a href="">
                  <img
                    src={pinterest_logo_icon}
                    height="30px"
                    alt="pinterest"
                    className={styles.smLogosHover}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <div className={styles.copyrightText}>
              <span>© 2023 Sylinn Australia</span>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
