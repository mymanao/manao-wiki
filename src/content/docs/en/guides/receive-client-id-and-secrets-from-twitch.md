---
title: Get Client ID and Client Secret from Twitch
---

Before we can chat or follow someone on Twitch, we need to log in to our account first. A bot is no different. Just like a normal user has a username and password, a bot needs a **Client ID** and **Client Secret**.

This guide will show you how to obtain your Client ID and Client Secret from Twitch.

---

### Log in to the Twitch Developer Portal

This step is simple. Go to the [Twitch Developer Portal](https://dev.twitch.tv/) and log in.

The account you use to create the Client ID and Client Secret will be the same account your bot uses to interact in chat. It can be the same account you use for streaming.

:::caution
The account used by the bot must have Two-Factor Authentication (2FA) enabled. If you don’t have it enabled, read [Setting Up Two-Factor Authentication (2FA)](https://help.twitch.tv/s/article/two-factor-authentication?language=en_US)
:::

---

### Register a Twitch Application

Go to the [Application Registration Page](https://dev.twitch.tv/console/apps/create). This is where you create an application that allows your bot to interact with Twitch.

Fill in the form as follows:

- **Name**: Any unique name (must not duplicate another app name)
- **OAuth Redirect URLs**: `http://localhost:3000` only  
  (Must be `http`, not `https`, and no trailing `/`)
- **Category**: Select `Chat Bot`
- **Client Type**: Choose `Confidential` (no need to change)

Click the "Create" button at the bottom.

If everything is correct, you’ll be redirected to the [Developer Applications](https://dev.twitch.tv/console/apps) page, where you should see your newly created app.

---

### Get Client ID and Client Secret

On the [Developer Applications](https://dev.twitch.tv/console/apps) page, click the "Manage" button on your app.

Scroll to the bottom of the page. You’ll see your **Client ID** and **Client Secret**.

Click "New Secret" and save it somewhere safe. You won’t be able to view it again later.

:::danger
**Very important**: Never share your Client ID or Client Secret with anyone. Keep them private and secure.
:::