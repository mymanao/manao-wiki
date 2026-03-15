---
title: Writing your First Custom Command
---

In the Dashboard you can add custom commands through the **Custom Commands** page. Commands are written in JavaScript and work across all platforms Manao supports at once.

:::tip
You can copy this entire page and paste it to an AI to help you write commands — no need to write everything yourself.
:::

![](https://r2.otternoon.com/manao5-custom-command.png)

---

### Available Context

Manao runs custom commands in an environment that provides `context` and `args` to use:

```ts
// User info
context.user.name                // Display name
context.user.id                  // Manao User ID (used for cross-platform account linking)
context.user.platform            // Platform ("twitch" | "kick" | "discord" | "youtube")
context.user.platformID          // User ID on that specific platform
context.user.roles.isFollower
context.user.roles.isSubscriber
context.user.roles.isVIP
context.user.roles.isModerator
context.user.roles.isBroadcaster

// General
context.channel                  // Channel name
context.language                 // Bot language ("en" | "th")
context.currency                 // Currency name

// Send messages
await context.say("...")         // Send a message in chat
await context.reply("...")       // Reply with the user's name tagged
await context.whisper("...")     // Send a private message (if supported by platform)

// Other
await context.lookupUser("name") // Look up a user by name, returns id or null
context.emit("event", data)      // Send an event to overlays

// Arguments typed by the user
args[0], args[1], ...            // e.g. !hello world → args[0] = "world"
```

---

### Simple Replies

**`!hello [name]`** — Greet a user

```javascript
const name = args[0] || `@${context.user.name}`;
await context.say(`Hello ${name}!`);
```

**`!roll`** — Roll a dice

```javascript
const result = Math.ceil(Math.random() * 6);
await context.say(`🎲 Rolled: ${result}`);
```

**`!dish`** — Random food suggestion

```javascript
const dishes = ["Pad Thai", "Green Curry", "Mango Sticky Rice", "Som Tum"];
const dish = dishes[Math.floor(Math.random() * dishes.length)];
await context.say(`🍲 You should eat: ${dish}!`);
```

---

### Balance Management

**`!transfer <user> <amount>`** — Transfer currency to another user

```javascript
const targetName = args[0];
const amount = parseInt(args[1], 10);

if (!targetName || isNaN(amount) || amount <= 0) {
  await context.reply("Usage: !transfer <username> <amount>");
  return;
}

const targetId = await context.lookupUser(targetName);
if (!targetId) {
  await context.reply(`User ${targetName} not found`);
  return;
}

// Use context.emit to send data to overlays or other event handlers
context.emit("transfer", {
  from: context.user.id,
  to: targetId,
  amount,
});

await context.reply(`Transferred ${amount} ${context.currency} to @${targetName} successfully`);
```

---

### Mini Game

**`!rps <rock/paper/scissors>`** — Rock Paper Scissors

```javascript
const choices = ["rock", "paper", "scissors"];
const userChoice = args[0]?.toLowerCase();

if (!choices.includes(userChoice)) {
  await context.reply("Usage: !rps [rock/paper/scissors]");
  return;
}

const botChoice = choices[Math.floor(Math.random() * choices.length)];
let result = "Tie!";
if (
  (userChoice === "rock" && botChoice === "scissors") ||
  (userChoice === "paper" && botChoice === "rock") ||
  (userChoice === "scissors" && botChoice === "paper")
) result = "You win! 🎉";
else if (userChoice !== botChoice) result = "You lose! 😢";

await context.say(`✊✋✌️ ${context.user.name} chose ${userChoice}, bot chose ${botChoice}. ${result}`);
```
