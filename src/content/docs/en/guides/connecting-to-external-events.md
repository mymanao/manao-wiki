---
title: Connecting to External Events
---

Manao can connect to external Socket.IO servers via the `!event` command, enabling real-time data exchange with other apps and websites.

---

### Basic Commands

Connect to any Socket.IO server:

```
!event connect <URL>
```

Disconnect:

```
!event disconnect
```

---

### For Developers

Manao supports both **session-bound** and **neutral** modes. When a `session` query parameter is present in the URL, Manao joins that session room. Events available:

**Manao receives from server:**
- `event:start`, `{ filter?: string }` — start forwarding chat messages
- `event:stop` — stop forwarding
- `event:send`, `{ message: string }` — send a message to chat

**Server receives from Manao:**
- `event:input`, `{ message: string, user: string }` — chat message with username
