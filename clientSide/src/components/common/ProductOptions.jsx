import Form from "react-bootstrap/Form";

function ProductOptions({ data, setSelectedOption }) {
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("e.target.value is:", e.target.value);
  };

  return (
    <div>
      <h4>Options</h4>
      <Form.Select
        aria-label="Default select example"
        onChange={handleSelectChange}
      >
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default ProductOptions;
