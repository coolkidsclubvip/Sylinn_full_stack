//  抄的  大改下面

import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";

import productService from "../services/productService";
// import ProductsList from "../../components/features/products/ProductsList"
import Loader from "../components/common/Loader";

function ProductsPage() {
  // PRODUCTS STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProducts();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  // [5A] COMPONENT FUNCTION
  async function fetchProducts() {
    try {
      // TU API Request
      const response = await productService.getFelicity();

      // Access Object Properties to Find Data Array & Save to Variable
      const data = await response.data;

      // SUCCESS: Output needs to override data state
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    );
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className="text-center mt-4">
        <Loader />
      </Container>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h1>Felicity bath</h1>
     
        {data.map( (data) => (
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.rrp}</p>
            <p>{data.onSale}</p>
            <p>{data.stock}</p>
            <img src={data.url} />
          </div>
          ))}




      
      {/* Products Menu */}
      {/* {<ProductsList  */}

      {/* key={product.id}
            id={product.id}
            productName={product.name}
            description={product.description}
            category={product.category}
            price={priceFormatter(product.price)}
            size={product.size}
            texture={product.texture}
            onSale={product.onSale}
            isAvailable={product.isAvailable}
            image={product.image} */}
    </Container>
  );
}

export default ProductsPage;
