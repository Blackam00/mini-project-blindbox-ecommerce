import "dotenv/config";
import cors from "cors";
import express from "express";
import pool from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = Number(process.env.PORT ?? 5000);

app.use(cors({ origin: process.env.FRONTEND_URL ?? "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" });
});

const server = app.listen(port, () => {
  console.log(`Blind box API listening on port ${port}`);
});

async function shutdown() {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
