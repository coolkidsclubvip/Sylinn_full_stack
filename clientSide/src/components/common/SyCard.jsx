import * as styles from "../../styles/components/SyCard.css";
import { Container } from "react-bootstrap";
import { futuraTitle } from "../../styles/fonts/fonts.css";

function SyCard({ title, authform, children }) {
  return (
    <Container>
      <div className={styles.container}>
        <div
          className={`${styles.leadCard} ${
            authform ? styles.authForm : styles.generalForm
          }`}
        >
          <span className={`${futuraTitle} ${styles.cardTitle}`}>{title}</span>
          <div className={styles.cardText}>{children}</div>
        </div>
      </div>
    </Container>
  );
}

export default SyCard;
