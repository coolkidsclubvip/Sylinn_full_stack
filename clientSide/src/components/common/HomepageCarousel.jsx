// import s001 from "/images/carousel_images/s001.jpeg";
// import s002 from "/images/carousel_images/s002.jpeg";
// import s003 from "/images/carousel_images/s003.jpeg";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import * as styles from "../../styles/components/HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel fade>
        <Carousel.Item>
          <div className={styles.image1}>
            {" "}
            {/* <img src={s001} /> */}
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.image1}>
            {" "}
            {/* <img src={s002} /> */}
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.image1}>
            {" "}
            {/* <img src={s003} /> */}
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomepageCarousel;
