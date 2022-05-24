const fetch = require("node-fetch");
const Discord = require("discord.js");
const link = 'https://www.reddit.com/r/aww.json?sort=top&t=week';

exports.run = async (bot,message,args) => {
    let fetchMemes = await fetch(link).then(meme => meme.json());
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]
    let memeEmbed = new Discord.MessageEmbed()
        .setTitle(randomMeme.data.title)
        .setImage(randomMeme.data.url);

    message.channel.send(memeEmbed)
}

exports.help = {
    name: 'aww'
}