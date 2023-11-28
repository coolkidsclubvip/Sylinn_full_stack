import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import * as styles from "../../styles/components/RelatedProductsCarousel.css";
import * as fonts from "../../styles/fonts/fonts.css";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg";
import writeUtils from "../../utils/writeUtils";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function RelatedProductsCarousel({ relatedProducts, category, setLoading }) {
  

  return (
  
      <Carousel
        centerMode={false}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        // keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass={styles.carouselContainer}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //    deviceType={this.props.deviceType}
        dotListClass={styles.customDotList}
        itemClass={styles.customClass}
      >
        {relatedProducts.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setLoading(true);
              }}
            >
              {/* product card */}
              {/* <div className="col-md-4 col-sm-6 col-12"> */}
              <Link to={`/products/${category}/${item.collectionId}`}>
                <div className={styles.RPItem}>
                  <div className={styles.RPItemImage}>
                    <img
                      src={
                        item.titleInfo.urls
                          ? item.titleInfo.urls[0]
                          : imagePlaceHolder
                      }
                      alt={item.titleInfo.title}
                    />
                  </div>

                  <div className={`${styles.RPItemText} mt-3`}>
                    <span className={fonts.futuraGridCardTitles}>
                      {writeUtils.capitalizeFirstLetter(item.titleInfo.title)}
                    </span>
                    <br />
                    <p className={styles.code}>{item.titleInfo.code}</p>
                  </div>
                
                </div>
              </Link>
            </div>
            // </div>
          );
        })}
      </Carousel>
  
  );
}

export default RelatedProductsCarousel;
