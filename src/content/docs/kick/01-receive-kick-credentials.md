---
title: รับข้อมูลของบอต
---

ก่อนที่บอตจะเริ่มแชทได้ มันต้องมีช่องทางในการล็อกอินก่อน โดย Kick เนี่ยกำหนดให้บอตใช้สิ่งที่เรียกว่า Client ID และ Client Secret ในการขออนุญาต
ให้บอตเราเชื่อมต่อกับ Kick ได้ และต้องบอกด้วยว่าบอตของเราจะมีสิทธิ์ในการทำอะไรบ้าง เช่น ส่งข้อความ (chat:write), แบนผู้ใช้ (moderator:ban), หรืออื่น ๆ ซึ่งสิทธิ์พวกนี้เรา
จะเรียกว่า Scopes นั่นเอง

หลังจากเราอนุญาตในหน้าเว็บเรียบร้อย Kick จะออกรหัสชั่วคราวที่เรียกว่า Access Token ซึ่งตัวนี้แหละ ที่บอตของเราจะใช้คุยกับ Kick ได้

ทั้งหมดที่กล่าวมาเนี่ย ในภาษาเทคนิคเนิร์ด ๆ เนี่ยเขาเรียกกันว่า "OAuth 2.0 Authorization Code Flow"
ซึ่งเป็นมาตรฐานที่ใช้กันทั่วโลกในการให้แอพพลิเคชันเข้าถึงข้อมูลหรือบริการ ของผู้ใช้โดยไม่ต้องเปิดเผยรหัสผ่านจริง ๆ ของผู้ใช้

โอเค เกริ่นมาเยอะแล้ว มาเริ่มกันเลยดีกว่า!

---

### 1. สร้างแอพพลิเคชัน

มะนาวคือแอพพลิเคชั่นหนึ่งของ Kick ซึ่งเราต้องสร้างแอพฯ ขึ้นมาก่อน ทำตามนี้เลย

1. ล็อกอินเข้า [Kick.com](https://kick.com/)
2. ไปที่หน้าการตั้งค่า [Settings](https://kick.com/settings)
3. คลิกที่แท็บ **["Developer"](https://kick.com/settings/developer)** ที่อยู่ในเมนูด้านซ้าย
4. คลิกปุ่ม **["Create new"](https://kick.com/settings/developer?action=create)** ที่มุมบนขวา
5. ตั้งค่าตามนี้เลย
- **Name**: ตั้งชื่ออะไรก็ได้ โดยชื่อนี้จะเป็นชื่อของบอตที่โชว์ในแชท
- **Description**: เขียนอะไรไปก็ได้
- **Redirect URI**: ใส่ `http://localhost:3002/callback` ตามนี้เป๊ะ ๆ เลยนะ
- **Enable Webhooks**: ให้กดเปิด ใส่ `http://localhost:5000` ไปก่อน
- **Scope Requested**: กดทุกอัน
6. กด "Create App" เท่านี้ก็เสร็จแล้วจ้า

ถ้าเสร็จแล้ว จะขึ้นหน้าต่างแอพพลิเคชั่นประมาณนี้นะ

![](https://github.com/user-attachments/assets/765bdcf0-8b6f-4678-9e5a-44af6e2e45a1)

ให้เราก๊อป Client ID และ Client Secret เก็บไว้ก่อน เดี๋ยวจะใช้ตอนตั้งค่าบอตต่อไปน้าจ้า

---

### 2. ตั้งค่าบอตใน Manao

ให้กด `⊞ Win` + `R` แล้วพิมพ์ `powershell -NoExit -Command "Set-Location -Path $env:MANAO_PATH"` แล้วกด Enter
จะมีหน้าต่าง PowerShell เด้งขึ้นมา ให้พิมพ์คำสั่งนี้แล้วกด Enter:
```powershell
bun optsetup
```

จะขึ้นหน้าตาประมาณนี้
```terminaloutput
⟦◄ ManaoBot v4.0.0 - Configuration ►⟧
? Do you want to enable Manao Discord Bot? (Y/n)
```

ให้กด n แล้วกด Enter ได้เลย

จากนั้นมันจะถามว่า
```terminaloutput
? Do you want to enable Manao Kick Bot? (Y/n)
```

ให้กด Enter ได้เลย

จากนั้นมันจะขึ้นข้อความนี้
```terminaloutput
⚠ To enable Kick integration, you need to create a Kick Application and get its Client ID and Client Secret. Read the guide below:
→ English: https://manaobot.netlify.app/en/kick/00-getting-started/
→ Thai: https://manaobot.netlify./kick/00-getting-started/
? Enter your Kick Client ID (Leave blank for unchanged)
```

ให้เอา **Client ID** ที่ได้จากหน้าแอพพลิเคชั่นของ Kick มาใส่ตรงนี้ แล้วกด Enter

ต่อไป
```terminaloutput
? Enter your Kick Client Secret (Leave blank for unchanged) [input is masked]
```

ให้เอา **Client Secret** ที่ได้จากหน้าแอพพลิเคชั่นของ Kick มาใส่ตรงนี้ แล้วกด Enter (มันจะไม่โชว์รหัสที่พิมพ์นะ ไม่ต้องตกใจ กด Enter ได้เลย)

หลังจากนั้น มะนาวจะพาเราไปที่หน้าเว็บของ Kick เพื่อขออนุญาตให้บอตของเราสามารถเชื่อมต่อกับ Kick ได้ ให้กด "Authorize" ได้เลย
ถ้ามันเสร็จแล้ว จะขึ้นว่า

```terminaloutput
Authorization successful.
```

ปิดหน้าต่าง แค่นี้ก็เรียบร้อยแล้วจ้า!

---

ทุกอย่างเหมือนจะเรียบร้อย แต่ยังไม่จบนะ คู่มือต่อไปสอนการตั้งค่า ngrok อ่านต่อได้เลยครับ

