import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav aria-label="เมนูหลัก">
      <Link to="/">Blind Box</Link>
      <Link to="/cart">ตะกร้าสินค้า</Link>
    </nav>
  );
}
