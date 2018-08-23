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
    console.log('Index reggie!');
})

client.login(config.token);
