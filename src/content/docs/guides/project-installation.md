---
title: ติดตั้งโปรเจกต์
---

เมื่อได้ **Client ID** และ **Client Secret** แล้ว ก็เริ่มดาวน์โหลดมะนาวได้เลย!

---

### ขั้นตอนการติดตั้ง (Windows)

เปิด PowerShell โดยกดปุ่ม Windows แล้วพิมพ์ "powershell" แล้วกด Enter
จากนั้นจะมีหน้าต่างเด้งขึ้นมา ให้พิมพ์คำสั่งนี้เพื่อโหลดไฟล์ติดตั้งจาก GitHub
```powershell
iwr -Uri https://raw.githubusercontent.com/mymanao/Manao/refs/heads/main/tools/installer.ps1 | iex
```

เมื่อรันคำสั่งแล้ว จะมีหน้าต่าง ManaoBot Manager เด้งขึ้นมาให้เลือกการดำเนินการ

- **Install / Update** — ติดตั้งหรืออัปเดต ManaoBot
- **Run Setup** — รันสคริปต์ตั้งค่า
- **Uninstall** — ถอนการติดตั้ง ManaoBot

### การติดตั้งครั้งแรก

1. เลือก **Install / Update**
2. หากยังไม่มี Git, Bun หรือ Twitch CLI ติดตั้งอยู่ในเครื่อง โปรแกรมจะถามว่าต้องการติดตั้งให้อัตโนมัติหรือไม่
3. เลือกเวอร์ชันที่ต้องการติดตั้ง
4. โปรแกรมจะดาวน์โหลดและติดตั้ง ManaoBot ไปที่ `%USERPROFILE%\ManaoBot` โดยอัตโนมัติ
5. เมื่อติดตั้งเสร็จ จะมี shortcut **ManaoBot** และ **ManaoBot Setup** ถูกสร้างบน Desktop และ Start Menu
6. โปรแกรมจะถามว่าต้องการรัน Setup ทันทีหรือไม่ หากยังไม่เคยตั้งค่า ให้เลือก **Yes**

### การถอนการติดตั้ง

1. รันคำสั่งเดิมใน PowerShell แล้วเลือก **Uninstall**
2. โปรแกรมจะถามว่าต้องการบันทึกไฟล์ config ก่อนลบหรือไม่ หากต้องการเก็บข้อมูลไว้ให้เลือก **Yes** ไฟล์จะถูกบันทึกไว้ที่ `%USERPROFILE%\ManaoBot-backup`
3. ยืนยันการลบสองครั้ง จากนั้น ManaoBot และ shortcut ทั้งหมดจะถูกลบออกจากเครื่อง

---

### ขั้นตอนการติดตั้ง (MacOS/Linux)

เปิด console แล้วโหลดไฟล์ INSTALLER.sh จาก GitHub ตามคำสั่งนี้
```bash
curl -O https://raw.githubusercontent.com/tinarskii/Manao/refs/heads/main/tools/installer.sh 
```

จากนั้นให้รันไฟล์นี้ด้วยคำสั่ง
```bash
chmod +x installer.sh && ./installer.sh
```

เมื่อรันสคริปต์แล้ว จะมีหน้าต่าง ManaoBot Manager เด้งขึ้นมาให้เลือกการดำเนินการ

- **Install / Update** — ติดตั้งหรืออัปเดต ManaoBot
- **Run Setup** — รันสคริปต์ตั้งค่า
- **Uninstall** — ถอนการติดตั้ง ManaoBot

### การติดตั้งครั้งแรก

1. เลือก **Install / Update**
2. หากยังไม่มี jq หรือ Git ติดตั้งอยู่ในเครื่อง โปรแกรมจะถามว่าต้องการติดตั้งให้อัตโนมัติหรือไม่
3. หากยังไม่มี Bun โปรแกรมจะดาวน์โหลดและติดตั้งให้อัตโนมัติ
4. เลือกเวอร์ชันที่ต้องการติดตั้ง
5. โปรแกรมจะดาวน์โหลดและติดตั้ง ManaoBot ไปที่ `~/ManaoBot` โดยอัตโนมัติ
6. เมื่อติดตั้งเสร็จ จะมี shortcut **ManaoBot** และ **ManaoBot Setup** ถูกสร้างบน Desktop และ App Menu
7. โปรแกรมจะถามว่าต้องการรัน Setup ทันทีหรือไม่ หากยังไม่เคยตั้งค่า ให้เลือก **Yes**

### การถอนการติดตั้ง

1. รันสคริปต์อีกครั้งแล้วเลือก **Uninstall**
2. โปรแกรมจะถามว่าต้องการบันทึกไฟล์ config ก่อนลบหรือไม่ หากต้องการเก็บข้อมูลไว้ให้เลือก **Yes** ไฟล์จะถูกบันทึกไว้ที่ `~/ManaoBot-backup`
3. ยืนยันการลบสองครั้ง จากนั้น ManaoBot และ shortcut ทั้งหมดจะถูกลบออกจากเครื่อง

:::note
Script ไม่ติดตั้ง twitch-cli มาให้ โดยต้องติดตั้งเองผ่าน Homebrew
```bash
brew install twitch-cli
```
ถ้าไม่มี Homebrew ให้ไปที่ https://brew.sh/ แล้วทำตามขั้นตอนการติดตั้ง Homebrew ได้เลย

สำหรับข้อมูลเพิ่มเติม ให้อ่านหน้าเว็บนี้ได้เลย https://dev.twitch.tv/docs/cli/
:::