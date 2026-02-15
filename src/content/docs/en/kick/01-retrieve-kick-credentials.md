---
title: Retrieve Kick Credentials
---

Before your bot can start chatting, it needs a way to log in. Kick requires bots to use something called a **Client ID** and **Client Secret** to request permission to connect.

You also need to specify what your bot is allowed to do, such as sending messages (`chat:write`), banning users (`moderation:ban`), and so on. These permissions are called **Scopes**.

After you authorize the app on the web page, Kick will issue a temporary credential called an **Access Token**. This is what your bot will use to communicate with Kick.

All of this, in nerd language, is called **OAuth 2.0 Authorization Code Flow** — a global standard that allows applications to access user data or services without exposing the user’s actual password.

Alright, enough introduction. Let’s get started.

---

### 1. Create an Application

Manao is an application on Kick, so we need to create one first. Follow these steps:

1. Log in to [Kick.com](https://kick.com/)
2. Go to [Settings](https://kick.com/settings)
3. Click the **["Developer"](https://kick.com/settings/developer)** tab in the left menu
4. Click **["Create new"](https://kick.com/settings/developer?action=create)** in the top right corner
5. Configure it as follows:
    - **Name**: Choose any name. This will be the name shown in chat.
    - **Description**: Write anything you want.
    - **Redirect URI**: Enter `http://localhost:3002/callback` exactly as shown.
    - **Enable Webhooks**: Turn it on and enter `http://localhost:5000` for now.
    - **Scope Requested**: Select all scopes.
6. Click **"Create App"** and you’re done.

After that, you’ll see an application page similar to this:

![](https://github.com/user-attachments/assets/765bdcf0-8b6f-4678-9e5a-44af6e2e45a1)

Copy your **Client ID** and **Client Secret** and keep them safe — you’ll need them in the next step.

---

### 2. Configure the Bot in Manao

Press `⊞ Win` + `R`, then type:

```

powershell -NoExit -Command "Set-Location -Path $env:MANAO_PATH"

````

Press Enter. A PowerShell window will open.

Now type:

```powershell
bun optsetup
````

You’ll see something like this:

```terminaloutput
⟦◄ ManaoBot v4.0.0 - Configuration ►⟧
? Do you want to enable Manao Discord Bot? (Y/n)
```

Type `n` and press Enter.

Then it will ask:

```terminaloutput
? Do you want to enable Manao Kick Bot? (Y/n)
```

Just press Enter.

Next, you’ll see:

```terminaloutput
⚠ To enable Kick integration, you need to create a Kick Application and get its Client ID and Client Secret. Read the guide below:
→ English: https://manaobot.netlify.app/en/kick/00-getting-started/
→ Thai: https://manaobot.netlify.app/th/kick/00-getting-started/
? Enter your Kick Client ID (Leave blank for unchanged)
```

Enter the **Client ID** you copied from the Kick application page, then press Enter.

Then:

```terminaloutput
? Enter your Kick Client Secret (Leave blank for unchanged) [input is masked]
```

Enter your **Client Secret** and press Enter.
(It won’t show what you type — don’t panic. Just press Enter.)

After that, Manao will open a Kick web page asking you to authorize the bot. Click **"Authorize"**.

If everything works, you’ll see:

```terminaloutput
Authorization successful.
```

You can close the window. That’s it!

---

Everything looks ready — but we’re not done yet.

The next guide will walk you through setting up **ngrok**. Keep reading.
