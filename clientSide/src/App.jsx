import {Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import ProductPage from "./product/ProductsPage"
import NotFound from "./pages/NotFound"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
