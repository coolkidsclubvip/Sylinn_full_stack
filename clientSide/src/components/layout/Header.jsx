import  { useState } from "react";
import * as styles from "./Header.css";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import Logo_sylinn_png from "../../assets/images/Logo-sylinn-png.png";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container fluid>
      <div className={styles.header}>
        {/* Nav bar upper layer */}
        <Row>
          <Col sm={6}>
            <Navbar.Brand href="#home">
              <img src={Logo_sylinn_png} alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col sm={6} className="d-flex justify-content-end align-items-center">
            Login | Sign Up | Cart
          </Col>
        </Row>
        {/* Nav bar bottom layer */}
        <Row>
          <Col>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav bg-dark" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <div className={styles.dropdown}>
                    <Nav.Link
                      onMouseOver={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      path="/clientSide/src/pages/products.jsx"
                    >
                      <span className={styles.navText}>
                        Products {isHovered ? "∆" : "∇"}
                      </span>
                    </Nav.Link>

                    {isHovered && (
                      <div
                        className={styles.dropdownContent}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <Nav.Link
                          className={`${styles.dropdownContentLink} ${styles.dropdownTextHover} `}
                          href="bath_tubs.html"
                        >
                          <div className={styles.dropdownTextHover}>
                            Bathtubs
                          </div>
                        </Nav.Link>
                        <Nav.Link
                          className={styles.dropdownContentLink}
                          href="towel_rails.html"
                        >
                          <div className={styles.dropdownTextHover}>
                            Heated Rails
                          </div>
                        </Nav.Link>
                        <Nav.Link
                          className={styles.dropdownContentLink}
                          href="accessories.html"
                        >
                          <div className={styles.dropdownTextHover}>
                            Accessories
                          </div>
                        </Nav.Link>
                        <Nav.Link
                          className={styles.dropdownContentLink}
                          href="shower_grate.html"
                        >
                          <div className={styles.dropdownTextHover}>
                            Shower Grate
                          </div>
                        </Nav.Link>
                        <Nav.Link
                          className={styles.dropdownContentLink}
                          href="shower_screen.html"
                        >
                          <div className={styles.dropdownTextHover}>
                            Shower Fitting
                          </div>
                        </Nav.Link>
                      </div>
                    )}
                  </div>
                  <Nav.Link className={styles.navbtn} href="about.html">
                    <span className={styles.navText}>About&nbsp;&nbsp;</span>
                  </Nav.Link>
                  <Nav.Link className={styles.navbtn} href="gallery.html">
                    <span className={styles.navText}>Gallery&nbsp;&nbsp;</span>
                  </Nav.Link>
                  <Nav.Link className={styles.navbtn} href="contact.html">
                    <span className={styles.navText}>Contact&nbsp;&nbsp;</span>
                  </Nav.Link>
                  <Nav.Link className={styles.navbtn} href="retailers_map.html">
                    <span className={styles.navText}>
                      Retailers&nbsp;&nbsp;
                    </span>
                  </Nav.Link>
                </Nav>
                <div className={styles.headerWrapper}>
                  <Form className={styles.searchContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      placeholder="test"
                    />
                    <a href="#">
                      <img
                        className={styles.searchIcon}
                        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                      />
                    </a>
                  </Form>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Header;

