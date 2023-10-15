import { useState } from "react";
// 
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


const SearchBar = () => {
  const [text, setText] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);
  const handleSubmit =(e) => {
e.preventDefault();
  
    console.log(text);
    // setLoading(true);
    // api request
  }

  return (
    <div className="d-flex  justify-content-center">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="Input"
          label="Search Keywords"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Enter your search keywords"
            value={text}
            onChange={onChange}
          />
        </FloatingLabel>
        {/* <button type="submit" className="btn btn-primary">
          Search
        </button> */}
      </Form>

    </div>
  );
};

export default SearchBar;
