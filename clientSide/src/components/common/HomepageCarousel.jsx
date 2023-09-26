import React from "react";
import s001 from "../../assets/images/s001.jpg";
import s002 from "../../assets/images/s002.jpg";
import s003 from "../../assets/images/s003.jpg";
import s004 from "../../assets/images/s004.jpg";
import * as styles from "./HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <>
    {/* <!-- 轮播 --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">

   {/* <!-- 指示符 --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- 轮播图片 --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={s001} className="d-block w-100 h-50" />
    </div>
    <div className="carousel-item">
      <img src={s002} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={s003} className="d-block w-100" />
    </div>
  </div>
  
  {/* <!-- 左右切换按钮 --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
      {/* <div className={styles.HomepageCarousel}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={s001} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={s002} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={s003} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={s004} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> */}
    </>
  );
}

export default HomepageCarousel;
