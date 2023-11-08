import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import * as styles from "../../styles/components/OffCanvas_Wish.css";
import * as fonts from "../../styles/fonts/fonts.css";


function OffCanvas_Wish({ showOffcanvas, setShowOffcanvas }) {
  const offCanvasWidth = "350px";
  const paddingTop = "10vh";
  return (
    <>
      <div className={styles.offcanvas}>
        <div
          className={`${showOffcanvas ? "show" : ""} offcanvas offcanvas-end`} //class is controlled by props boolean
          style={{ width: offCanvasWidth, paddingTop: paddingTop }}
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          // id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-body d-flex flex-column mt-5 py-5 ">
             <h2>Wishlist</h2> <span onClick={()=>{setShowOffcanvas(false)}}>X</span>

            <button type="button" >Email my wishlist</button>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default OffCanvas_Wish;
