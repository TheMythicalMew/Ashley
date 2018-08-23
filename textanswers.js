const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Text answers are reggie!');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase();

if (messageText == "WHO IS ASHLEY?") {
  message.channel.send(`Ashley is a character from the "WarioWare" series, if you mean me the bot, I'm just that, a bot`)
}

if(message.content.startsWith('FORTNITE') || message.content.startsWith('fortnite')) {
  message.author.send('Did somebody say FORTNITE?')
  message.author.send('https://thumbs.gfycat.com/FineDampGecko-size_restricted.gif')
}

})
client.login(config.token);