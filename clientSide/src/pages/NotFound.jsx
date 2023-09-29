
import * as styles from "./NotFound.css";
import { futuraTitle } from "../styles/fonts/fonts.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <p className={` ${futuraTitle} ${styles.Text404}`}>
        404 "Page Not Found"
      </p>
      <Link to={"/"}>
        <Button className={styles.button404}>GO BACK</Button>
      </Link>
    </div>
  );
}

export default NotFound;
