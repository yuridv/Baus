const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login("Njk0NjY5MzI1ODUxNjg4OTkw.GPWD0m.aMl4xf-44WusO1TC2nWJyIldQpsDN42DRt6Sag");

client.on('message', async (message) => {
  if (message.author.id == '1110536642273497129' && message.embeds && message.embeds[0] && message.embeds[0].description) {
    let code = message.embeds[0].description.split('`')[1]
    if (code) {
      message.channel.sendSlash('1110536642273497129', 'abrirbau', code)
    }
  }
});