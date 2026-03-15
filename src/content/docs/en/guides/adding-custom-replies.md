---
title: Adding Custom Replies
---

**Custom Replies** let you configure the bot to automatically reply to messages in chat when it detects a specified keyword or phrase. This guide will walk you through adding auto-replies — easy enough, and if it's too hard, no worries haha.
Works across all platforms!

![](https://r2.otternoon.com/manao5-custom-replies.png)

---

### Adding an Auto-Reply

To create an auto-reply, follow these steps:

1. Go to the **Custom Replies Manager** page

2. Click the `Add Reply` button at the top-right of the table

3. Fill in the details:

  * **Keyword Type**: Choose how to match messages

    * `includes`: Reply when the message *contains* the keyword (e.g. includes "chicken" → "chicken wings", "chicken nuggets" both qualify)
    * `equals`: Reply only when the message *exactly matches* the keyword (e.g. equals "chicken" → only "chicken" qualifies, not "chicken wings")
  * **Keywords**: The words or phrases you want the bot to respond to
  * **Response Type**: Choose how to reply

    * `random`: Pick a reply at random
    * `sequence`: Reply in order, cycling back to the start when the end is reached
  * **Responses**: The messages the bot will send when a keyword is matched (separate multiple responses with commas)

4. Click `Save` to save the new reply

> You can edit or delete existing replies using the buttons in the table.

---

### Testing Custom Replies

After saving, test it by sending a message in chat:

1. Type a message matching the Keywords you set
2. The bot will automatically respond with the configured reply
3. For `sequence` Response Type, send the message multiple times — you'll see the replies cycle in order

---

### Tips & Troubleshooting

* **Instant update**: Changes in the Custom Replies Manager take effect immediately — no need to restart Manao
* **Case-insensitive**: Keyword matching is not case-sensitive
* **Multiple keywords**: You can have multiple keywords trigger the same set of responses
* **Empty responses**: Make sure Responses aren't empty, otherwise the bot won't reply

If the bot isn't replying:

1. Check that the bot is connected to the correct Twitch channel
2. Verify the message and Keywords match
3. Check that the bot account has permission to send messages in chat
4. If you're still having issues, ask for help in our [Discord](https://discord.gg/vkW7YMyYaf)
