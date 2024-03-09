import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import * as styles from "../../styles/layout/SearchBar.css"

const SearchBar = ( ) => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => setKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    // api request
    if (keyword === "") {
      alert("Please enter something!");
    } else {
      setKeyword("");
      // setShowOffcanvas(false);
      navigate(`products/search/${keyword}`);
    }
  };

  return (
    <div className={styles.searchForm}>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="Input"
          label="Search Product Name or Code"
          className="w-100 mt-1 text-muted"
        >
          <Form.Control
            type="text"
            placeholder=" "
            value={keyword}
            onChange={onChange}
            style={{ outline: "none", boxShadow: "none", height: "60px" }}
          />

          {/* <Button
            type="submit"
            variant="light"
            onClick={handleSubmit}
            className="d-flex  py-0 ms-auto w-25 "
          >
            <BsSearch /> 
          </Button> */}
        </FloatingLabel>
      </Form>
    </div>
  );
};

export default SearchBar;
