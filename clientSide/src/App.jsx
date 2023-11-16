import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import ProductsPage from "./product/ProductsPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/auth/Dashboard";
import PrivateRoutes from "./components/layout/PrivateRoutes";
// import BathPage from "./product/BathPage";
// import FelicityBathPage from "./product/FelicityBathPage";
import ProductDetailPage from "./product/ProductDetailPage";
import CategoryPage from "./product/CategoryPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:category" element={<CategoryPage />} />

        <Route path="products/search/:keyword" element={<SearchPage />} />
        <Route
          path="/products/:category/:collection"
          element={<ProductDetailPage />}
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* a private auth route */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/*  */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
