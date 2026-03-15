---
title: ลิงก์แต้มช่องกับซาวด์บอร์ด
---

สามารถให้ผู้ชมแลกแต้มช่อง Twitch เพื่อเล่นเสียงเอฟเฟกต์ได้ ตั้งค่าได้ผ่าน Dashboard → **Manager → Channel Points**

:::note
ฟีเจอร์นี้ใช้ได้เฉพาะ **Twitch** เท่านั้น
:::

![](https://r2.otternoon.com/manao-channel-points.png)

---

### การเพิ่มรางวัลแต้มช่อง

กดปุ่ม **Add Reward** แล้วตั้งค่าตามนี้:

1. **Name** — ชื่อรางวัลที่จะโชว์ใน Twitch
2. **Cost** — จำนวนแต้มที่ใช้แลก (ค่าเริ่มต้น: 100)
3. **Description** — คำอธิบายที่โชว์ให้คนดูเห็นตอนจะแลก
4. **Cooldown (s)** — ระยะเวลาคูลดาวน์ ตั้งเป็น `0` ถ้าไม่ต้องการคูลดาวน์
5. **Sound** — ไฟล์เสียงที่จะเล่นเมื่อมีการแลกรางวัล

กด **Save** เพื่อสร้างรางวัล มะนาวจะสร้างรางวัลใน Twitch อัตโนมัติ

---

### การทดสอบ

เมื่อตั้งค่าเสร็จแล้ว ให้เพิ่ม **Sound Overlay** ใน OBS ที่ URL `http://localhost:4600/overlay/sound` ก่อน ([ดูวิธีเพิ่ม overlay ใน OBS](/guides/adding-overlays-in-obs)) แล้วลองแลกรางวัลแต้มช่อง

ถ้าเสียงไม่เล่น ให้ตรวจสอบว่า:

1. ได้กดปุ่ม **Interact** กับ Sound Overlay ใน OBS แล้ว ([ดูวิธี](/guides/adding-overlays-in-obs#ใช้ปุ่ม-interact-สำหรับ-sound-overlay))
2. ไฟล์เสียงอยู่ในโฟลเดอร์ `server/public/sounds/` จริง
3. ชื่อไฟล์เสียงตรงกับที่ตั้งค่าไว้

ถ้าปัญหายังไม่หาย ติดต่อใน [Discord](https://discord.gg/vkW7YMyYaf) ได้เลย
