import * as styles from "../../styles/components/TitleCard.css";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css.ts";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg"
import writeUtils from "../../utils/writeUtils";
function TitleCard({data}) {

const {collectionId,titleInfo}=data

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className={styles.Item}>
        <Link to={`${collectionId}`}>
          <div className={styles.ItemImage}>
            <img
              src={titleInfo.urls ? titleInfo.urls[0] : imagePlaceHolder}
              alt={titleInfo.title}
            />
          </div>
        </Link>
        <div className={styles.ItemText}>
          <span className={fonts.futuraGridCardTitles}>{writeUtils.capitalizeFirstLetter(titleInfo.title) }</span>
          <br />
          <p className={styles.code}>{titleInfo.code}</p>
        </div>
        <Link to={`${collectionId}`}>
          <button className={styles.button}>DETAILS</button>
        </Link>
      </div>
    </div>
  );
}

export default TitleCard;
