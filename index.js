const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login();

client.on('message', async (message) => {
  if (message.author.id == '1110536642273497129' && message.embeds && message.embeds[0] && message.embeds[0].description) {
    let code = message.embeds[0].description.split('`')[1]
    if (code) {
      await Timeout(9000)
      message.channel.sendSlash('1110536642273497129', 'abrirbau', code)
    }
  }
});

const Timeout = async (ms) => new Promise(res => setTimeout(res, ms))