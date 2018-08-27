const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs');
const yt = require('ytdl-core');
const http = require('http');

client.on('ready', () => {
    console.log('Meow, kitty cats reggie!');
})

client.on("message", async message => {
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "cat") {
      message.channel.sendFile('http://aws.random.cat//meow.php','Cat.jpg')
  }
})

client.login(config.token);