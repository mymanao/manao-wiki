---
title: Using the Dashboard
---

Once ManaoBot is running, a Dashboard window will open in your browser. You can also access it at `http://localhost:3000`. This is the central hub for managing your bot — you can check statuses and adjust settings from here.

:::tip[Open on another device]
If you want to open the Dashboard on another device connected to the same network, use the IP address of the machine running Manao instead of `localhost`.

When Manao starts, it will display the IP address — for example, `http://192.168.1.199:4600`. Use this link to open it on another device (must be on the same Wi-Fi).
:::

![](https://r2.otternoon.com/manao-dashboard.png)

---

### Commands

Enable/disable commands and create custom ones. See [Writing your First Custom Command](/en/guides/writing-your-first-custom-command) for details.

---

### Soundboard

Trigger sound effects that play in the Sound Overlay, which can be added to OBS easily. See [Adding Overlays in OBS](/en/guides/adding-overlays-in-obs) for instructions.

**Adding new sounds**

1. Place audio files in the `server/public/sounds/` folder inside your Manao directory
2. Go to the Soundboard page and click **Add Sound**
3. Set a name and enter the URL as `/sounds/[filename].[extension]`, e.g. `/sounds/vine-boom.mp3`

You can also use an external audio link, e.g. `https://www.myinstants.com/media/sounds/taco-bell.mp3`

---

### Song Queue

View and manage the song queue. Skip or remove songs requested by viewers.

---

### Config

Adjust bot settings without editing files.

**General**
- **Language**: The language the bot will use to communicate (`en` / `th`)
- **Currency Name**: Name or emoji used as the channel currency (e.g. `COIN`, `🪙`)

**Command Prefixes**
- Set the prefix separately for each platform (Twitch, Kick, Discord, YouTube). Default is `!`

**Chat Rewards**

Configure the currency viewers earn just by chatting. Can be set separately per platform:

- **Min / Max**: The currency range a viewer can earn (e.g. 1–4)
- **Chance**: Percentage chance of earning currency (e.g. 50 means a 50% chance of earning between 1–4 when chatting)
- **Cooldown (s)**: Time in seconds before a viewer can earn currency again (e.g. 60 means they must wait 60 seconds after earning before being eligible again)

**Custom Messages**

Customize messages Manao sends when events occur. Supports EN/TH: `onFollow`, `onSubscribe`, `onGiftSubscribe`, `onRaid`, `onCheer`.
Use `[user]` for the viewer's name and `[viewers]` for the number of raiders.

- **onFollow**: Message sent when someone new follows
- **onSubscribe**: Message sent when someone subscribes
- **onGiftSubscribe**: Message sent when someone gifts a sub
- **onRaid**: Message sent when someone raids the channel
- **onCheer**: Message sent when someone cheers with bits

---

### Overlay Settings

Customize overlay themes from this page. See [Adding Overlays in OBS](/en/guides/adding-overlays-in-obs) for details.

---

### Managers

This section has sub-pages for:
- **Custom Commands**: Create/edit/delete custom commands
- **Custom Replies**: Set up auto-replies triggered when certain words are typed in chat
- **Channel Points**: Link Twitch channel points to the Soundboard (redeem points to play sounds)
- **Scheduled Messages**: Configure messages that send automatically on a timer (e.g. every 3 minutes to promote social media)
