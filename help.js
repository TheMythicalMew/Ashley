const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const randomcolor =  require("randomcolor")
const fs = require('fs');

client.on('ready', () => {
    console.log("I'm reggie to help!");
})

client.on("message", async message => {
  if (message.guild === null) return;
  var guildid = message.guild.id
  const configa = require(`./configs/${guildid}.json`)
  const prefix = configa.token
  if(message.content.indexOf(configa.prefix) !== 0) return;
  const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "help") {
        message.author.send(`Help Message:\n Prefix: ${prefix} `)
        message.author.send({embed: {
            color: 700000,
            author: {
              name: ("Ashley"),
              icon_url: "https://cdn.discordapp.com/attachments/404001721258344450/482240387537305601/Ashley_Bot.png"
            },
            title: "Commands",
            url: "https://cdn.discordapp.com/attachments/463351454590042115/482240586187800576/Avatar.png",
            description: "All the commands Ashley can perform!",
            fields: [{
                name: "help",
                value: "This command, silly"
              },
              {
                name: "creators",
                value: "List of creators/contributors, pretty simple"
              },
              {
                name: "uptime",
                value: "Shows time the bot has been alive"
              },
              {
                name: "melee",
                value: "The only Smash Brothers game"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Ashley Mew#4047"
            }
          }
          
        });

        if(command === "help") {
        message.author.send({embed: {
            color: 000000,
            author: {
              name: ("Ashley"),
              icon_url: "https://cdn.discordapp.com/attachments/463351454590042115/482240586187800576/Avatar.png"
            },
            title: "Text Commands",
            url: "https://cdn.discordapp.com/attachments/404001721258344450/482240387537305601/Ashley_Bot.png",
            description: "Learn the text commands!",
            fields: [{
                name: "1.",
                value: "Who is Ashley?"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Ashley Mew#4047"
            }
          }
        });
    }
}
});

client.login(config.token);