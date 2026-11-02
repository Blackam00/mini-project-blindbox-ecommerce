import pool from "../config/db.js";

export async function getProducts(_req, res, next) {
  try {
    const [products] = await pool.query(
      "SELECT id, name, description, price, image_url FROM products ORDER BY id"
    );
    res.json(products);
  } catch (error) {
    next(error);
  }
}

export async function getProductById(req, res, next) {
  try {
    const [products] = await pool.execute(
      "SELECT id, name, description, price, image_url FROM products WHERE id = ?",
      [req.params.id]
    );

    if (products.length === 0) {
      return res.status(404).json({ message: "ไม่พบสินค้า" });
    }

    res.json(products[0]);
  } catch (error) {
    next(error);
  }
}
