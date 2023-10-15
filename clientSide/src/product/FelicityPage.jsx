//  抄的  大改下面

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import productService from "../services/productService";
import Loader from "../components/common/Loader";

function FelicityPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productService.getFelicity();
        const responseData = response.data;

        setData(responseData);
        setLoading(false);
      } catch (err) {
        console.log(err?.response);
        setError(true);
        setLoading(false);
      }
    }

    if (loading) {
      fetchProducts();
    }
  }, [loading]);

  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    );
  }

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

      {data.map((data) => (
        <div key={data.id}>
          <p>{data.name}</p>
          <p>{data.rrp}</p>
          <p>{data.onSale}</p>
          <p>{data.stock}</p>
          <img src={data.url} alt={data.name} />
        </div>
      ))}
    </Container>
  );
}

export default FelicityPage;


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
