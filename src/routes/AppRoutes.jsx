import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";
import Orders from "../pages/Orders";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/add-product"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-product/:id"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;