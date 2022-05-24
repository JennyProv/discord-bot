const Discord = require("discord.js");

exports.run = async (bot,message,args) => {
    if (args.length == 0) {
        args = 20;
    }
    const result = 1 + Math.floor(Math.random()*args); 
    const channelMessage = new Discord.MessageEmbed().setTitle(result)
    message.channel.send(channelMessage)
}

exports.help = {
name: 'dice'
}