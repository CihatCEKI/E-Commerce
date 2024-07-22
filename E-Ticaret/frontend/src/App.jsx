import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPages";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AuthPage from "./pages/AuthPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import "./App.css";
import CategoryPage from "./pages/admin/Category/CategoryPage";
import UpdateCategoryPage from "./pages/admin/Category/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/Category/CreateCategoryPage";
import CreateProductPage from "./pages/admin/Products/CreateProductPage";
import ProductPage from "./pages/admin/Products/ProductPage";
import UpdateProductPage from "./pages/admin/Products/UpdateProductPage";
import CouponPage from "./pages/admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/admin/Coupons/UpdateCouponPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}  />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
      <Route path="users" element={<AdminUserPage/>}/>
      <Route path="categories" element={<CategoryPage/>}/>
      <Route path="categories/create/" element={<CreateCategoryPage />} />
      <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
      <Route path="products/create/" element={<CreateProductPage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="products/update/:id" element={<UpdateProductPage />} />
      <Route path="coupons" element={<CouponPage />} />
      <Route path="coupons/create/" element={<CreateCouponPage />} />
      <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
      
      </Route>
      
    </Routes>
  );
}
export default App;
