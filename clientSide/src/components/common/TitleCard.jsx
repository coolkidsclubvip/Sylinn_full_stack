import * as styles from "../../styles/components/TitleCard.css";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css.ts";

function TitleCard({data}) {
console.log("data in titlecard is: " + data);
const {collectionId,titleInfo}=data
console.log("titleInfo is: " + titleInfo);
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className={styles.NAItem}>
        <Link to={`${collectionId}`}>
          <div className={styles.NAItemImage}>
            <img src={titleInfo.urls[0]} alt={titleInfo.title} />
          </div>
        </Link>
        <div className={styles.NAItemText}>
          <span className={fonts.futuraGridCardTitles}>{titleInfo.title}</span>
          <br />
          <p className={styles.code}>{titleInfo.code}</p>

          <Link to={`${collectionId}`}>
            <button className={styles.button}>DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
