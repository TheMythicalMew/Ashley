const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require("superagent");

client.on("ready", () => {
  console.log('Meow, kitty cats reggie!');
})

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat//meow.php`);

  let catembed = new Discord.RichEmbed()
  .setColor("8500000")
  .setTitle("Random cat image")
  .setImage(body.file);

  message.channel.send(catembed);
  message.delete().catch(O_o=>{});


}

client.login(config.token);