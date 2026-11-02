import pool from "../config/db.js";

export async function createOrder(_req, res) {
  res.status(501).json({ message: "ยังไม่ได้ตั้งค่าการสร้างคำสั่งซื้อ" });
}

export async function getOrders(_req, res, next) {
  try {
    const [orders] = await pool.query(
      "SELECT id, user_id, total_amount, status, created_at FROM orders ORDER BY created_at DESC"
    );
    res.json(orders);
  } catch (error) {
    next(error);
  }
}
