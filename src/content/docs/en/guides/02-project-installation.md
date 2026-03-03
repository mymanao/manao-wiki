---
title: Install the Project
---

Once you have your **Client ID** and **Client Secret**, you’re ready to download Manao!

The bot now comes with a simple `.exe` installer for Windows.  
Mac and Linux users — you’ll need to install it yourself. Consider it a badge of honor 🙂

---

### Download the Installer

Download Manao using the links below:

- [ManaoBot Installer for Windows](https://github.com/tinarskii/Manao/releases/download/4.0.0/ManaoBotSetup.exe)
- [ManaoBot Shell Installer Script (MacOS/Linux)](https://raw.githubusercontent.com/tinarskii/Manao/refs/heads/main/tools/linux/INSTALLER.sh)

| File | SHA256 |
|------|--------|
| ManaoBotSetup.exe | `3095cb9b9ff847b2338bac0726ad02a099081aaef6c40360052a4e0ab00f28f5` |
| INSTALLER.sh | `f887329ddc7fe8d133d75feee5122f318b6ffb77f5fa4064b9c0143921071cd5` |

:::note
You can verify the checksum using the following commands:

**Windows (PowerShell)**
```powershell
Get-FileHash ManaoBotSetup.exe -Algorithm SHA256
````

**MacOS/Linux**

```bash
sha256sum INSTALLER.sh
```

Compare the result with the table above. If it matches, the file is safe.
:::

You can also review the installer source code on GitHub and build it yourself if you're concerned about security:

* [installer.iss](https://github.com/tinarskii/Manao/blob/main/tools/windows/installer.iss)
* [INSTALLER.ps1](https://github.com/tinarskii/Manao/blob/main/tools/windows/INSTALLER.ps1)

---

### Installation Steps (Windows)

Installation is simple. After downloading, just open the file and follow the setup wizard.

Click “Next” until it finishes. No need to overthink it.

During installation, you might see a command window pop up.
Don’t worry — it’s safe. The installer uses PowerShell to install required libraries. It’s shown intentionally to make debugging easier.

When installation finishes, make sure “Run powershell.exe” is checked (it usually is by default). This will run the setup script automatically.

---

### Installation Steps (MacOS/Linux)

Open your terminal and download the INSTALLER.sh file using:

```bash
curl -O https://raw.githubusercontent.com/tinarskii/Manao/refs/heads/main/tools/linux/INSTALLER.sh
```

Then run it with:

```bash
bash INSTALLER.sh
```
