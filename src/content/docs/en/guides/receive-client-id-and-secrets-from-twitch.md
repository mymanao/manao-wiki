---
title: Receive Client ID and Secret from Twitch
---

Before the bot can chat or interact on Twitch, it needs to log in first. Just like regular users have a username and password, the bot needs a **Client ID** and **Client Secret**.
This article explains how to get them from Twitch.

---

### Log in to Twitch Developer Portal

Just go to [Twitch Developer Portal](https://dev.twitch.tv/) and log in. The account used to obtain the Client ID and Secret will be the same account the bot uses to interact in chat.
It can be the same account you stream with.

:::caution
The bot's account must have Two-Factor Authentication (2FA) enabled. If you don't have it set up, read [Setting up Two-Factor Authentication (2FA)](https://help.twitch.tv/s/article/two-factor-authentication?language=en_US).
:::

---

### Register a Twitch App

Go to the [Register Application page](https://dev.twitch.tv/console/apps/create). This is where you create an application so the bot can interact with Twitch. Fill in the form as follows:

- Name: Any name that isn't already taken
- OAuth Redirect URLs: Enter `http://localhost:4000/setup/callback/twitch` exactly (must be `http` not `https`, and no trailing `/`)
- Category: Select `Chat bot`
- Client type: Select `Confidential` (leave as default)

![](https://r2.otternoon.com/manao-tw-dev.png)

Click "create" at the bottom of the page.
If everything is correct, you'll be taken to the [Developer Applications](https://dev.twitch.tv/console/apps) page where you'll see the app you just created.

---

### Get Your Client ID and Secret

On the [Developer Applications](https://dev.twitch.tv/console/apps) page, click "Manage" on your app.
Scroll to the very bottom — you'll see "Client ID" and "Client Secret".
Click "New Secret" and save it somewhere safe, because you won't be able to view it again.

:::danger
**Very important**: Never share your Client ID and Secret with anyone!
:::
