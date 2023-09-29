import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as styles from "./Header.css";
import * as fonts from "../../styles/fonts/fonts.css";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import Logo_sylinn_png from "../../assets/images/Logo-sylinn-png.png";
import Logo_sylinn_small from "../../assets/images/Logo-sylinn-small.png";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  // useAuth, our own custom hook to to call useContext remotely.
  const { user, logout } = useAuth();

  //a global scroll parameter and handleScroll function
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // get window scroll position
      setScrollTop(scrollTop);
    };

    // add scroll listener to window object
    window.addEventListener("scroll", handleScroll);

    // dismount listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("scrollTop is:", scrollTop);

  return (
    <Container fluid>
      <div className={styles.headerWrapper}>
        <div
          className={` ${scrollTop > 150 ? styles.smallHeader : styles.header}`}
        >
          {/* {styles.smallHeader&& <div className={styles.headerBG}></div>} */}
          {/* Nav bar upper layer */}
          <Row>
            <Col sm={6}>
              <Navbar.Brand href="#home">
                <Link to={"/"}>
                  {" "}
                  <img
                    src={`${
                      scrollTop > 150 ? Logo_sylinn_small : Logo_sylinn_png
                    }`}
                    style={{ transition: "all 1s ease-in-out" }}
                    alt="Logo"
                  />
                </Link>
              </Navbar.Brand>
            </Col>

            <Col
              sm={6}
              className="d-flex justify-content-end align-items-center"
            >
              {!user && <Link to={"/login"}>Login &nbsp; |</Link>}
              {!user && <Link to={"/register"}>&nbsp;Sign Up &nbsp;</Link>}
              {user && <Link to={"/dashboard"}>Dashboard&nbsp;</Link>}
              {user && (
                <button
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </button>
              )}
              <Link>&nbsp;Cart</Link>
            </Col>
          </Row>
          {/* Nav bar bottom layer */}
          <div className={styles.secondRow}>
            <Row>
              <Col>
                <Navbar expand="lg " sticky="top">
                  <Navbar.Toggle aria-controls="basic-navbar-nav bg-dark" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <div className={styles.dropdown}>
                        <Nav.Link
                          onMouseOver={() => setIsHovered(true)}
                          // onMouseLeave={() => setIsHovered(false)}
                          path="/clientSide/src/pages/products.jsx"
                        >
                          <span className={fonts.futuraNav}>
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
                                {" "}
                                Sink{" "}
                              </div>
                            </Nav.Link>
                            <Nav.Link
                              className={styles.dropdownContentLink}
                              href="shower_screen.html"
                            >
                              <div className={styles.dropdownTextHover}>
                                Shower Grate
                              </div>
                            </Nav.Link>
                          </div>
                        )}
                      </div>
                      <Nav.Link className={styles.navbtn} href="about.html">
                        <span className={fonts.futuraNav}>
                          About&nbsp;&nbsp;
                        </span>
                      </Nav.Link>
                      <Nav.Link className={styles.navbtn} href="gallery.html">
                        <span className={fonts.futuraNav}>
                          Gallery&nbsp;&nbsp;
                        </span>
                      </Nav.Link>
                      <Nav.Link className={styles.navbtn} href="contact.html">
                        <span className={fonts.futuraNav}>
                          Contact&nbsp;&nbsp;
                        </span>
                      </Nav.Link>
                      <Nav.Link
                        className={styles.navbtn}
                        href="retailers_map.html"
                      >
                        <span className={fonts.futuraNav}>
                          Retailers&nbsp;&nbsp;
                        </span>
                      </Nav.Link>
                    </Nav>
                    <div className={styles.searchBarWrapper}>
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
        </div>
      </div>
    </Container>
  );
}

export default Header;
