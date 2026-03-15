---
title: เขียนคำสั่งแรก
---

ใน Dashboard สามารถเพิ่มคำสั่งที่สร้างขึ้นเองได้ผ่านหน้า **Custom Commands** โค้ดเขียนเป็น JavaScript และทำงานได้ทุกแพลตฟอร์มที่มะนาวรองรับในคราวเดียว

:::tip
คัดลอกหน้านี้ทั้งหมดไปให้ AI ช่วยเขียนได้เลย ไม่ต้องเขียนเองทุกอย่าง
:::

![](https://r2.otternoon.com/manao5-custom-command.png)

---

### Context ที่ใช้งานได้

มะนาวรัน custom command ในสภาพแวดล้อมที่มี `context` และ `args` ให้ใช้:

```ts
// ข้อมูลผู้ใช้
context.user.name                // ชื่อผู้ใช้
context.user.id                  // Manao User ID (ใช้เชื่อมบัญชีข้ามแพลตฟอร์ม)
context.user.platform            // แพลตฟอร์ม ("twitch" | "kick" | "discord" | "youtube")
context.user.platformID          // User ID ของแพลตฟอร์มนั้น ๆ
context.user.roles.isFollower
context.user.roles.isSubscriber
context.user.roles.isVIP
context.user.roles.isModerator
context.user.roles.isBroadcaster

// ข้อมูลทั่วไป
context.channel                  // ชื่อช่อง
context.language                 // ภาษาบอต ("en" | "th")
context.currency                 // ชื่อสกุลเงิน

// ส่งข้อความ
await context.say("...")         // ส่งข้อความในแชท
await context.reply("...")       // ตอบกลับพร้อมแท็กชื่อผู้ใช้
await context.whisper("...")     // ส่งข้อความส่วนตัว (ถ้าแพลตฟอร์มรองรับ)

// อื่น ๆ
await context.lookupUser("name") // ค้นหา user จากชื่อ คืน id หรือ null
context.emit("event", data)      // ส่ง event ไปยัง overlay

// อาร์กิวเมนต์ที่ผู้ใช้พิมพ์มา
args[0], args[1], ...            // เช่น !hello โลก → args[0] = "โลก"
```

---

### การตอบกลับอย่างง่าย

**`!hello [name]`** — ทักทายผู้ใช้

```javascript
const name = args[0] || `@${context.user.name}`;
await context.say(`สวัสดี ${name}!`);
```

**`!roll`** — ทอยลูกเต๋า

```javascript
const result = Math.ceil(Math.random() * 6);
await context.say(`🎲 ได้เลข: ${result}`);
```

**`!dish`** — สุ่มรายชื่ออาหาร

```javascript
const dishes = ["ข้าวกะเพรา", "ผัดไทย", "ข้าวซอย", "ข้าวเหนียวมะม่วง"];
const dish = dishes[Math.floor(Math.random() * dishes.length)];
await context.say(`🍲 วันนี้กิน: ${dish}!`);
```

---

### การจัดการยอดเงิน

**`!transfer <user> <amount>`** — โอนเงินให้ผู้ใช้อื่น

```javascript
const targetName = args[0];
const amount = parseInt(args[1], 10);

if (!targetName || isNaN(amount) || amount <= 0) {
  await context.reply("วิธีใช้: !transfer <ชื่อผู้ใช้> <จำนวน>");
  return;
}

const targetId = await context.lookupUser(targetName);
if (!targetId) {
  await context.reply(`ไม่พบผู้ใช้ ${targetName}`);
  return;
}

// ใช้ context.emit เพื่อส่งข้อมูลไปยัง overlay หรือ event handler อื่น
context.emit("transfer", {
  from: context.user.id,
  to: targetId,
  amount,
});

await context.reply(`โอน ${amount} ${context.currency} ให้ @${targetName} เรียบร้อย`);
```

---

### มินิเกม

**`!rps <ค้อน/กระดาษ/กรรไกร>`** — เป่ายิ้งฉุบ

```javascript
const map = { "ค้อน": "rock", "กระดาษ": "paper", "กรรไกร": "scissors" };
const revMap = { "rock": "ค้อน", "paper": "กระดาษ", "scissors": "กรรไกร" };
const choices = ["rock", "paper", "scissors"];

const userChoice = map[args[0]];
if (!userChoice) {
  await context.reply("วิธีใช้: !rps [ค้อน/กระดาษ/กรรไกร]");
  return;
}

const botChoice = choices[Math.floor(Math.random() * choices.length)];
let result = "เสมอ!";
if (
  (userChoice === "rock" && botChoice === "scissors") ||
  (userChoice === "paper" && botChoice === "rock") ||
  (userChoice === "scissors" && botChoice === "paper")
) result = "ชนะ! 🎉";
else if (userChoice !== botChoice) result = "แพ้! 😢";

await context.say(`✊✋✌️ ${context.user.name} เลือก ${args[0]}, บอตเลือก ${revMap[botChoice]}. ${result}`);
```
