import * as styles from "../../styles/components/SyCard.css";
import { Container } from "react-bootstrap";
import { futuraTitle } from "../../styles/fonts/fonts.css";

function SyCard({icon, title, authform, children }) {
  return (
    <Container>
      <div className={styles.container}>
        <div
          className={` ${
            authform ? styles.authForm : styles.leadCard
          }`}
        >
          <span className={`${futuraTitle} ${styles.cardTitle}`}>{title} {icon}</span>
          <div className={styles.cardText}>{children}</div>
        </div>
      </div>
    </Container>
  );
}

export default SyCard;
