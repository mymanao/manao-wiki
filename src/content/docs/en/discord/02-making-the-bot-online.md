---
title: Making the Bot Online
---

This page is super easy. Even a kindergartener can do it. Seriously, you just need to edit a small config file.

---

### What is the .env file?

Before we start, you need to know about the **".env"** file. This file stores all the important data for our bot, like tokens, passwords, and various settings for which features to enable.

This file is extremely important. **NEVER share it with anyone!**

This file is automatically created for you when you run the installer and setup. If you don't have it, run the installer again (open the ManaoBot folder, go to the `tools/windows` folder, and run `INSTALLER.bat`).

---

### Setup Steps

Follow this one step at a time. No need to rush.

#### 1. Open the .env file

1.  Go to the folder where you keep your ManaoBot files.
2.  You will see a file named **".env"**.
3.  Open this file with any program you like, such as Notepad, VS Code, Sublime Text, or whatever came with your computer.

#### 2. Look at the file structure

Once you open it, the file will look something like this (some lines might be different, don't worry about it):

```

# ========================

# TWITCH BOT

# ========================

USE_TWITCH=true
TWITCH_BOT_ACCESS_TOKEN=...
TWITCH_BOT_REFRESH_TOKEN=...

BROADCASTER_ACCESS_TOKEN=...
BROADCASTER_REFRESH_TOKEN=...

TWITCH_BOT_ID=...
BROADCASTER_ID=...
BROADCASTER_CHANNEL=...

TWITCH_CLIENT_ID=...
TWITCH_CLIENT_SECRET=...

# ========================

# DISCORD BOT

# ========================

USE_DISCORD=false
DISCORD_BOT_TOKEN=
DISCORD_CLIENT_ID=
SERVER_ID=

NODE_ENV=

```

#### 3. Enable the Discord Bot

Right now, the bot doesn't know you want to use the Discord bot. Scroll down to the `DISCORD BOT` section.

You'll see a line that says:
`USE_DISCORD=false`

Change `false` to `true`. This will let ManaoBot know it can use the Discord bot.

#### 4. Add the Bot Token

The next line, `DISCORD_BOT_TOKEN=`, tells ManaoBot which bot to use.

1.  Take the **"Bot Token"** you copied from the [Discord Developer Portal](https://discord.com/developers/applications) (from the previous guide) and paste it here.
2.  When you're done, it should look something like this:
    `DISCORD_BOT_TOKEN=AbCdEfG.hIjKlMnOpQrStUvWxYz_THIS_IS_A_FAKE_TOKEN.1234567890`

**I'll say it again:** This token is your bot's password. Do not let it leak out!

---

### 7. Save the file and run the bot

Once you're done editing, **Save** the `.env` file.

Now you can run the bot by going to the ManaoBot folder, opening the `tools/windows` folder, and running `START_MANAO.bat`.

If nothing went wrong, your bot will pop online in Discord immediately.

All done! See? Not hard at all. If the bot doesn't come online, 99% of the time it's because you pasted the wrong token or forgot to change `USE_DISCORD` to `true`. Go back and double-check!
