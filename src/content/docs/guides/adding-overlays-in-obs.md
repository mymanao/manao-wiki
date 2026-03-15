---
title: เพิ่มโอเวอร์เลย์ใน OBS
---

หลังจากรัน **ManaoBot** เสร็จแล้ว ก็ถึงเวลามาเพิ่ม overlay ลงใน OBS เพื่อให้สตรีมดูเท่ขึ้นได้เลย
คำสั่งหลายอย่างของบอตก็เชื่อมกับ overlay ด้วย เช่นคำสั่ง `!nickname` ที่ให้ผู้ชมตั้งชื่อเล่นในกล่องแชทได้โดยตรง

![](https://r2.otternoon.com/manao5-customize-overlay.png)

---

### ประเภทของ Overlay ที่ใช้ได้

| Overlay        | URL                              | รายละเอียด                                                  |
|:---------------|:---------------------------------|:------------------------------------------------------------|
| Chat Overlay   | `/overlay/chat`                  | แสดงข้อความแชทจากทุกแพลตฟอร์มแบบตกแต่งสวยงาม               |
| Feed Overlay   | `/overlay/feed`                  | แสดงเหตุการณ์ในช่อง เช่น การติดตามใหม่ เงินเข้าเงินออก ฯลฯ |
| Sound Overlay  | `/overlay/sound`                 | เล่นเสียงจาก Soundboard                                     |
| Music Overlay  | `/overlay/music`                 | แสดงเพลงที่กำลังเล่นอยู่                                    |

URL เต็มจะเป็น `http://[local-ip]:4600/overlay/chat` เป็นต้น (ให้ก๊อปปี้จาก Browser มาได้เลย)

---

### เพิ่ม Browser Source ใน OBS

1. ที่แถบ **Sources** กดปุ่ม **+**
2. เลือก **Browser**
3. ตั้งชื่อ source เช่น `Chat Overlay` หรือ `Music Overlay`
4. กด **OK**

---

### ตั้งค่า Overlay

จะมีหน้าต่าง properties โผล่มา ให้ตั้งค่าตามนี้

- **URL:** ใส่ URL ของ overlay เช่น `http://localhost:4600/overlay/chat`
- **Width / Height:** ปรับขนาดให้พอดีกับหน้าจอที่ต้องการ
- **Shutdown source when not visible:** แนะนำให้ **ไม่ติ๊ก** เพื่อให้ overlay ยังเชื่อมต่ออยู่แม้จะซ่อน
- **Refresh browser when scene becomes active:** ให้ **ติ๊กไว้** เพื่อให้ overlay โหลดใหม่อัตโนมัติ

:::tip
ไม่ต้องติ๊ก "Control audio via OBS" สำหรับ overlay เพลงหรือ soundboard เพราะควบคุมเสียงได้จากหน้าเว็บโดยตรง
:::

---

### ปรับแต่ง Overlay

สามารถปรับแต่งหน้าตา overlay ได้จากหน้า **Overlay Settings** ใน Dashboard ที่ `http://localhost:4600/customize/overlay`

- **Chat Overlay**: มี theme ให้เลือก ได้แก่ Manao v5, Manao Classic และ Lucian รวมถึงปรับสีพื้นหลัง ฟอนต์ ขนาด animation และ custom CSS ได้
- **Music Overlay**: เลือก theme และปรับสี accent, พื้นหลัง, ฟอนต์ และตำแหน่ง (มุมซ้าย/ขวา บน/ล่าง)

---

### ใช้ปุ่ม Interact

Sound Overlay ต้องกดโต้ตอบก่อนถึงจะเล่นเสียงได้ เพราะ[นโยบาย autoplay](https://developer.chrome.com/blog/autoplay/) ของเบราว์เซอร์

1. ใน OBS คลิกขวาที่ Sound Overlay
2. เลือก **Interact**
3. กด **Unmute** ในหน้าต่างที่โผล่มา แล้วปิดหน้าต่างได้เลย

หรือสามารถใช้กับ Music Overlay ก็ได้ เพื่อควบคุมเสียงหรือหยุดเพลงได้

1. คลิกขวาที่ Music Overlay
2. เลือก **Interact**
3. กดที่การ์ดเพลง จะมีตัวควบคุมขึ้นมาด้านล่าง
4. ปรับเสียง/หยุด/ข้ามเพลงได้ตามต้องการ
5. กดที่การ์ดเพลงอีกรอบเพื่อซ่อน

---

### ถ้า Overlay ไม่ขึ้น

1. ตรวจสอบว่า **ManaoBot** รันอยู่ (ลองเปิด `http://localhost:4600` ในเบราว์เซอร์ดู)
2. ตรวจสอบว่า URL ใน OBS ตรงกับ overlay ที่ใช่
3. ลองรีเฟรช overlay โดยคลิกขวา → **Refresh Browser Source**
4. ถ้ามีไฟร์วอลล์หรือแอนติไวรัส อาจต้องอนุญาตการเชื่อมต่อภายในเครื่อง
