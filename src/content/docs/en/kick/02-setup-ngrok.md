---
title: Setup Ngrok
---

If your bot wants to read messages from chat, someone has to send that data to it first — and in this case, that “someone” is Kick’s server.

Here’s how it works:

When someone sends a message in chat, Kick detects the event and sends the relevant data to your bot’s server.  
Your bot’s server is always listening for incoming requests, so it can receive messages in **real-time**.

The problem is: Kick has no way to reach your bot’s server directly.

That’s because your bot is running on your local machine, which cannot be accessed from the outside world (in nerd terms, it’s behind NAT).

So we need an intermediary that allows Kick to send data to our local server.  
That middleman is **ngrok**.

Everything described above is how **Webhooks** work — which is the method Kick uses to send events and data to your bot.

Alright, enough theories. Let’s get started.

---

## 1. Sign Up and Install ngrok

### Create an Account

1. Go to https://ngrok.com/
2. Sign up for an account
3. Log in to the Dashboard

After logging in, go to:

**[Getting Started / Your Authtoken](https://dashboard.ngrok.com/get-started/your-authtoken)**

You’ll see a value called **Authtoken**.  
Copy it and keep it safe — you’ll definitely need it.  
This is your `NGROK_AUTHTOKEN`.

---

## 2. Get Your ngrok Domain

Go to the ngrok **[Dashboard](https://dashboard.ngrok.com/)**  
Then open the **[Domains](https://dashboard.ngrok.com/domains)** menu.

You’ll see something like this:

![](https://github.com/user-attachments/assets/fb961566-04a8-4bba-9edc-2a0a3acb429e)

Copy the value in the “Domain” field  
(for example: `nondiffractively-interungular-angeles.ngrok-free.dev`)

This is your `NGROK_DOMAIN`.

---

## 3. Add Values to the .env File

Now you have two things:

- ngrok domain  
- ngrok authtoken  

Open the `.env` file inside your ManaoBot folder.

Update the `NGROK_DOMAIN` and `NGROK_AUTHTOKEN` values with the ones you copied:

```

NGROK_DOMAIN=yourname.ngrok.app
NGROK_AUTHTOKEN=your_real_authtoken_here

```

Save the file.

---

## 4. Update the Webhook URL in Kick

Remember when we first created the app, we set:

```

http://localhost:5000

```

Now you need to change it to:

```

https://[your-domain]/kick/webhook

```

Go to the Kick **[Developer](https://kick.com/settings/developer)** page, update the Webhook URL, and click Save.

---

If you followed everything correctly, your bot is now ready to run.
