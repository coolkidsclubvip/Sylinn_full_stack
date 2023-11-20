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
       

            <Nav.Link className={styles.navbtn} href="/">
              <span className={fonts.futuraNav}>Home&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link className={styles.navbtn} href="/products">
              <span className={fonts.futuraNav}>Products&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link className={styles.navbtn} href="/about">
              <span className={fonts.futuraNav}>About&nbsp;&nbsp;</span>
            </Nav.Link>
            {/* <Nav.Link className={styles.navbtn} href="/gallery">
              <span className={fonts.futuraNav}>Gallery&nbsp;&nbsp;</span>
            </Nav.Link> */}
            <Nav.Link className={styles.navbtn} href="/contact">
              <span className={fonts.futuraNav}>Contact&nbsp;&nbsp;</span>
            </Nav.Link>
            {/* <Nav.Link className={styles.navbtn} href="/retailers_map">
              <span className={fonts.futuraNav}>Retailers&nbsp;&nbsp;</span>
            </Nav.Link> */}
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default OffCanvas_Nav;
