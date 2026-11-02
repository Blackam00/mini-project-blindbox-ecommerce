export function requireAuth(_req, res) {
  res.status(501).json({ message: "ยังไม่ได้ตั้งค่าการยืนยันตัวตน" });
}
