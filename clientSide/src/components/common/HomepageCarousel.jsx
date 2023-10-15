import React from "react";
import s001 from "../../assets/images/s001.jpg";
import s002 from "../../assets/images/s002.jpg";
import s003 from "../../assets/images/s003.jpg";
import s004 from "../../assets/images/s004.jpg";
import * as styles from "../../styles/components/HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <>
      {/* <!-- 轮播 --> */}
      <div className={styles.carouselWrapper}>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* <!-- 指示符 --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* <!-- 轮播图片 --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={s001} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={s002} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={s003} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={s004} className="d-block w-100" />
            </div>
          </div>

          {/* <!-- 左右切换按钮 --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomepageCarousel;
