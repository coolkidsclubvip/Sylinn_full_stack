// import s001 from "../../assets/images/s001.jpeg";
// import s002 from "../../assets/images/s002.jpeg";
// import s003 from "../../assets/images/s003.jpeg";
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
              className="active  "
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
            <div className={`carousel-item active ${styles.image1}`}/>
              
            
            <div className={`carousel-item active ${styles.image2}`}/>
           
            <div className={`carousel-item active ${styles.image3}`}/>
             
          
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
