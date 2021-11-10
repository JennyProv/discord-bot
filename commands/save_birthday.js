const Discord = require("discord.js");
var moment = require('moment');
const axios = require('axios');

const file = './birthdays.txt';

exports.run = async (bot,message,args) => {
console.log(args);
if (args.length !== 2) {
    const channelMessage = new Discord.MessageEmbed().setTitle('ich erwarte mindestens zwei Argumente: zuerst das Datum, dann die getaggte Person für die ich das Geburtsdatum speichern soll :3')
    message.reply(channelMessage);
    return;
}

if (!(moment(args[0], 'DD.MM.YYYY',true).isValid())) {
    const channelMessage = new Discord.MessageEmbed().setTitle('Es scheint als wäre dein erstes Agument kein valides Datum uwu')
    message.reply(channelMessage);
    return;
}
var userId = args[1].replace( /^\D+/g, '').slice(0, -1);

if (!(bot.users.cache.find(user => user.id === userId))) {
    const channelMessage = new Discord.MessageEmbed().setTitle('Tut mir leid, doch ich glaube dies ist kein treuer Untertan von Lord buttert0ast')
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