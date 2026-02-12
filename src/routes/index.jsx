import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";

import Dashboard from "../pages/admin/Dashboard";
import ProductList from "../pages/admin/ProductList";
import AddProduct from "../pages/admin/AddProduct";

import Home from "../pages/client/Home";
import Product from "../pages/client/Product";

export default function AppRoutes() {
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
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/addProduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
