---
title: Setup Ngrok
---

For the bot to read messages in chat, Kick needs to be able to send data to it. Here's how it works: when someone sends a message in chat, Kick detects it and forwards the data to the bot's server, which is listening for incoming data in real-time.

The problem is that Kick has no way to reach the bot's server directly — because the bot runs on your local machine, which can't be accessed from the outside internet (technically, it's behind NAT).
So we need an intermediary to relay data from Kick to the local bot server. That intermediary is **Ngrok**.

All of this is how "Webhooks" work — the method Kick uses to send events and data to the bot.

Alright, enough theory. Let's get started.

---

### Sign Up and Install ngrok

#### Create an account

1. Go to https://ngrok.com/
2. Sign up for an account
3. Log in to the Dashboard

After logging in, go to:
**[Getting Started / Your Authtoken](https://dashboard.ngrok.com/get-started/your-authtoken)**

You'll see a value called **Authtoken**.
Copy it and keep it — you'll need it. This is your `NGROK_AUTHTOKEN`.

---

### Create an ngrok Domain

Go to the ngrok [Dashboard](https://dashboard.ngrok.com/) and navigate to the **[Domains](https://dashboard.ngrok.com/domains)** menu.

![](https://r2.otternoon.com/manao5-ngrok.png)

Copy the value in the "Domain" field (in the screenshot it's `topical-goshawk-leading.ngrok-free.app`).
This is your `NGROK_DOMAIN`.

---

Almost done — read the next guide to continue!
