const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs');

client.on('ready', () => {
    console.log('Commandos are reggie!');
})

client.on("message", async message => {
    if (message.guild === null) return;
    var guildid = message.guild.id
    const configa = require(`./configs/${guildid}.json`)
    if(message.content.indexOf(configa.prefix) !== 0) return;
    const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "say") {             
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to use this!');                                                                                                               
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }

  if(command === "melee") {
    message.channel.send('Warning: This is very loud!')
}
  if(command === "melee") {
    message.channel.sendFile('https://cdn.discordapp.com/attachments/404001721258344450/476404324130357258/MELEE.mp3', 'MELEE.mp3')
}
  if(command === "creators") {
    message.channel.send('The only creator currently is <@226034191047983114> or Mew#4047')
  }

  if(command === "uptime") {
    var date = new Date(client.uptime);
    var strDate = '**';
    strDate += 'Uptime\n';
    strDate += date.getUTCDate() - 1 + ' days, ';
    strDate += date.getUTCHours() + ' hours, ';
    strDate += date.getUTCMinutes() + ' minutes, ';
    strDate += date.getUTCSeconds() + ' seconds**';
    message.channel.send(strDate)

 }
})

client.login(config.token);