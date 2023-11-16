import { useState, useEffect, useRef } from "react";
import * as styles from "../../styles/components/ProductImageModal.css";
import { Link } from "react-router-dom";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Breadcrumb,
} from "react-bootstrap";
import readUtils from "../../utils/readUtils";

function ProductImageModal({ titleInfo, selectedOption }) {
  const isBigImageUrl = titleInfo.urls ? titleInfo.urls[0] : imagePlaceHolder;

  const [slideIndex, setSlideIndex] = useState(0);
  const [bigImageUrl, setBigImageUrl] = useState(isBigImageUrl); // Initialize with the first image URL
  const [slides, setSlides] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const modalRef = useRef(null);
  const bigImgRef = useRef(null);
  const modalImgRef = useRef(null);
  const captionTextRef = useRef(null);
  const closeBtnRef = useRef(null);
  const slidesRef = useRef(null);

  let modal;
  let bigImg;
  let modalImg;
  let captionText;
  let closeBtn;

  useEffect(() => {
    // 使用 ref 获取 DOM 元素
    modal = modalRef.current;
    bigImg = bigImgRef.current;
    modalImg = modalImgRef.current;
    captionText = captionTextRef.current;
    closeBtn = closeBtnRef.current;
    setSlides(slidesRef.current.querySelectorAll("li"));

    if (modal && bigImg && modalImg && captionText && closeBtn && slides) {
      bigImg.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.id;
      };

      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      showSlides(slideIndex);
    }
  }, [slideIndex]);

  function plusSlides(n) {
    const newIndex = slideIndex + n;

    if (newIndex > slides.length) {
      setSlideIndex(1); // if newIndex is greater than slides.length,back to 1st slide
    } else if (newIndex < 1) {
      setSlideIndex(slides.length); // is newInes is lesser than 1, back to last slide
    } else {
      setSlideIndex(newIndex); // otherwise,set a normal index
    }
  }

  function showSlides(n) {
    if (slides && n >= 1 && n <= slides.length) {
      modalImgRef.current.src = titleInfo.urls[n - 1];

      // slides.forEach((slide) => {
      //   slide.classList.remove(styles.active1);
      // });

      // slides[n - 1].classList.add(styles.active1);

      bigImgRef.current.setAttribute("src", titleInfo.urls[n - 1]);
    }
  }

  // When mouse hover on small images, set big image url accordingly
  // const handleOnMouseEnter = (url, index) => {
  //   setBigImageUrl(url);
  //   showSlides(index + 1);
  //   setHoveredIndex(index); // 更新被悬停的小图索引
  // };
const handleOnMouseEnter = (url, index) => {
  if (selectedOption) {
    // 如果有 selectedOption，找到当前小图对应的 titleInfo.urls 中的索引
    const currentSmallImageIndex = titleInfo.urls.findIndex((u) => u === url);

    // 根据索引找到对应的 imageNames 中的索引
    const selectedIndex =
      currentSmallImageIndex !== -1 ? currentSmallImageIndex : 0;

    if (selectedIndex !== -1) {
      setBigImageUrl(titleInfo.urls[selectedIndex]);
      showSlides(selectedIndex + 1);
    }
  } else {
    // 否则，使用当前小图的 URL
    setBigImageUrl(url);
    showSlides(index + 1);
  }

  setHoveredIndex(index); // 更新被悬停的小图索引
};

  // Set the big image URL according to selected option
  //1. Get image names from urls
  const imageNames = [];
  // 2.A function to get rid of timestamp from imageName
  const deleteTimestampFromName = (imageName) => {
    const indexOfUnderscore = imageName.indexOf("_");
    return indexOfUnderscore !== -1
      ? imageName.slice(indexOfUnderscore + 1)
      : imageName;
  };
  titleInfo.urls.map((url) => {
    const imageName = readUtils.getFileFromUrl(url);
    const imageNamesWithoutTimestamp = deleteTimestampFromName(imageName);
    imageNames.push(imageNamesWithoutTimestamp);
  });

  //3. Matching imageNames with selected options, and set big image url accordingly
  const handleOptionChange = (selectedOption) => {
    // 通过 selectedOption 找到包含在 imageNames 中的项的索引
    const selectedIndex = imageNames.findIndex((imageName) =>
      imageName.includes(selectedOption)
    );

    // 如果找到了对应的索引，更新 bigImageUrl 和 slideIndex
    if (selectedIndex !== -1) {
      setBigImageUrl(titleInfo.urls[selectedIndex]);
      setSlideIndex(selectedIndex + 1);
    }
  };

  // 在 useEffect 中监听 selectedOption 的变化，并调用 handleOptionChange
  useEffect(() => {
    if (selectedOption) {
      handleOptionChange(selectedOption);
    }
  }, [selectedOption]);


//
const [smallImages, setSmallImages] = useState(titleInfo.urls);

  useEffect(() => {
    if (selectedOption) {
      // 如果存在 selectedOption，则根据索引数组更新小图数组
      const selectedIndexes = imageNames
        .map((imageName, index) =>
          imageName.includes(selectedOption) ? index : null
        )
        .filter((index) => index !== null);

      const updatedSmallImages = selectedIndexes.map(
        (index) => titleInfo.urls[index]
      );
      setSmallImages(updatedSmallImages);
    } else {
      // 否则，保持默认的小图数组
      setSmallImages(titleInfo.urls);
    }
  }, [selectedOption, titleInfo.urls]);



  return (
    <Container className={styles.modalContainer}>
      <Row>
        <Col sm={12}>
          {/* Big modal image */}
          <div id="productImageSwitch">
            {titleInfo && (
              <div className={styles.bigImgContainer}>
                <img
                  src={bigImageUrl}
                  id="bigImg"
                  alt="productImage"
                  ref={bigImgRef}
                />
              </div>
            )}
            <div id="myModal" className={styles.modal} ref={modalRef}>
              <span
                id="closeBtn "
                className={`${styles.close} ${styles.closeHover}`}
                ref={closeBtnRef}
              >
                &times;
              </span>
              <img
                className={styles.modalContent}
                id="img01"
                ref={modalImgRef}
              />
              <div id="caption" ref={captionTextRef}></div>
              <span
                className={`${styles.prev} ${styles.prevLeft}`}
                onClick={() => plusSlides(-1)}
              >
                &#10094;
              </span>
              <span
                className={`${styles.prev} ${styles.next}`}
                onClick={() => plusSlides(1)}
              >
                &#10095;
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          {/* Small images */}
          <div>
            <ul className={styles.ul} ref={slidesRef}>
              {smallImages?.map((url, index) => (
                <li
                  key={index}
                  className={`${styles.li}${
                    index === slideIndex - 1 ? " " + styles.active : ""
                  }`}
                >
                  <Link to="">
                    <img
                      src={url}
                      className={`${styles.smallImg} ${
                        hoveredIndex === index ? styles.borderedImg : ""
                      } `}
                      alt={url}
                      onError={(e) => {
                        e.target.src = imagePlaceHolder; //
                      }}
                      onMouseEnter={() => {
                        handleOnMouseEnter(url, index);
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductImageModal;


