---
title: Receive Discord Bot Token
---

Discord bots use a **Bot Token** to authenticate. Unlike Twitch or Kick, there's no OAuth flow — just create a bot, copy the token, and paste it into the Setup Wizard.

---

### Create an Application

1. Log in to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **New Application** in the top right
3. Name it anything (this isn't the bot's display name), then click **Create**

:::caution
Your account must have Two-Factor Authentication (2FA) enabled to create applications. [Learn how](https://support.discord.com/hc/en-us/articles/26304482627095)
:::

---

### Get the Bot Token

1. In the left menu, click the **Bot** tab
2. Click **Reset Token**
3. Enter your 2FA code if prompted
4. A long string will appear — that's your **Bot Token**
5. Click **Copy** and store it somewhere safe — you can't view it again after leaving this page

:::danger
**Never share your Bot Token.** Anyone who has it can fully control your bot.
:::

---

### Invite the Bot to Your Server

1. Go to **OAuth2 → URL Generator** in the left menu
2. Under **Scopes**, check **`bot`**
3. Under **Bot Permissions**, check **`Administrator`**
4. Copy the generated URL at the bottom
5. Open it in your browser, select your server, and click **Authorize**

---

### Setup Wizard

Enter the **Bot Token** in the Discord page of the Setup Wizard and click **Next**.
