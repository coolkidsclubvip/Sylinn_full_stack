import { useState, useEffect } from "react";
// import * as styles from "../styles/SearchPage.css";
import { Container, Row, Col} from "react-bootstrap";
import productService from "../services/productService";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as fonts from "../../src/styles/fonts/fonts.css";
import * as styles from "../styles/page/SearchPage.css";
import DelayedLoaderSpinner from "../components/layout/DelayedLoaderSpinner";

// import SearchBar from "../components/common/SearchBar";

function SearchPage() {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const keyword = params.keyword;
  console.log("keyword is changing:::", keyword);

  console.log("searchResults are: " + searchResults);

  async function FetchSearchResults() {
    try {
      const response = await productService.getCollectionBySearchKeyword(
        keyword
      );
      console.log("response.data is: ", response.data);
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
    <div className={styles.container}>
      <Container>
        {/* If result is empty array */}
        <div className={`row ${styles.List}`}>
          {searchResults.length == 0 && (
            <div>
              {" "}
              No product matches your search, please revise your input and try
              again
            </div>
          )}
          {/* If loading is finished, and results is not empty, map it */}
          {!loading &&
            searchResults.length > 0 &&
            searchResults.map((data, index) => (
              <div className="col-md-4 col-sm-6  col-12" key={index}>
                <div className={styles.Item}>
                  <Link to={`/products/${data.category}/${data.collectionId}`}>
                    <img
                      src={data.titleInfo.urls[0]}
                      alt={data.titleInfo.title}
                      className={styles.ItemImage}
                    />
                  </Link>
                  <div className={styles.ItemText}>
                    <span className={fonts.futuraGridCardTitles}>
                      {data.titleInfo.title}
                    </span>
                    <br />
                    <p className={styles.code}>{data.titleInfo.code}</p>
                  </div>
                  <Link to={`/products/${data.category}/${data.collectionId}`}>
                    <button className={styles.button}>DETAILS</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default SearchPage;
