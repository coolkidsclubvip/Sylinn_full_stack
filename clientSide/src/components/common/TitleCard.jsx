import * as styles from "../../styles/components/TitleCard.css";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css.ts";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg"
import writeUtils from "../../utils/writeUtils";
import sortImages from "../../utils/sortImages";

function TitleCard({data}) {
  const { category, collectionId, titleInfo } = data;
  //    Replaces "search"  with category in Link URL
  const linkPath = `/products/${category}/${collectionId}`;

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className={styles.Item}>
        <Link to={linkPath}>
          <div className={styles.ItemImage}>
            <img
              src={
                titleInfo.urls
                  ? sortImages(titleInfo.urls)[0]
                  : imagePlaceHolder
              }
              alt={titleInfo.title}
            />
          </div>
        </Link>
        <div className={styles.ItemText}>
          <span className={fonts.futuraGridCardTitles}>
            {writeUtils.capitalizeStringLED(writeUtils.capitalizeFirstLetter(titleInfo.title))}
          </span>
          <br />
          <p className={styles.code}>{titleInfo.code}</p>
        </div>
        <Link to={linkPath}>
          <button className={styles.button}>DETAILS</button>
        </Link>
      </div>
    </div>
  );
}

export default TitleCard;
