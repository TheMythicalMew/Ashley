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
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "help") {
        message.author.send(`Help Message:\n Default Prefix: ^^ `)
        message.author.send({embed: {
            color: 000000,
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
              },
              {
                name: "cat",
                value: "Displays and image of a cat, what did you expect?"
              },
              {
                name: "avatar",
                value: "Displays your avatar"
              },
              {
                name: "botavatar",
                value: "Displays Ashley's avatar"
              },
              {
                name: "servericon",
                value: "Displays the servers' icon"
              },
              {
                name: "ashleysong",
                value: "Plays the Super Smash Bros For Nintendo Wii U and 3DS remix of Ashley's Song from WarioWare: Touched"
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
              },
              {
                name: "2.",
                value: 'Start a sentence with "FORTNITE" (note, only works with all caps or all lower case)'
              },
              {
                name: "3.",
                value: "Ashley or <@482202511382675483>"
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
                icon_url: "https://cdn.discordapp.com/attachments/404001721258344450/482240387537305601/Ashley_Bot.png"
              },
              title: "Music Commands",
              url: "https://cdn.discordapp.com/attachments/463351454590042115/482240586187800576/Avatar.png",
              description: "Learn the text commands!",
              fields: [{
                  name: "play (args)",
                  value: "Searches for a song/video on youtube, or if you want you can paste a URL"
                },
                {
                  name: "join",
                  value: 'Makes the bot join the voice call'
                },
                {
                  name: "leave",
                  value: 'Makes the bot leave the voice call'
                },
                {
                  name: "skip",
                  value: "Skips the current song (currently only admins and the user who requested the song can skip)"
                },
                {
                  name: "np",
                  value: 'Shows the current song playing'
                },
                {
                  name: "queue",
                  value: 'Shows the current songs in the queue'
                },
                {
                  name: "pause",
                  value: 'Pauses the current song'
                },
                {
                  name: "resume",
                  value: 'Resume the currently paused song'
                },
                {
                  name: "search",
                  value: 'Searches for a maximum of 10 songs/videos on youtube, use the number (e.g. 1) to select the song'
                },
                {
                  name: "loop",
                  value: 'Loops the currently playing song'
                },
                {
                  name: "volume",
                  value: 'Raises or lowers the volume (e.g. ^^volume 100, minimum of 1, maximum of 200)'
                },
                {
                  name: "clearqueue",
                  value: 'Clears all songs currently in the queue'
                },
                {
                  name: "set",
                  value: 'Changes music settings for the server'
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
}
});

client.login(config.token);