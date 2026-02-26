---
title: Making the Bot Online
---

This page isn’t hard at all. Even a kindergartener can do it. Seriously. You just need to tweak the config file a little.

---

### What is the .env file?

Before we start, you need to know what the **".env"** file is.

It’s the file that stores all the important information for your bot — tokens, passwords, and various settings like which features you want to enable.

This file is extremely important. **Never share it with anyone.**

It will be created automatically when you run the installer and complete the setup. If it’s missing, just run the installer again (open your ManaoBot folder, go to the `tools/windows` folder, and open the `INSTALLER.bat` file).

---

### Setup Steps

Follow these steps one by one. No need to rush.

#### 1. Open the ManaoBot folder

Open the folder where you installed ManaoBot.

If you don’t know where it is, press `⊞ Win` + `R`, then type:

```

powershell -NoExit -Command "Set-Location -Path $env:MANAO_PATH"

````

Press Enter, and it will take you straight to that folder.

#### 2. Run the optional feature setup

Once PowerShell is open, type this command and press Enter:

```powershell
bun optsetup
````

You’ll see something like this:

```terminaloutput
⟦◄ ManaoBot v4.0.0 - Configuration ►⟧
? Do you want to enable Manao Discord Bot? (Y/n)
```

Just press Enter.

#### 3. Enter the Bot Token

Then it will show:

```terminaloutput
⟦◄ ManaoBot v4.0.0 - Configuration ►⟧
√ Do you want to enable Manao Discord Bot? Yes
⚠ To enable Discord integration, you need to create a Discord Bot and get its token. Read the guide below:
→ English: https://manaobot.netlify.app/en/discord/00-getting-started/
→ Thai: https://manaobot.netlify./discord/00-getting-started/
? Enter your Discord Bot Token (Leave blank for unchanged) [input is masked]
```

Take the **Bot Token** you got from the [Discord Developer Portal](https://discord.com/developers/applications) and paste it here, then press Enter.

(It won’t show the token while you type. Don’t panic. Just press Enter.)

After that, it will ask:

```terminaloutput
? Do you want to enable Manao Kick Bot? (Y/n)
```

Type `n` and press Enter.

#### 4. All done 🎉

That’s it. You’re done. You can run ManaoBot now!

If it doesn’t work, double-check that your token is correct.
If you’re still having issues, feel free to ask in [Discord](https://discord.gg/vkW7YMyYaf).
