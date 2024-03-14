import { useState, useEffect } from "react";
// import * as styles from "../styles/SearchPage.css";
import { Container, Row, Col } from "react-bootstrap";
import productService from "../services/productService";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as fonts from "../../src/styles/fonts/fonts.css";
import * as styles from "../styles/page/SearchPage.css";
import DelayedLoaderSpinner from "../components/layout/DelayedLoaderSpinner";
import sortImages from "../utils/sortImages";
import TitleCard from "../components/common/TitleCard";
import { Helmet } from "react-helmet";

function SearchPage() {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const keyword = params.keyword;

  async function FetchSearchResults() {
    try {
      const response = await productService.getCollectionBySearchKeyword(
        keyword
      );

      setSearchResults(response.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    // if (loading) {
    FetchSearchResults();
    // }
  }, [keyword]);

  if (loading) {
    return <DelayedLoaderSpinner />;
  }

  return (
    <>
 
      <div className={styles.container}>
        <Container>
          {/* If result is empty array */}
          <div className={`row ${styles.List}`}>
            {searchResults.length == 0 && (
              <div className={styles.warnText}>
                <span className={fonts.futuraTabText}>
                  No product matches your search, please revise your input and
                  try again...
                </span>
              </div>
            )}
            {/* If loading is finished, and results is not empty, map it */}
            {!loading &&
              searchResults.length > 0 &&
              searchResults.map((data, index) => (
                <TitleCard key={index} data={data} />
              ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default SearchPage;
