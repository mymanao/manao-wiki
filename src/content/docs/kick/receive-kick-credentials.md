---
title: รับข้อมูลของบอต
---

ก่อนที่บอตจะเริ่มแชทได้ มันต้องมีช่องทางในการล็อกอินก่อน Kick ใช้ระบบ OAuth 2.0 ให้บอตขอสิทธิ์เข้าถึงช่องของเรา

---

### สร้างแอพพลิเคชัน

มะนาวคือแอพพลิเคชันหนึ่งของ Kick ซึ่งเราต้องสร้างแอพฯ ขึ้นมาก่อน ทำตามนี้เลย

1. ล็อกอินเข้า [Kick.com](https://kick.com/)
2. ไปที่การตั้งค่า [Settings → Developer](https://kick.com/settings/developer)
3. คลิกปุ่ม **Create new** ที่มุมบนขวา
4. ตั้งค่าตามนี้เลย
   - **Name**: ตั้งชื่ออะไรก็ได้
   - **Description**: เขียนอะไรไปก็ได้
   - **Redirect URI**: ใส่ `http://localhost:3002/callback` ตามนี้เป๊ะ ๆ เลยนะ
   - **Enable Webhooks**: ให้กดเปิด แล้วใส่ `http://[โดเมน NGROK ที่ได้มา]/kick/webhooks` ([อ่านวิธีตั้งค่า ngrok](/kick/setup-ngrok))
   - **Scope Requested**: กดทุกอัน
5. กด **Create App** เท่านี้ก็เสร็จแล้วจ้า

ก๊อป **Client ID** และ **Client Secret** เก็บไว้ก่อน เดี๋ยวจะใช้ตอนตั้งค่าต่อไปนะจ๊ะ

![](/manao-kickdev.png)

---

### ตั้งค่าใน Setup Wizard

เปิด Setup Wizard ขึ้นมาที่ `http://localhost:4000` ไปที่หน้า **Kick** แล้ว:

1. เปิด toggle **Enable Kick**
2. กรอก **Client ID** และ **Client Secret**
3. กรอก **Ngrok Authtoken** และ **Ngrok Domain** ([อ่านวิธีตั้งค่า ngrok](/kick/setup-ngrok))
4. กดปุ่ม **Authorize Kick Account** — มะนาวจะเปิด browser ให้กด Authorize เองอัตโนมัติ
5. เมื่อ browser แสดง ✅ แล้ว กลับมากด **Next** ได้เลย
