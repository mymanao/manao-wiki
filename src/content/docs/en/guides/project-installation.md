---
title: Install the Project
---

Once you have your **Client ID** and **Client Secret**, you're ready to download Manao!

---

### Installation (Windows)

Open PowerShell by pressing the Windows key, typing "powershell", and pressing Enter.
A terminal window will appear. Run the following command to download the installer from GitHub:

```powershell
iwr -Uri https://raw.githubusercontent.com/mymanao/Manao/refs/heads/main/tools/installer.ps1 | iex
```

Once the command runs, a ManaoBot Manager window will appear with the following options:

- **Install / Update** — Install or update ManaoBot
- **Run Setup** — Run the configuration script
- **Uninstall** — Remove ManaoBot from your machine

### First-time Installation

1. Select **Install / Update**
2. If Git, Bun, or Twitch CLI are not installed, the installer will ask if you want to install them automatically
3. Select the version you want to install
4. ManaoBot will be downloaded and installed to `%USERPROFILE%\ManaoBot` automatically
5. Once complete, **ManaoBot** and **ManaoBot Setup** shortcuts will be created on your Desktop and Start Menu
6. The installer will ask if you want to run Setup immediately — if this is your first time, select **Yes**

### Uninstalling

1. Run the same command in PowerShell and select **Uninstall**
2. The installer will ask if you want to save your config files before removal — select **Yes** to keep your data, which will be saved to `%USERPROFILE%\ManaoBot-backup`
3. Confirm the deletion twice, and ManaoBot along with all its shortcuts will be removed

---

### Installation (macOS/Linux)

Open a terminal and download the installer from GitHub:

```bash
curl -O https://raw.githubusercontent.com/tinarskii/Manao/refs/heads/main/tools/installer.sh
```

Then run the installer with:

```bash
chmod +x installer.sh && ./installer.sh
```

Once the script runs, a ManaoBot Manager window will appear with the following options:

- **Install / Update** — Install or update ManaoBot
- **Run Setup** — Run the configuration script
- **Uninstall** — Remove ManaoBot from your machine

### First-time Installation

1. Select **Install / Update**
2. If jq or Git are not installed, the installer will ask if you want to install them automatically
3. If Bun is not installed, it will be downloaded and installed automatically
4. Select the version you want to install
5. ManaoBot will be downloaded and installed to `~/ManaoBot` automatically
6. Once complete, **ManaoBot** and **ManaoBot Setup** shortcuts will be created on your Desktop and App Menu
7. The installer will ask if you want to run Setup immediately — if this is your first time, select **Yes**

### Uninstalling

1. Run the script again and select **Uninstall**
2. The installer will ask if you want to save your config files before removal — select **Yes** to keep your data, which will be saved to `~/ManaoBot-backup`
3. Confirm the deletion twice, and ManaoBot along with all its shortcuts will be removed

:::note
The script does not install twitch-cli automatically. You will need to install it manually via Homebrew:
```bash
brew install twitch-cli
```
If you don't have Homebrew, visit https://brew.sh/ and follow the installation instructions.

For more information, visit https://dev.twitch.tv/docs/cli/
:::
