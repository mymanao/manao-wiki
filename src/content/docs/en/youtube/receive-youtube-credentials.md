---
title: Receive YouTube Credentials
---

Manao uses the **YouTube Data API v3** to read live chat, which requires OAuth 2.0 credentials from Google Cloud Console.

---

### Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click **Select a project → New Project**
3. Name it anything, then click **Create**

---

### Enable YouTube Data API v3

1. Go to **APIs & Services → Library**
2. Search for **YouTube Data API v3**
3. Click **Enable**

---

### Create OAuth 2.0 Credentials

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → OAuth client ID**
3. If prompted, configure the OAuth consent screen first:
   - Select **External**
   - Fill in the app name and your email
   - Click **Save and Continue** through all steps
4. Back at creating credentials, select **Application type: Desktop app**
5. Name it anything, click **Create**
6. Copy the **Client ID** and **Client Secret**

:::danger
Never share your Client Secret with anyone or post it publicly.
:::

---

### Add a Test User

Since the app isn't Google-verified, add yourself as a test user:

1. Go to **APIs & Services → OAuth consent screen**
2. Scroll to **Test users**
3. Click **+ Add users**
4. Add the email of the Google account linked to your YouTube channel
5. Click **Save**

:::tip
You don't need to submit for Google verification — Manao is for personal use only.
:::

---

### Setup Wizard

Enter the **Client ID** and **Client Secret** in the YouTube page of the Setup Wizard and click **Authorize YouTube Account**. A Google login window will open automatically — no redirect URI setup needed.
