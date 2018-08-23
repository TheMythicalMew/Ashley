const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const http = require('http');
const config = require('./config.json');

/*app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);
*/

client.on("ready", () => {
    console.log('Welcome and leaving reggie!');
})

client.on("guildMemberAdd", (member) => {
    const gasp2 = client.emojis.find("name", "gasp2");
    member.guild.channels.find("name", "general").send(`A new user! ${gasp2}, I wonder who it is! Oh, it's just ${member.user}...`) 
})

client.on("guildMemberRemove", (member) => {
    const gasp = client.emojis.find("name", "gasp");
    member.guild.channels.find("name", "general").send(`Oh man, guys, ${member.user} just left the lobby! ${gasp}`) 
})

client.login(config.token);