// import s001 from "/images/carousel_images/s001.jpeg";
// import s002 from "/images/carousel_images/s002.jpeg";
// import s003 from "/images/carousel_images/s003.jpeg";
import Carousel from "react-bootstrap/Carousel";
import BannerButton from "./BannerButton";
import { Link } from "react-router-dom";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import * as styles from "../../styles/components/HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel fade>
        <Carousel.Item>
          <div className={styles.image1}>
            <div className={styles.carouselCaption}>
              Sylinn's Lucent LED Mirror Range
            </div>
            <div className={styles.carouselText}>
              Discover Sylinn's brand new Lucent LED Mirror Range, offering
              modern and efficient lighting solutions to enhance your everyday
              beauty routines with comfort and convenience.
            </div>
            <div className={styles.carouselButton}>
              <Link to="/products/led">
              <BannerButton>EXPLORE</BannerButton>
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.image1}>
            <div className={styles.carouselCaption}>
              Sylinn's Lucent LED Mirror Range
            </div>
            <div className={styles.carouselText}>
              Discover Sylinn's brand new Lucent LED Mirror Range, offering
              modern and efficient lighting solutions to enhance your everyday
              beauty routines with comfort and convenience.
            </div>
            <button className={styles.carouselButton}>Explore Lucent</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.image3}>
            <div className={styles.carouselCaption}>第三张图的文字</div>
            <button className={styles.carouselButton}>Explore Products </button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomepageCarousel;
