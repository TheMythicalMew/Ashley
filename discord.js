const discord = require('discord.js');
const config = require("./config.json")
const client = new discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") {
      message.channel.startTyping();
      setTimeout(() => {
        message.reply("H-hey! Get out of here! Use me in a discord chat not direct message!").catch(console.error);
        message.channel.stopTyping();
        
      });  
     }
    });

    client.login(config.token);