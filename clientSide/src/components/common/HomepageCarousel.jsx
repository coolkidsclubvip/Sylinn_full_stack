import Carousel from "react-bootstrap/Carousel";
import BannerButton from "./BannerButton";
import { Link } from "react-router-dom";
import video from "/images/carousel_images/modern_desgin.mp4";

import * as styles from "../../styles/components/HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel fade variant="dark" interval={7000}>
        {/* ////////video */}

        <Carousel.Item>
          <div className={styles.image0}>
            <div className={styles.videoContainer}>
              <video autoPlay muted className={styles.carouselVideo}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Carousel.Item>
        {/* ///////////////////// */}
        <Carousel.Item>
          <div className={styles.image1}>
            <div className={styles.carouselCaption}>
              Lucent LED Mirror Range
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
          <div className={styles.image2}>
            <div className={styles.carouselCaption}>
              Felicity Corner Bath Range
            </div>
            <div className={styles.carouselText}>
              Introducing Sylinn's Felicity Corner Bath, available in 1400mm and
              1600mm sizes, catering to unique customer needs with unparalleled
              versatility and style.
            </div>
            <div className={styles.carouselButton}>
              <Link to="/products/bath/BTU-FELICITY">
                <BannerButton>EXPLORE</BannerButton>
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.image3}>
            <div className={styles.carouselCaption}>
              Lucia Towel Rack Multi Colours
            </div>
            <div className={styles.carouselText}>
              Discover our Australian Standard Heated Towel Rack, featuring 6
              radiant colors to complement any bathroom décor. Crafted with
              Grade 304 Polished Stainless Steel, it offers both style and
              functionality for your daily routine.
            </div>
            <div className={styles.carouselButton}>
              <Link to="/products/htr">
                <BannerButton>EXPLORE</BannerButton>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomepageCarousel;
