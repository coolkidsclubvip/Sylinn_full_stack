import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import * as styles from "../styles/CategoryPage.css";
import { Container, Row, Col } from "react-bootstrap";
import productService from "../services/productService";
import TitleCard from "../components/common/TitleCard";
import * as fonts from "../styles/fonts/fonts.css.ts";
import useCapitalizeFirstLetter from "../hooks/useCapitalizeFirstLetter"

function CategoryPage() {
const [data,setData] = useState([])
const [loading,setLoading] = useState(true)

  const { category } = useParams();


  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await productService.getAllCollections(category);
        const responseData = response.data;
      
        setData(responseData);
        
        setLoading(false);
      } catch (err) {
        console.log(err?.response);
      
        setLoading(false);
      }
    }

    if (loading) {
      fetchCollections();
    }
  }, [loading,category]);


console.log("data in CategoryPage is:", data);


  return (
    <Container>
      <div className={styles.container}>
        <p>
          <span className={fonts.futuraTitle}>
            {" "}
            {useCapitalizeFirstLetter(category.toString())}
          </span>{" "}
          <br />
          <span className={fonts.normalText}>
            These are our {category} collections:
          </span>{" "}
        </p>
        {/*       
        <Row>
          <Col> */}
        <div className={styles.NAWrapper}>
          <div className={`row ${styles.NAList}`}>
            {data.map((item, index) => (
              <TitleCard key={index} data={item} />
            ))}
          </div>
        </div>
        {/* </Col>
        </Row> */}
      </div>
    </Container>
  );
}

export default CategoryPage;
