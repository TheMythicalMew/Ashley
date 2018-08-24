const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const http = require('http');
const config = require('./config.json');
const welcome = require('./welcome.js');
const textanswers = require('./textanswers.js')
const commands = require('./commands.js')
const help = require('./help.js')
const cats = require('./cats.js')
const userinfo = require('./userinfo.js')

app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);


      client.on('ready', () => {
        console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
        client.user.setStatus('Online')
        client.user.setActivity('with Dark Magic || ^^help')
    });
  

client.on('message', (message) => {
  if(message.content.startsWith('^^forceleave')) {
    message.channel.send('Forcing a Leave, Bot might not respond for 15 seconds!')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
  return message.reply(`Please be in a voice channel first!`);
}
voiceChannel.join()
  .then
      voiceChannel.leave();
}
})

const Music = require('./musicmain.js')

Music.start(client, {
  youtubeKey: config.youtubeapi
})

client.login(config.token);