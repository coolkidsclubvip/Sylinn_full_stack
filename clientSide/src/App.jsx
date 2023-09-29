import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ProductPage from "./product/ProductsPage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/auth/Dashboard";
import PrivateRoutes from "./components/layout/PrivateRoutes";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* a private auth route */}
        <Route element={<PrivateRoutes/>  }>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/*  */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
