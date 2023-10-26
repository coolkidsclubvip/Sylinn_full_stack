import * as styles from "../../styles/components/AddNewCard.css";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css";
import imagePlaceHolder from "../../assets/images/no_image_available.jpeg";

function AddNewItemCard({ setShowAddNewPanel }) {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className={styles.NAItem}>
        <Link to={""}>
          <div className={styles.NAItemImage}>
            <img src={""} alt={""} />
          </div>
        </Link>
        <div className={styles.NAItemText}>
          <span className={fonts.futuraGridCardTitles}>{""}</span>
          <br />
          <h2>Admin:Before you start adding new item</h2>
          <p className={styles.code}>
            make sure you have name, title, description,image and specs PDF file
            ready
          </p>

          <Link to={""}>
            <button
              className={styles.button}
              onClick={() => {
                setShowAddNewPanel(true);
              }}
            >
              Add New Item
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddNewItemCard;
