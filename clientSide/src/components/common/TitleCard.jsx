import * as styles from "../../styles/components/TitleCard.css";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css.ts";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg"

function TitleCard({data}) {

const {collectionId,titleInfo}=data

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className={styles.NAItem}>
        <Link to={`${collectionId}`}>
          <div className={styles.NAItemImage}>
            <img
              src={titleInfo.urls ? titleInfo.urls[0] : imagePlaceHolder}
              alt={titleInfo.title}
            />
          </div>
        </Link>
        <div className={styles.NAItemText}>
          <span className={fonts.futuraGridCardTitles}>{titleInfo.title}</span>
          <br />
          <p className={styles.code}>{titleInfo.code}</p>

          <Link to={`${collectionId}`} className={styles.button}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
