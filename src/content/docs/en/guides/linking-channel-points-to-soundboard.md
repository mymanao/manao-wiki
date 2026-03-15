---
title: Linking Channel Points to Soundboard
---

Let viewers redeem Twitch Channel Points to play sound effects. Configure this at Dashboard → **Manager → Channel Points**.

:::note
This feature is **Twitch only**.
:::

![](https://r2.otternoon.com/manao-channel-points.png)

---

### Adding a Channel Point Reward

Click **Add Reward** and fill in:

1. **Name** — Reward name shown in Twitch
2. **Cost** — Points required (default: 100)
3. **Description** — Description shown to viewers when redeeming
4. **Cooldown (s)** — Cooldown duration. Set to `0` for no cooldown.
5. **Sound** — Audio file to play when the reward is redeemed

Click **Save**. Manao creates the reward on Twitch automatically.

---

### Testing

Once configured, add a **Sound Overlay** in OBS at `http://localhost:4600/overlay/sound` first ([see how to add overlays in OBS](/en/guides/adding-overlays-in-obs)), then try redeeming the channel point reward.

If no sound plays, check that:

1. You've clicked **Interact** on the Sound Overlay in OBS ([see how](/en/guides/adding-overlays-in-obs#using-the-interact-button))
2. The audio file actually exists in `server/public/sounds/`
3. The filename matches what was configured

If the issue persists, reach out in our [Discord](https://discord.gg/vkW7YMyYaf).
