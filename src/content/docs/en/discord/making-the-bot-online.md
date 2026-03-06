---
title: Making the Bot Online
---

Before a bot can join a server and start chatting, it needs a way to log in. Discord bots use something called a **Bot Token** to log in and operate. Unlike Twitch or Kick, you don't have to deal with OAuth or scopes. Just create a bot, copy the Token, and paste it into the setup script.

Alright, enough introduction — let's get started!

---

### Create an Application

Before having a bot, you need to create an application in Discord. Follow these steps:

1. Log in to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click the **"New Application"** button in the top-right corner
3. Give it any name you want (this is NOT the bot's display name in servers — it's just the application name)
4. Click **"Create"** and you're done

:::caution
The account used to create the application must have Two-Factor Authentication (2FA) enabled. If you don't know how to enable it, read [Using an Authenticator App on Discord](https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication)
:::

---

### Get the Bot Token

Now for the important part. Follow these steps:

1. In the left sidebar, click the **"Bot"** tab
2. Click **"Reset Token"**
3. Enter your 2FA code if prompted
4. A long string of text will appear — that is your **Bot Token**
5. Click **"Copy"** and store it somewhere safe immediately. Once you leave this page, you won't be able to view it again. If lost, you must reset it.

:::danger
**Important!** Your Bot Token is your bot's secret key. Never share it with anyone. Never post it on GitHub or any public platform. Anyone who gets it can fully control your bot.
:::

---

### Invite the Bot to a Server

Your bot is ready, but it has nowhere to go yet. You need to invite it to a server:

1. In the left sidebar, click **"OAuth2"** and select **"URL Generator"**
2. Under **Scopes**, check **`bot`**
3. Under **Bot Permissions**, check **`Administrator`**
4. Copy the generated URL at the bottom
5. Open the URL in your browser, select your server, and click **"Authorize"**

---

### Configure the Bot in Manao

Open the **ManaoBot Setup** shortcut on your Desktop.

You'll see something like this:

```terminaloutput
⟦◄ ManaoBot v4.1.0 - Configuration ►⟧
? Do you want to setup Manao Twitch Bot? (Y/n)
```

Press `n` then Enter, and keep doing so until you see this question:

```terminaloutput
? Do you want to setup Manao Discord Bot? (Y/n)
```

Press Enter. You'll then see:

```terminaloutput
⚠ To enable Discord integration, you need to create a Discord Bot and get its token. Read the guide below:
→ English: https://manaobot.netlify.app/en/discord/getting-started/
→ Thai: https://manaobot.netlify.app/th/discord/getting-started/
? Enter your Discord Bot Token (Leave blank for unchanged) [input is masked]
```

Enter the **Bot Token** you copied earlier and press Enter.
(It won't show what you type — don't panic. Just press Enter.)

Answer the remaining questions as needed. If you're unsure what something is or don't want to use it, press `n` then Enter to skip. When finished, you'll see:

```terminaloutput
✅ Configuration complete! Your .env file has been created.
```

That's it! You're ready to run ManaoBot.