---
title: เริ่มใช้งานมะนาวเว็บ
---

หลังจากรันบอทแล้ว ก็สามารถเข้าใช้ [ManaoWeb](http://localhost:3000) ได้ที่ `http://localhost:3000` เลย ManaoWeb เป็นหน้าเว็บสำหรับจัดการสิ่งต่าง ๆ ของบอท มีอะไรทำได้บ้าง มาดูกัน

---

### Command Manager

![](https://github.com/user-attachments/assets/3630a0aa-3b8a-4f82-a0f8-dfa0520c8c98)

ในหน้านี้สามารถเปิด/ปิดคำสั่งต่าง ๆ ได้ นอกจากนั้นยังสร้างคำสั่งเองได้ด้วย!

---

### Soundboard Controller

![](https://github.com/user-attachments/assets/e5dcfc5f-3412-4a3e-bcfb-27d831b806ed)

ในหน้านี้สามารถเปิดเสียงเอฟเฟกต์ต่าง ๆ ได้ เสียงจะถูกเล่นในหน้า Soundboard Player
สามารถเพิ่มเสียงใหม่ได้โดยระบุ URL ของไฟล์เสียง

**การเพิ่มเสียงใหม่**

![](https://github.com/user-attachments/assets/12c4d73d-fc80-4354-89e3-8df151ad520e)

1. ดาวน์โหลดไฟล์เสียงจากอินเทอร์เน็ต เว็บ [MyInstants](https://myinstants.com) มีเสียงเอฟเฟกต์เยอะมากเหมาะสำหรับใช้งาน
2. ย้ายไฟล์เสียงไปไว้ในโฟลเดอร์ ManaoBot ที่ `server/public/sounds`
3. ไปที่หน้า [Soundboard Controller](http://localhost:3000/soundboard/controller) แล้วเลื่อนลงไปด้านล่าง จะเห็นส่วน "Add new sound"
4. ตั้งชื่อตามใจชอบ และสำหรับ URL ให้ใส่ `/sounds/[ชื่อไฟล์].[นามสกุลไฟล์]` เช่น `/sounds/lucio-boop.mp3` หรือ `/sounds/sombra-boop.wav`
5. ทดสอบโดยกดปุ่ม "Open Sound Player" เพื่อเปิดหน้า Soundboard Player

---

### Soundboard Player

![](https://github.com/user-attachments/assets/b0fe8fe4-a365-4d98-826e-dbc87861e639)

หน้านี้จะเล่นเสียงที่ส่งมาจาก Soundboard Controller สามารถปรับระดับเสียงและซ่อนหน้าเพื่อเพิ่มเป็น browser source ใน OBS ได้ อย่าลืมกดปุ่ม "Unmute" และตั้งค่าระดับเสียงก่อนใช้งาน

---

### Config Editor

Config Editor ให้ปรับการตั้งค่าต่าง ๆ ของบอทได้โดยไม่ต้องแก้ไฟล์เอง การเปลี่ยนแปลงจะถูกบันทึกลง `userConfig.json` โดยอัตโนมัติ

**ทั่วไป**
- **Language** — ภาษาเริ่มต้นของข้อความจากบอท (`en` / `th`)
- **Currency Name** — ชื่อหรืออีโมจิที่ใช้เป็นสกุลเงินในช่อง (เช่น `COIN`, `🪙`)

**Command Prefixes**
- **Twitch Prefix** — อักขระที่ใช้เรียกคำสั่งในแชท Twitch (ค่าเริ่มต้น: `!`)
- **Kick Prefix** — อักขระที่ใช้เรียกคำสั่งในแชท Kick (ค่าเริ่มต้น: `!`)

**Chat Rewards**

ตั้งค่าสกุลเงินที่ผู้ชมจะได้รับเพียงแค่พิมพ์แชท สามารถตั้งค่าแยกกันได้ในแต่ละแพลตฟอร์ม (Twitch, Kick, Discord):

- **Min / Max** — ช่วงจำนวนสกุลเงินที่จะได้รับต่อข้อความ
- **Chance** — ความน่าจะเป็น (0–1) ที่ข้อความจะได้รับสกุลเงิน เช่น `0.75` คือโอกาส 75%
- **Cooldown (s)** — จำนวนวินาทีที่ผู้ใช้ต้องรอก่อนจะรับสกุลเงินได้อีกครั้ง

**Custom Messages**

ปรับแต่งข้อความที่มะนาวส่งเมื่อมีเหตุการณ์ในช่อง รองรับ: `onFollow`, `onSubscribe`, `onResubscribe`, `onRaid` ใช้ `[user]` แทนชื่อผู้ชม และ `[viewers]` แทนจำนวนคนที่เข้ามาเรด
