---
title: เชื่อมต่อกับอีเวนต์ภายนอก
---

มะนาวสามารถเชื่อมต่อกับอีเวนต์ภายนอกที่คุยกันผ่าน Socket.IO ได้ผ่านคำสั่ง `!event` ง่าย ๆ เลยคือ **เว็บไซต์หรือแอปพลิเคชันอื่น ๆ สามารถรับ-ส่งข้อมูลกับมะนาวได้แบบเรียลไทม์**

---

### คำสั่งพื้นฐาน

เชื่อมต่อกับ Socket.IO server ใด ๆ ก็ได้:

```
!event connect <URL>
```

ตัวอย่าง:

```
!event connect https://example.fly.io/?session=RANDOM_SESSION_ID
```

เมื่อเชื่อมต่อสำเร็จ มะนาวจะส่งข้อความยืนยันในแชท ตัดการเชื่อมต่อด้วย:

```
!event disconnect
```

---

### สำหรับผู้พัฒนา

มะนาวส่งและรับ event ผ่าน Socket.IO รองรับทั้ง **session-bound** และ **neutral mode**:

```typescript
socket.on("connect", () => {
  const parsed = new URL(url);
  const sessionId = parsed.searchParams.get("session");

  if (sessionId) {
    // session-bound mode
    socket.emit("session:join", { sessionId, role: "manao" });
  }
  // ถ้าไม่มี sessionId จะเป็น neutral mode
});
```

**Event ที่มะนาวรับจากเซิร์ฟเวอร์:**
- `event:start`, `{ filter?: string }` — เริ่มส่งข้อความไปยังเซิร์ฟเวอร์
- `event:stop` — หยุดส่งข้อความ
- `event:send`, `{ message: string }` — สั่งให้มะนาวส่งข้อความในแชท

**Event ที่เซิร์ฟเวอร์รับจากมะนาว:**
- `event:input`, `{ message: string, user: string }` — ข้อความที่ผู้ใช้พิมพ์ในแชทพร้อมชื่อผู้ใช้
