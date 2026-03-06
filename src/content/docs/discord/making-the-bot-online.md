---
title: รับโทเค็นและไอดีไคล์เอนต์จาก Discord
---

ก่อนที่บอตจะเข้าร่วมเซิร์ฟเวอร์และเริ่มแชทได้ มันต้องมีช่องทางในการล็อกอินก่อน บอต Discord เนี่ยใช้สิ่งที่เรียกว่า **Bot Token** ในการล็อกอินและทำงาน ซึ่งต่างจาก Twitch หรือ Kick ตรงที่ไม่ต้องยุ่งกับ OAuth หรือ Scope ให้ปวดหัว แค่สร้างบอต คัดลอก Token แล้วเอาไปใส่ในสคริปต์ตั้งค่าได้เลย

โอเค เกริ่นมาเยอะแล้ว มาเริ่มกันเลยดีกว่า!

---

### สร้างแอพพลิเคชัน

ก่อนที่เราจะมีบอต เราต้องสร้างแอพพลิเคชันใน Discord ก่อน ทำตามนี้เลย

1. ล็อกอินเข้า [Discord Developer Portal](https://discord.com/developers/applications)
2. คลิกปุ่ม **"New Application"** ที่มุมขวาบน
3. ตั้งชื่ออะไรก็ได้ (ชื่อนี้ไม่ใช่ชื่อบอตที่โชว์ในเซิร์ฟเวอร์นะ เป็นแค่ชื่อแอพพลิเคชัน)
4. กด **"Create"** เสร็จแล้วจ้า

:::caution
บัญชีที่ใช้สร้างแอพพลิเคชันต้องเปิดการยืนยันสองขั้นตอน (2FA) ก่อนนะ ถ้าไม่รู้ว่าเปิดยังไง อ่าน [การใช้แอป Authenticator บน Discord](https://support.discord.com/hc/th/articles/26304482627095)
:::

---

### รับ Bot Token

มาถึงส่วนสำคัญแล้ว ทำตามนี้เลย

1. ในเมนูด้านซ้าย คลิกแท็บ **"Bot"**
2. กดปุ่ม **"Reset Token"**
3. กรอกรหัส 2FA ถ้ามีหน้าต่างเด้งขึ้นมา
4. จะมีข้อความยาว ๆ ปรากฏขึ้น — นั่นคือ **Bot Token**
5. กด **"Copy"** แล้วเก็บไว้ในที่ปลอดภัยทันที เพราะออกจากหน้านี้แล้วจะดูไม่ได้อีก ถ้าหายต้อง Reset ใหม่

:::danger
**ย้ำอีกครั้ง!** Bot Token คือรหัสลับของบอต ห้ามแชร์ให้ใครเด็ดขาด ห้ามโพสต์ใน GitHub หรือที่สาธารณะใด ๆ ทั้งนั้น ใครได้ไปสามารถควบคุมบอตเราได้ 100%
:::

---

### เชิญบอตเข้าเซิร์ฟเวอร์

บอตพร้อมแล้ว แต่ยังไม่มีที่ไป ต้องเชิญเข้าเซิร์ฟเวอร์ก่อน ทำตามนี้เลย

1. ในเมนูด้านซ้าย คลิก **"OAuth2"** แล้วเลือก **"URL Generator"**
2. ในส่วน **Scopes** ให้ติ๊ก **`bot`**
3. ในส่วน **Bot Permissions** ที่โผล่มาด้านล่าง ให้ติ๊ก **`Administrator`**
4. คัดลอก URL ที่สร้างขึ้นด้านล่างสุด
5. เปิด URL นั้นในเบราว์เซอร์ เลือกเซิร์ฟเวอร์ที่ต้องการ แล้วกด **"Authorize"**

---

### ตั้งค่าบอตใน Manao

เปิด ManaoBot Setup ที่หน้า Desktop ขึ้นมา

ได้แล้วจะขึ้นหน้าตาประมาณนี้
```terminaloutput
⟦◄ ManaoBot v4.1.0 - Configuration ►⟧
? Do you want to setup Manao Twitch Bot? (Y/n)
```

ให้กด n แล้ว Enter ไปเรื่อย ๆ จนกว่าจะเจอคำถามนี้

```terminaloutput
? Do you want to setup Manao Discord Bot? (Y/n)
```

กด Enter จากนั้นจะขึ้นข้อความนี้
```terminaloutput
⚠ To enable Discord integration, you need to create a Discord Bot and get its token. Read the guide below:
→ English: https://manaobot.netlify.app/en/discord/getting-started/
→ Thai: https://manaobot.netlify.app/th/discord/getting-started/
? Enter your Discord Bot Token (Leave blank for unchanged) [input is masked]
```

ให้เอา **Bot Token** ที่ได้มาใส่ตรงนี้ แล้วกด Enter (มันไม่โชว์รหัสที่พิมพ์นะ ไม่ต้องตกใจ กด Enter ได้เลย)

จากนั้นตอบคำถามที่เหลือตามต้องการ ถ้าไม่รู้คืออะไร / ไม่อยากใช้ พิมพ์ n แล้ว Enter ให้หมด เมื่อเสร็จแล้วจะขึ้นว่า
```terminaloutput
✅ Configuration complete! Your .env file has been created.
```

แค่นี้ก็เรียบร้อยแล้วจ้า! รันมะนาวบอตได้เลย