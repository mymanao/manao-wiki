---
title: Retrieve Discord Credentials
---

Before a bot can join a server and start chatting, it needs a way to log in. Discord bots use something called a **Bot Token** to log in and operate.

This guide will walk you through every step, from creating the bot and getting its token, to inviting it to your server. Trust me, it's not difficult. I spent a long time writing this, so please read it!

---

### 1. Create an Application

Before we can have a bot, we must first create an application in Discord. Just follow these steps; don't overthink it.

1.  Log in to the [Discord Developer Portal](https://discord.com/developers/applications) using your normal Discord account. Don't worry.
2.  Once logged in, click the **"New Application"** button in the top-right corner of the page.
3.  A window will pop up asking for a name. You can name it anything, but this isn't the bot's name that shows in Discord; it's just the application name.
4.  Click the **"Create"** button, and you're done.

:::caution
**Please Read**
To create an application, your account must have Two-Factor Authentication (2FA) enabled. If you don't know how to enable it, read [Using an Authenticator App on Discord](https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication).
:::

---

### 2. Create a Bot Account

Right now, we just have an empty application. We need to add an actual bot user to it. Follow these steps:

1.  On the **"Application"** page you just created, look at the settings menu on the left.
2.  Click on the **"Bot"** tab (the one with the robot head icon).

On this page, you can also customize the bot's profile, such as its profile picture, bot name, and more.

---

### 3. Get the Bot Token and Client ID

We've reached the important part. This is where we'll get the **Client ID** and **Bot Token**, which we'll use to configure our bot.

#### Part A: Getting the Client ID (Public ID)

The Client ID isn't secret. Anyone can see it, and we'll need it when setting up the bot.

1.  In the settings menu on the left, click on **"General Information"** (the very first tab).
2.  You will see a field labeled **"Application ID"**.
3.  Copy it and keep it safe for now, or you can come back for it later when we create the invite link.

#### Part B: Getting the Bot Token

The Bot Token *is* the bot's sensitive information. If someone else gets it, they can control 100% of your bot. So, **keep it safe!**

1.  Go back to the **"Bot"** tab.
2.  Click the **"Reset Token"** button, located below the bot's information.
3.  A 2FA window will pop up (if you have 2FA enabled). Enter the code from your Authenticator app.
4.  After that, a long string of letters and numbers will appear. **This is the Bot Token.**
5.  Click the "Copy" button and **store this token somewhere safe immediately.** Because once you leave this page, **you will not be able to see this token again!** If you lose it, you will have to click "Reset" to generate a new one.

:::danger
**I'll say it again, this is extremely important!** 🚨
The Bot Token is a secret, hidden key.
Whoever knows it holds your bot's destiny.
**NEVER** publish or post it
On GitHub or any public place.

Guard it with your life, like a treasure,
Keep it far from prying eyes.
Protect it well for all of time,
So your bot may remain secure.
:::

---

### 4. Invite the Bot to a Server

The bot is ready, but it has nowhere to go. We need to invite it to a server. Here's how:

1.  In the settings menu, click the **"OAuth2"** tab.
2.  A sub-menu will appear. Click on **"URL Generator"**.
3.  You'll see a box labeled "Scopes." This tells Discord what the link is for. Check the box for **`bot`**.
4.  As soon as you check the `bot` box, a new box named "Bot Permissions" will appear below. This is very important.
5.  This list lets you choose what the bot is allowed to do. For a basic chat bot, if you're not sure, you can just check the **`Administrator`** box at the very top.
6.  As you check the permissions, look at the very bottom of the page. You'll see a **"Generated URL"** being created.
7.  When you've selected all the necessary permissions, copy that generated URL.
8.  Paste that link into a new browser tab. It will take you to the familiar Discord bot invite page. Select the server you want to add the bot to, and click "Authorize."
9.  Check the member list in your server. If the bot has appeared, you're all done!

All done! But the bot isn't online yet. Read the next page to continue!
