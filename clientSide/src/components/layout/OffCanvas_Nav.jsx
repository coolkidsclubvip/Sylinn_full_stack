import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import * as styles from "../../styles/layout/OffCanvas.css_Nav.css";
import * as fonts from "../../styles/fonts/fonts.css";

function OffCanvas_Nav({ showOffcanvas, setShowOffcanvas }) {
  const offCanvasWidth = "280px";
  const paddingTop = "10vh";
  return (
    <>
      <div className={styles.offcanvas}>
        <div
          className={`${showOffcanvas ? "show" : ""} offcanvas offcanvas-start`} //class is controlled by props boolean
          style={{ width: offCanvasWidth, paddingTop: paddingTop }}
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-body d-flex flex-column mt-5 py-5 px-5">
            <Nav.Link className={styles.navbtn}>
              <Link to={"/"}>
                <span className={fonts.futuraNav}>Home</span>
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.navbtn}>
              <Link to={"/products"}>
                <span className={fonts.futuraNav}>Products</span>
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.navbtn}>
              <Link to={"/about"}>
                <span className={fonts.futuraNav}>About</span>
              </Link>
            </Nav.Link>
            {/* <Nav.Link className={styles.navbtn} href="/gallery">
              <span className={fonts.futuraNav}>Gallery&nbsp;&nbsp;</span>
            </Nav.Link> */}
            <Nav.Link className={styles.navbtn}>
              <Link to={"/contact"}>
                <span className={fonts.futuraNav}>Contact</span>
              </Link>
            </Nav.Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default OffCanvas_Nav;
