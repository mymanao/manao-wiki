---
title: Receive Kick Credentials
---

Manao needs a **Client ID** and **Client Secret** from Kick to authenticate the bot.

---

### Create an Application

1. Log in to [Kick.com](https://kick.com/)
2. Go to [Settings → Developer](https://kick.com/settings/developer)
3. Click **Create new**
4. Fill in:
   - **Name**: Any name (this will be the bot's display name in chat)
   - **Description**: Anything
   - **Redirect URI**: `http://localhost:3002/callback` — exactly as shown
   - **Enable Webhooks**: Turn on, then enter `http://[YOUR_NGROK_DOMAIN]/kick/webhooks` ([See Ngrok setup](/en/kick/setup-ngrok))
   - **Scope Requested**: Check all
5. Click **Create App**

Copy the **Client ID** and **Client Secret** — you'll need them in the Setup Wizard.

![](/manao-kickdev.png)

---

### Setup Wizard

Open the Setup Wizard at `http://localhost:4000`, go to the **Kick** page, then:

1. Enable **Enable Kick**
2. Enter **Client ID** and **Client Secret**
3. Enter **Ngrok Authtoken** and **Ngrok Domain** ([See Ngrok setup](/en/kick/setup-ngrok))
4. Click **Authorize Kick Account** — Manao opens a browser window automatically
5. Once the browser shows ✅, click **Next**
