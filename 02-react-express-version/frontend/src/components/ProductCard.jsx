import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{Number(product.price).toLocaleString("th-TH")} บาท</p>
      <Link to={`/products/${product.id}`}>ดูรายละเอียด</Link>
    </article>
  );
}
