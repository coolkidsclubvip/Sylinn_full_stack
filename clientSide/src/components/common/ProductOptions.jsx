import Form from "react-bootstrap/Form";
import * as styles from "../../styles/components/ProductOptions.css"

function ProductOptions({ data, setSelectedOption }) {
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("e.target.value is:", e.target.value);
  };

  return (
    <div className={styles.container}>
     
      <Form.Select
        aria-label="Default select example"
        onChange={handleSelectChange}
      >
        <option value={""}>
         --Available Options--
        </option>
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
