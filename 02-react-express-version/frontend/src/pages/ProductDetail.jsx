import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api.js";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch(() => setError("โหลดรายละเอียดสินค้าไม่สำเร็จ"));
  }, [id]);

  if (error) return <p role="alert">{error}</p>;
  if (!product) return <p>กำลังโหลด...</p>;

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{Number(product.price).toLocaleString("th-TH")} บาท</p>
    </main>
  );
}
