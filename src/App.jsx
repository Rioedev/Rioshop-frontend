import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/client/Home/Home";
import Product from "./pages/client/products/Product";

import Dashboard from "./pages/admin/dashboard/Dashboard";
import ProductList from "./pages/admin/products/ProductList";
import AddProduct from "./pages/admin/products/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* CLIENT */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="products" element={<ProductList />} />
          {/* <Route path="products/addProduct" element={<AddProduct />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
