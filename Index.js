// -----------------------------
// Tiny Express server to satisfy Render free tier
// -----------------------------
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('UnderDevs Bot is running!'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// -----------------------------
// Discord bot setup
// -----------------------------
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Log when bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Login using environment variable TOKEN
client.login(process.env.TOKEN);
