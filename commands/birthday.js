const Discord = require("discord.js");
const axios = require('axios');

exports.run = async (bot,message,args) => {
    if (args.length !== 1) {
        const channelMessage = new Discord.MessageEmbed().setTitle('ich erwarte die getaggte Person für die ich das Geburtsdatum speichern soll :3')
        message.reply(channelMessage);
        return;
    }
    
    var userId = args[0].replace( /^\D+/g, '').slice(0, -1);
    
    if (!(bot.users.cache.find(user => user.id === userId))) {
        const channelMessage = new Discord.MessageEmbed().setTitle('Tut mir leid, doch ich glaube dies ist kein treuer Untertan von Lord buttert0ast')
        message.reply(channelMessage);
        return;   
    }
    var isInDb = false;
    
    await axios.get('http://localhost:3000/birthdays')
        .then(resp => {
            data = resp.data;
            data.forEach(e => {
                if (e.id == userId) {
                   const user = bot.users.cache.find(user => user.id === userId)
                   const channelMessage = new Discord.MessageEmbed().setTitle(`${user.username} hat am ${e.birthday} Geburtstag :3`)
                   message.reply(channelMessage);
                   isInDb = true;
                } 
            });
        })
        .catch(error => {
            console.log(error);
        }); 

        if (!isInDb) {
            const channelMessage = new Discord.MessageEmbed().setTitle(`ich kenne den Geburtstag leider nicht :( trag ihn doch ein!`)
            message.reply(channelMessage);
        }
}
exports.help = {
name: 'birthday'
}