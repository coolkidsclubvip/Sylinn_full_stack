import { useState } from "react";
// 
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";


const SearchBar = ({ setShowOffcanvas }) => {
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
    <div className="d-flex flex-column ">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="Input"
          label="Search Keyword"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Enter your search keywords"
            value={keyword}
            onChange={onChange}
          />

          {/* <Button
            type="submit"
            variant="light"
            onClick={handleSubmit}
            className="d-flex  py-0 ms-auto w-50 "
          >
            <BsSearch /> 
          </Button> */}
        </FloatingLabel>
      </Form>
    </div>
  );
};

export default SearchBar;
