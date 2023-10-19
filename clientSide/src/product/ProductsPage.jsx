//  抄的  大改下面

// import { useState, useEffect, useRef } from 'react';
// import Container from "react-bootstrap/Container";
// import BathPage from './BathPage';

// import productService from '../../services/productService';
// import ProductsList from "../../components/features/products/ProductsList"
// import TuLoader from '../../components/common/TuLoader';

// function ProductsPage() {
  // PRODUCTS STATE
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // // HOOK: ON-LOAD SIDE EFFECTS
  // const effectRan = useRef(false);
  // useEffect(() => {
  //   console.log("Effect Ran");
  //   if (effectRan.current === false) {
  //     fetchProducts();
  //     setLoading(false);

  //     // CLEAN UP FUNCTION
  //     return () => {
  //       console.log("Unmounted");
  //       effectRan.current = true;
  //     }
  //   }
  // }, []);

  // // [5A] COMPONENT FUNCTION
  // async function fetchProducts() {
  //   try {
  //     // TU API Request
  //     const response = await productService.getAll();

  //     // Access Object Properties to Find Data Array & Save to Variable 
  //     const data = await response.data;

  //     // SUCCESS: Output needs to override data state
  //     console.log(data);
  //     setData(data);

  //   } catch(err) {
  //     console.log(err?.response);
  //     setError(true); 
  //   }
  // }

  // // CONDITIONAL LOAD: ERROR
  // if (error) {
  //   return (
  //     <Container className="text-center mt-4">
  //       <p>Error page</p>
  //     </Container>
  //   )
  // }

  // // CONDITIONAL LOAD: LOADING
  // if (loading) {
  //   return (
  //     <Container className="text-center mt-4">
  //       <TuLoader />
  //     </Container>
  //   )
  // }

//   return (
//     <Container className="text-center mt-5 py-5">
//       <h1>All products category</h1>
//       <p>this is a product category page</p>
//       <button>category 1</button>
//       <button>category 1</button>
//       <button>category 1</button>

//       {/* test */}

//       {/* Products Menu */}

//       <BathPage />
//       {/* {<ProductsList products={data} />} */}
//     </Container>
//   );
// }

// export default ProductsPage