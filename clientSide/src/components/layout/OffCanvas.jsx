import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import * as styles from "../../styles/components/OffCanvas.css";
import * as fonts from "../../styles/fonts/fonts.css";
import SearchBar from "../common/SearchBar";

function OffCanvas({ showOffcanvas, setShowOffcanvas }) {
  const offCanvasWidth = "15vw";
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
          <div className="offcanvas-body d-flex flex-column mt-5 py-0 ">
            <SearchBar />

            <Nav.Link className={styles.navbtn} href="about.html">
              <span className={fonts.futuraNav}>About&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link className={styles.navbtn} href="gallery.html">
              <span className={fonts.futuraNav}>Gallery&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link className={styles.navbtn} href="contact.html">
              <span className={fonts.futuraNav}>Contact&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link className={styles.navbtn} href="retailers_map.html">
              <span className={fonts.futuraNav}>Retailers&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link className={styles.navbtn} href="retailers_map.html">
              <span className={fonts.futuraNav}>Products&nbsp;&nbsp;</span>
            </Nav.Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default OffCanvas;
