🎁 Blind Box E-Commerce (ระบบร้านขายกล่องสุ่ม)
Mini-Project เปรียบเทียบการพัฒนาระบบอีคอมเมิร์ซร้านขายกล่องสุ่มด้วยสถาปัตยกรรม 2 รูปแบบ: Java JSP (Server-Side Rendering) และ React + Express (Decoupled SPA / REST API) โดยใช้ฐานข้อมูล MySQL ร่วมกัน

📌 วัตถุประสงค์ของโปรเจกต์ (Project Overview)
โปรเจกต์นี้จัดทำขึ้นเพื่อศึกษาและเปรียบเทียบกระบวนการพัฒนา ประสิทธิภาพ (Performance) สถาปัตยกรรมซอฟต์แวร์ (Software Architecture) และประสบการณ์การใช้งาน (UX/DX) ระหว่างการพัฒนาเว็บแอปพลิเคชันแบบดั้งเดิม (Monolith SSR) กับแบบสมัยใหม่ (Decoupled Single Page Application) บนโจทย์ระบบและฐานข้อมูลเดียวกัน

🏗️ การเปรียบเทียบสถาปัตยกรรม (Architecture Comparison)
หัวข้อ	☕ 01. Java JSP Version	⚛️ 02. React + Express Version
สถาปัตยกรรม	
Server-Side Rendering (SSR)

Decoupled Architecture (SPA + REST API)

Frontend	
JSP (JavaServer Pages) + JSTL + Bootstrap 5

React (Vite) + Tailwind CSS

Backend	
Java Servlets / JavaBeans / DAO

Node.js + Express.js Framework

Data Flow	
HTTP Request 
→ Servlet 
→ DB 
→ Re-render JSP

Fetch / Axios (JSON) 
→ REST API 
→ React State Update

User Experience (UX)	
โหลดหน้าใหม่เมื่อเปลี่ยนหน้า/Submit Form

ลื่นไหล ไม่มีการ reload หน้าเว็บเมื่อเปิดสุ่มสินค้า

🗄️ โครงสร้างฐานข้อมูล (Database Schema - 6 Tables)
ใช้ฐานข้อมูล MySQL ร่วมกัน ประกอบด้วย 6 ตารางสัมพันธ์:

users: เก็บข้อมูลผู้ใช้งานและสิทธิ์เข้าถึง (Customer / Admin)

categories: เก็บหมวดหมู่สินค้ากล่องสุ่ม

products: เก็บรายการกล่องสุ่ม ราคา สต็อก และรายละเอียด

items_in_box: รายการสินค้าภายในกล่องสุ่มพร้อมระดับความยาก/โอกาสได้รับ (Rarity)

orders: ข้อมูลการสั่งซื้อ ยอดรวม และสถานะชำระเงิน

order_items: รายละเอียดสินค้าในแต่ละคำสั่งซื้อ

📁 โครงสร้างโฟลเดอร์ของโปรเจกต์ (Project Structure)
Plaintext
blindbox-ecommerce/
├── 📁 01-java-jsp-version/          # Form 1: Java (JSP/JSF + Servlets + MySQL)
│   └── 📁 src/main/
│       ├── 📁 java/com/blindbox/    # (Controller, DAO, Model, Util)
│       └── 📁 webapp/               # (JSP Pages: index, product-detail, cart, checkout)
│
├── 📁 02-react-express-version/     # Form 2: JS Stack (React + Node.js Express)
│   ├── 📁 backend/                  # REST API Server (Controllers, Routes, Config)
│   └── 📁 frontend/                 # React App (Components, Pages, Services)
│
└── 📁 database/                     # MySQL Schema & Initial Data
    └── schema.sql
```[cite: 3]

---

## 🚀 ฟีเจอร์หลักของระบบ (Features)
* 🎁 **หน้าแรก (Home Page):** แสดงรายการกล่องสุ่มทั้งหมดแยกตามหมวดหมู่[cite: 1, 2]
* 🎲 **หน้าเจาะลึกและสุ่มสินค้า (Unbox Feature):** ดูรายละเอียดสินค้า และทดลองเปิดสุ่มไอเทมภายในกล่อง[cite: 1, 2]
* 🛒 **ระบบตะกร้าสินค้า (Cart System):** คำนวณราคาและจัดการรายการสั่งซื้อ[cite: 1, 2]
* 💳 **ระบบชำระเงิน (Checkout):** กรอกข้อมูลจัดส่งและยืนยันคำสั่งซื้อ[cite: 1, 2]
* 🔐 **ระบบจัดการผู้ใช้ (User Management):** สมัครสมาชิก และเข้าสู่ระบบ[cite: 1, 2]

---

## 🛠️ ขั้นตอนการรันโปรเจกต์ (Getting Started)

### 1. การเตรียม Database
1. นำไฟล์ `database/schema.sql` ไป Execute บน MySQL Server
2. กำหนดความเชื่อมโยงของ DB credentials ในไฟล์คอนฟิกของทั้งสองโครงการ

### 2. รันเวอร์ชัน Java (JSP)
```bash
cd 01-java-jsp-version
# Compile และ Run บน Apache Tomcat Server (ผ่าน IDE หรือ Maven)
3. รันเวอร์ชัน React + Express
Bash
# 1. Run Backend Server (Port 5000)
cd 02-react-express-version/backend
npm install
npm run dev

# 2. Run Frontend Client (Port 5173 / 3000)
cd ../frontend
npm install
npm run dev
