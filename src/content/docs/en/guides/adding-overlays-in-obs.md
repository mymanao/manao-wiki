---
title: Adding Overlays in OBS
---

After running **ManaoBot**, it's time to add overlays to OBS to make your stream look great.
Many bot commands are tied to overlays too — for example, the `!nickname` command lets viewers set a custom name directly in the chat overlay.

![](https://r2.otternoon.com/manao5-customize-overlay.png)

---

### Available Overlays

| Overlay        | URL                              | Description                                                    |
|:---------------|:---------------------------------|:---------------------------------------------------------------|
| Chat Overlay   | `/overlay/chat`                  | Displays chat from all platforms with custom styling           |
| Feed Overlay   | `/overlay/feed`                  | Shows channel events such as new follows, currency in/out, etc |
| Sound Overlay  | `/overlay/sound`                 | Plays audio from the Soundboard                                |
| Music Overlay  | `/overlay/music`                 | Shows the currently playing song                               |

The full URL is `http://[local-ip]:4600/overlay/chat` etc. (just copy it from your browser)

---

### Adding a Browser Source in OBS

1. In the **Sources** panel, click **+**
2. Select **Browser**
3. Name the source, e.g. `Chat Overlay` or `Music Overlay`
4. Click **OK**

---

### Configuring the Overlay

A properties window will appear. Set the following:

- **URL:** Enter the overlay URL, e.g. `http://localhost:4600/overlay/chat`
- **Width / Height:** Adjust to fit your desired area
- **Shutdown source when not visible:** Recommended to leave **unchecked** so the overlay stays connected when hidden
- **Refresh browser when scene becomes active:** **Check this** so the overlay reloads automatically

:::tip
You don't need to check "Control audio via OBS" for music or soundboard overlays — audio can be controlled directly from the web page.
:::

---

### Customizing Overlays

You can customize the look of overlays from the **Overlay Settings** page in the Dashboard at `http://localhost:4600/customize/overlay`.

- **Chat Overlay**: Choose from themes including Manao v5, Manao Classic, and Lucian. Customize background color, font, size, animations, and custom CSS.
- **Music Overlay**: Choose theme, accent color, background, font, and position (corner: left/right, top/bottom).

---

### Using the Interact Button

The Sound Overlay requires interaction before it can play audio, due to the browser's [autoplay policy](https://developer.chrome.com/blog/autoplay/).

1. In OBS, right-click the Sound Overlay
2. Select **Interact**
3. Click **Unmute** in the window that appears, then close it

You can also use Interact with the Music Overlay to control volume or pause playback:

1. Right-click the Music Overlay
2. Select **Interact**
3. Click the song card — controls will appear at the bottom
4. Adjust volume / pause / skip as needed
5. Click the song card again to hide

---

### If the Overlay Doesn't Appear

1. Make sure **ManaoBot** is running (try opening `http://localhost:4600` in your browser)
2. Check that the URL in OBS matches the correct overlay
3. Try refreshing the overlay by right-clicking → **Refresh Browser Source**
4. If you have a firewall or antivirus, you may need to allow local connections
