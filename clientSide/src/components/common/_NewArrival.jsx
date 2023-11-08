import * as styles from "../../styles/NewArrival.css";


import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as fonts from "../../styles/fonts/fonts.css"


function NewArrival() {
  // mocked products list from DB
  const products = [
    {
      name: "FELICIA",
      description: "FREE STANDING BATH TUB",
      code: "D-8365-1",
      imageUrl: "/images/bath_pics/D-8365-1.png",
    },
    {
      name: "CASITANO",
      description: "FREE STANDING BATH TUB",
      code: "D-8366-1",
      imageUrl: "/images/bath_pics/D-8366-1.png",
    },
    {
      name: "ROME",
      description: "FREE STANDING BATH TUB",
      code: "D-8367-1",
      imageUrl: "/images/bath_pics/D-8369-1.png",
    },
    {
      name: "DOROTHY",
      description: "FREE STANDING BATH TUB",
      code: "D-8368-1",
      imageUrl: "/images/bath_pics/D-8370-1.png",
    },
    {
      name: "NAPLES",
      description: "FREE STANDING BATH TUB",
      code: "D-8368-1",
      imageUrl: "/images/bath_pics/D-8375-1.png",
    },
    {
      name: "SICILY",
      description: "FREE STANDING BATH TUB",
      code: "D-8368-1",
      imageUrl: "/images/bath_pics/D-8376-1.png",
    },
  ];



  
  return (
    <Container>
      <div className={styles.NAWrapper}>
        <p>
          <span className={fonts.futuraTitle}>New Arrival</span> <br />
          <span className={fonts.normalText}>
            New European desgin that is fresh off the boat
          </span>{" "}
        </p>
        <div className={`row ${styles.NAList}`}>
          {products.map((product, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className={styles.NAItem}>
                <Link to="/details">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.NAItemImage}
                  />
                </Link>
                <div className={styles.NAItemText}>
                  <span className={fonts.futuraGridCardTitles}>{product.name}</span>
                  <br />
                  <span className={styles.code}>{product.code}</span>
                  <p className={styles.description}>{product.description}</p>

                  <Link to="/details">
                    <button className={styles.button}>DETAILS</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default NewArrival;

/* <div className={styles.divideLineStyles}></div> */
