import { useState, useEffect, useRef } from "react";
import * as styles from "../../styles/components/ProductImageSwitch.css";
import { Link } from "react-router-dom";

function ProductImageSwitch({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [bigImageUrl, setBigImageUrl] = useState(data[0].url); // Initialize with the first image URL
  const [slides, setSlides] = useState([]);

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
    console.log("slides is:", slides);
    console.log("slides.length is:", slides.length);
    // console.log("slides.length is:", slides.length);
    const newIndex = slideIndex + n;

    if (newIndex > slides.length) {
      setSlideIndex(1); // if newIndex is greater than slides.length,back to 1st slide
    } else if (newIndex < 1) {
      setSlideIndex(slides.length); // is newInes is lesser than 1, back to last slide
    } else {
      setSlideIndex(newIndex); // otherwise,set a normal index
    }
    console.log("slideIndex is:", slideIndex);
  }

  function showSlides(n) {
    if (slides && n >= 1 && n <= slides.length) {
      modalImgRef.current.src = data[n - 1].url;

      slides.forEach((slide) => {
        slide.classList.remove(styles.active1);
      });

      slides[n - 1].classList.add(styles.active1);

      bigImgRef.current.setAttribute("src", data[n - 1].url);
    }
  }

  const handleOnMouseEnter = (url) => {
    setBigImageUrl(url);
  }; // Update the big image URL

  return (
    <div id="productImageSwitch">
      {data[0] && (
        <div className={styles.bigImgContainer}>
          <img
            src={bigImageUrl}
            id="bigImg"
            alt="SIN-KD11649B"
            ref={bigImgRef}
          />
        </div>
      )}
      <div id="myModal" className={styles.modal} ref={modalRef} >
        <span
          id="closeBtn "
          className={`${styles.close} ${styles.closeHover}`}
          ref={closeBtnRef}
        >
          &times;
        </span>
        <img className={styles.modalContent} id="img01" ref={modalImgRef} />
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
      <ul className={styles.ul} ref={slidesRef}>
        {data.map((item, index) => (
          <li
            key={item.id}
            className={`${styles.li}${
              index === slideIndex - 1 ? " " + styles.active : ""
            }`}
          >
            <Link to="">
              <img
                src={item.url}
                className={styles.smallImg}
                alt={item.name}
                onMouseEnter={() => {
                  handleOnMouseEnter(item.url);
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductImageSwitch;
