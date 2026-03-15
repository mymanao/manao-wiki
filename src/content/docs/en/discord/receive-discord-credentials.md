---
title: Receive Bot Token from Discord
---

Before the bot can join a server and start chatting, it needs a way to log in. Discord bots use something called a **Bot Token** to sign in and function.

This guide will walk you through every step — from creating the bot to getting the token, all the way to inviting it to your server. Trust me, it's not hard. I wrote so much, the least you can do is read it.

---

### Create an Application

Before we can have a bot, we need to create an application in Discord first. Just follow these steps — no need to overthink it.

1. Log in to the [Discord Developer Portal](https://discord.com/developers/applications) using your regular Discord account — no need to worry.
2. Once logged in, click the **"New Application"** button in the top right corner of the page.
3. A window will pop up asking you to set a name. Name it anything — but note that this isn't the bot's display name in Discord, it's just the application name.
4. Click **"Create"** and you're done.

:::caution
**Please read**
To create an application, your account must have Two-Factor Authentication (2FA) enabled first. If you don't know how to enable it, read [Using the Authenticator App on Discord](https://support.discord.com/hc/en-us/articles/26304482627095).
:::

---

### Create a Bot Account

Right now we only have an empty application. We need to add an actual bot user to it. Follow these steps:

1. In the **"Application"** page you just created, look at the settings menu on the left side.
2. Click the **"Bot"** tab (the one with the robot head icon).

On this page you can also customize the bot's profile — such as its profile picture, display name, and more.

---

### Get the Bot Token and Client ID

Now we're at the important part — getting the **Client ID** and **Bot Token**, which we'll use to configure the bot.

#### Part A: Getting the Client ID (Public ID)

The Client ID isn't secret at all — anyone can see it — and we'll need it during bot setup.

1. In the settings menu on the left, click **"General Information"** (the very first tab).
2. You'll see a field labeled **"Application ID"**.
3. Copy it and keep it somewhere — or come back for it later when we create the invite link.

#### Part B: Getting the Bot Token

The Bot Token is the critical piece of data for the bot. If someone else gets it, they can fully control your bot — 100%. So **keep it safe**.

1. Go back to the **"Bot"** tab.
2. Click the **"Reset Token"** button below the bot information.
3. A 2FA window may pop up (if you have 2FA enabled) — enter the code from your Authenticator app.
4. A long string of letters and numbers will appear. **This is your Bot Token.**
5. Click "Copy" and **store this token somewhere safe immediately** — once you leave this page, **you can never view this token again!** If you lose it, you'll have to click Reset to generate a new one.

:::danger
**Repeat: This is extremely important!** 🚨
Your Bot Token is like a secret password.
Anyone who gets it can take full control of your bot.
Never post it on GitHub or anywhere public.

Keep it close and guard it well.
Once it leaks, your bot is compromised.
:::

---

### Invite the Bot to Your Server

The bot is ready — but it doesn't have a home yet. You need to invite it to a server first. Here's how:

1. In the settings menu, click the **"OAuth2"** tab.
2. A submenu will appear — click **"URL Generator"**.
3. You'll see a box labeled "Scopes" — this tells Discord what the link is for. Check **`bot`**.
4. The moment you check `bot`, a new box called "Bot Permissions" will appear below. This is important.
5. This list controls what the bot is allowed to do. For a basic chat bot, if you're not sure, just check **`Administrator`** at the top.
6. As you select permissions, look at the very bottom of the page — you'll see a **"Generated URL"** being built.
7. Once you've selected all the permissions you need, copy that URL.
8. Paste it in a new browser tab — it will take you to the familiar Discord bot invite page. Select the server you want to add the bot to and click "Authorize".
9. Check the member list to see if the bot has appeared. If it has, you're done!

Done — but the bot isn't online yet. Read the next page to continue.
