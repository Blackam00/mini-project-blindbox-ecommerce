import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<main><h1>ไม่พบหน้านี้</h1><Link to="/">กลับหน้าหลัก</Link></main>} />
      </Routes>
    </BrowserRouter>
  );
}
