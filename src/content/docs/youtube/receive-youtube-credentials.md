---
title: รับข้อมูลจาก Google Cloud
---

มะนาวใช้ **YouTube Data API v3** เพื่ออ่านแชทจาก YouTube Live ซึ่งต้องมี OAuth 2.0 credentials จาก Google Cloud Console ก่อน

---

### สร้าง Google Cloud Project

1. เข้าไปที่ [console.cloud.google.com](https://console.cloud.google.com)
2. กด **Select a project** → **New Project**
3. ตั้งชื่อ project อะไรก็ได้ แล้วกด **Create**

---

### เปิด YouTube Data API v3

1. ไปที่ **APIs & Services → Library**
2. ค้นหา **YouTube Data API v3**
3. กด **Enable**

---

### สร้าง OAuth 2.0 Credentials

1. ไปที่ **APIs & Services → Credentials**
2. กด **+ Create Credentials → OAuth client ID**
3. ถ้ายังไม่ได้ตั้งค่า OAuth consent screen จะมีให้ตั้งก่อน:
   - เลือก **External**
   - กรอกชื่อ app (อะไรก็ได้)
   - กรอก email ของตัวเอง
   - กด **Save and Continue** จนครบ
4. กลับมาสร้าง credentials ต่อ เลือก **Application type: Desktop app**
5. ตั้งชื่ออะไรก็ได้ แล้วกด **Create**
6. จะได้ **Client ID** และ **Client Secret** มา

:::danger
**สำคัญมาก!** ห้ามแชร์ Client Secret ให้ใคร และห้ามโพสต์ใน GitHub หรือที่สาธารณะใด ๆ ทั้งนั้น
:::

---

### เพิ่ม Test User

เนื่องจาก app ยังไม่ผ่าน Google verification ต้องเพิ่มตัวเองเป็น test user ก่อน:

1. ไปที่ **APIs & Services → OAuth consent screen**
2. เลื่อนลงมาที่ **Test users**
3. กด **+ Add users**
4. เพิ่ม email ของ Google account ที่เชื่อมกับ YouTube channel ของเรา
5. กด **Save**

:::tip
ไม่ต้องส่ง app ให้ Google review เพราะมะนาวใช้งานส่วนตัวเท่านั้น ไม่ต้องผ่านการ verify
:::

---

### ตั้งค่าใน Setup Wizard

นำ **Client ID** และ **Client Secret** ไปกรอกในหน้า YouTube ของ Setup Wizard แล้วกด **Authorize YouTube Account** ได้เลย browser จะเปิดหน้า Google login ให้อัตโนมัติ ไม่ต้องกรอก redirect URI เพิ่มเติมใด ๆ
