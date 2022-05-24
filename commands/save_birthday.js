const Discord = require("discord.js");
var moment = require('moment');
const axios = require('axios');

const file = './birthdays.txt';

exports.run = async (bot,message,args) => {
console.log(args);
if (args.length !== 1) {
    const channelMessage = new Discord.MessageEmbed().setTitle('ich erwarte mindestens ein Argument: dein Geburtstag :3')
    message.reply(channelMessage);
    return;
}

if (!(moment(args[0], 'DD.MM.YYYY',true).isValid())) {
    const channelMessage = new Discord.MessageEmbed().setTitle('Es scheint als wäre dein Uwument kein valides Datum. Bitte wie folgt: mm.dd.yyyy')
    message.reply(channelMessage);
    return;
}
var userId = message.author.id;
console.log(userId)


if (!(bot.users.cache.find(user => user.id === userId))) {
    const channelMessage = new Discord.MessageEmbed().setTitle('Tut mir leid, doch ich glaube du bist kein treuer Untertan von Lord buttert0ast')
    message.reply(channelMessage);
    return;   
}

axios.get('http://localhost:3000/birthdays')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            if(e.id == userId) {
                axios.put(`http://localhost:3000/birthdays/${userId}/`, {
                    birthday: args[0]
                }).then(resp => {
                    const channelMessage = new Discord.MessageEmbed().setTitle('Ich habe deine Daten aktualisiert :3')
                    message.reply(channelMessage);                    
                    return;
                }).catch(error => {
                    console.log(error);
                }); 
            } 
        });
        axios.post('http://localhost:3000/birthdays', {
            id: userId,
            birthday: args[0],
        }).then(resp => {
            const channelMessage = new Discord.MessageEmbed().setTitle('Ich habe deine Daten gespeichert :3')
            message.reply(channelMessage);  
        }).catch(error => {
            console.log(error);
        }); 
    })
    .catch(error => {
        console.log(error);
    }); 
}

exports.help = {
name: 'save_birthday'
}