const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login("Njk0NjY5MzI1ODUxNjg4OTkw.Gz_0RQ.-DAfU-kK6jGfWo0wnwNVO-_EUraeWxipy5Zsl0");

client.on('message', async (message) => {
  if (message.author.id == '1110536642273497129' & message.channelId == '1157118228481454231') {
    if (message.embeds && message.embeds[0] && message.embeds[0].description) {
      if (message.embeds[0].description.split('`')[1]) {
	await Timeout(1500)
        message.channel.sendSlash('1110536642273497129', 'abrirbau', message.embeds[0].description.split('`')[1])
      }
    }
  }
});

const Timeout = async (ms) => new Promise(res => setTimeout(res, ms))