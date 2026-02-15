---
title: ทำให้บอตออนไลน์
---

หน้านี้ไม่ยากเลย เด็กอนุบาลก็ทำได้ จริงๆ นะ แค่ไปแก้ไฟล์ตั้งค่านิดหน่อย

---

### ไฟล์ .env คืออะไร

ก่อนจะเริ่ม ต้องรู้จักไฟล์ **".env"** ก่อน มันคือไฟล์ที่เก็บข้อมูลสำคัญ ๆ ทั้งหมดของบอตเรา ไม่ว่าจะเป็นโทเค็น รหัสผ่าน หรือการตั้งค่าต่างๆ ว่าจะเปิดใช้ฟีเจอร์ไหนบ้าง

ไฟล์นี้สำคัญมากๆ **ห้ามแชร์ให้ใครเห็นเด็ดขาด** 

โดยไฟล์นี้จะถูกสร้างให้โดยอัตโนมัติตอนรันตัวติดตั้งตามด้วยเซ็ตอัพ ถ้าไม่มีให้รันตัวติดตั้งใหม่อีกรอบ (เปิดโฟลเดอร์ ManaoBot แล้วไปที่โฟลเดอร์ `tools/windows` แล้วเปิดไฟล์ `INSTALLER.bat`)

---

### ขั้นตอนการตั้งค่า

ทำตามนี้ทีละขั้น ไม่ต้องรีบ

#### 1. เปิดโฟลเดอร์ ManaoBot

เปิดโฟลเดอร์ที่ติดตั้ง ManaoBot ไว้ได้เลย ถ้าไม่รู้ว่าอยู่ที่ไหน ให้กด `⊞ Win` + `R` แล้วพิมพ์ `powershell -NoExit -Command "Set-Location -Path $env:MANAO_PATH"` แล้วกด Enter มันจะพาไปที่โฟลเดอร์นั้นเลย

#### 2. รันตัวติดตั้งฟีเจอร์เสริม

เมื่อเปิด powershell ขึ้นมาแล้ว ให้พิมพ์คำสั่งนี้แล้วกด Enter:

```powershell
bun optsetup
```

จะขึ้นหน้าตาประมาณนี้

```terminaloutput
⟦◄ ManaoBot v4.0.0 - Configuration ►⟧
? Do you want to enable Manao Discord Bot? (Y/n)
```

ให้กด Enter ได้เลย

#### 3. ใส่ Bot Token

จากนั้นมันจะขึ้นว่า

```terminaloutput
⟦◄ ManaoBot v4.0.0 - Configuration ►⟧
√ Do you want to enable Manao Discord Bot? Yes
⚠ To enable Discord integration, you need to create a Discord Bot and get its token. Read the guide below:
→ English: https://manaobot.netlify.app/en/discord/00-getting-started/
→ Thai: https://manaobot.netlify.app/th/discord/00-getting-started/
? Enter your Discord Bot Token (Leave blank for unchanged) [input is masked]
```

ให้เอา **Bot Token** ที่ได้จาก [Discord Developer Portal](https://discord.com/developers/applications) มาใส่ตรงนี้ แล้วกด Enter
(มันไม่โชว์รหัสที่พิมพ์นะ ไม่ต้องตกใจ กด Enter ได้เลย)

จากนั้นมันจะถามอีกว่า

```terminaloutput
? Do you want to enable Manao Kick Bot? (Y/n)
```

ให้กด n แล้วกด Enter ได้เลย 

#### 4. เสร็จแล้วจ้า

เท่านี้ก็เสร็จแล้ว รันมะนาวบอตได้เลยจ้า!
ถ้าไม่ได้ให้เช็ค token อีกรอบว่าใส่ถูกต้องหรือเปล่า 
หรือถ้ายังมีปัญหาอยู่ก็เข้ามาถามใน [Discord](https://discord.gg/vkW7YMyYaf) ได้เลยนะ