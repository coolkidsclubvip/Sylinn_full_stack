import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as styles from "../styles/CategoryPage.css";
import { Container, Row, Col } from "react-bootstrap";
import productService from "../services/productService";
import TitleCard from "../components/common/TitleCard";
import AddNewItemCard from "../components/common/AddNewItemCard";
import * as fonts from "../styles/fonts/fonts.css.ts";
import useCapitalizeFirstLetter from "../hooks/useCapitalizeFirstLetter";
import useAuth from "../hooks/useAuth";
import AddNewItemPanel from "../components/common/AddNewItemPanel";

function CategoryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { category } = useParams();
  const [showAddNewPanel, setShowAddNewPanel] = useState(false);

  console.log("user in category page is:", user);

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
  useEffect(() => {
   

    if (loading) {
      fetchCollections();
    }
  }, [loading, category]);

  console.log("data in CategoryPage is:", data);
 

  return (
    <Container>
      <div className={styles.container}>
        {showAddNewPanel && (
          <AddNewItemPanel
            setShowAddNewPanel={setShowAddNewPanel}
            fetchCollections={fetchCollections}
            category={category}
          />
        )}

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
            {/* add new item card is the 1st card, only visible to Admin */}
            {user && user.isAdmin === "true" && (
              <AddNewItemCard setShowAddNewPanel={setShowAddNewPanel} />
            )}
            {/* start mapping products */}
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
