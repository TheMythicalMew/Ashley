const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs');
const yt = require('ytdl-core');
const http = require('http');

client.on('ready', () => {
    console.log('Commandos are reggie!');
})

client.on("message", async message => {
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "say") {             
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to use this!');                                                                                                               
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
  if(command === "avatar") {
    var user = message.mentions.users.first()
    if(!user) {
   message.channel.sendFile(message.author.avatarURL,'YourAvatar.png')
}else{
    message.channel.sendFile(user.avatarURL, 'TheirAvatar.png')
 }
}
if(command === "ping") {
  message.channel.send(`Pong! I'm up and running!`)
}
 if(command === "botavatar") {
    message.channel.sendFile(client.user.avatarURL,'BotAvatar.png')
} 
 if(command === "servericon") {
    message.channel.sendFile(message.guild.iconURL,'ServerIcon.png')
 }
  if(command === "melee") {
    message.channel.send('Warning: This is very loud!')
}
  if(command === "melee") {
    message.channel.sendFile('https://cdn.discordapp.com/attachments/404001721258344450/476404324130357258/MELEE.mp3', 'MELEE.mp3')
}
  if(command === "creators") {
    message.channel.send('<@226034191047983114> or Mew#4047 is my creator! And <@318821976372150272> or Josia50#9988 also helps out!!')
  }
  if(command == "ashleysong") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=_u_76yAC5cc", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
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

    if (command === "r34") {
        message.channel.send('https://rule34.xxx/index.php?page=post&s=list&tags='+args.join(" "))
    }

  

 
})

client.login(config.token);
