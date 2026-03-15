---
title: Getting Started
---

Manao v5 supports **YouTube**! The bot can read messages from YouTube Live chat and respond just like on Twitch and Kick.

:::note
This guide assumes ManaoBot is already installed and running. If not, read the [Getting Started guide](/en/guides/getting-started/) first.
:::

---

### Requirements

- A Google account linked to the YouTube channel you stream on
- Access to [Google Cloud Console](https://console.cloud.google.com)

---

### Limitations

YouTube has no WebSocket API, so Manao uses **polling** — fetching messages every 5–15 seconds. Commands from YouTube chat will have more delay compared to other platforms.

:::note
The bot only starts reading chat when there is an **active live broadcast**. If you're not live, it retries every 60 seconds.
:::
