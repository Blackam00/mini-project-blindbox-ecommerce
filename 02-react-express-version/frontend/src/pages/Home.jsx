import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import api from "../services/api.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/products")
      .then(({ data }) => setProducts(data))
      .catch(() => setError("โหลดรายการสินค้าไม่สำเร็จ"));
  }, []);

  return (
    <main>
      <h1>กล่องสุ่ม</h1>
      {error && <p role="alert">{error}</p>}
      {!error && products.length === 0 && <p>ยังไม่มีสินค้า</p>}
      <section aria-label="รายการสินค้า">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
