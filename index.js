const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
client.commands = new Discord.Collection();
const axios = require('axios');

process.on("unhandledRejection", (reason) => {
    console.error(reason);
    process.exit(1);
});

console.log("Trying to start Moon Moon Discord Bot\nNode version: " + process.version +"\nDiscord.js version: " + Discord.version);

client.on('ready', async () => {
    console.log("Moon Moon Bot is online AWWWWOOOOO");
    fs.readdir('./commands', (error, files) => {
        if(error) return console.log(error);
        let jsfile = files.filter(f => f.split(".").pop() == 'js');
        if(jsfile.length == 0) return console.log("could not find any commands!");
        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            client.commands.set(props.help.name, props);
        })
    });
    const result = await axios.get('http://localhost:3000/birthdays');
    data = result.data;
    var today = new Date(); 
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var date = day + '.' + month;
    const birthday = data.filter((x => x.birthday.slice(0, -5) === date ));
    if (birthday.length != 0) {
        const guild = await client.guilds.fetch(config.SERVER_ID);
        channel = guild.channels.cache.get('817749160446656552');
        let person = guild.members.cache.get(birthday[0].id);
        channel.send(`<@&${'410607947626971156'}> Hallo, heute hat ${person.user.username} Geburtstag :3!`)
    }
})

client.on("message", (message) => {
    const prefix = "!";

    if (message.author.bot) return;   
    if ( message.channel.type !== 'text') return;
    if (!message.content.startsWith(prefix)) return;

    const commandLine = message.content.slice(prefix.length);
    const args = commandLine.split(' ');
    const command = args.shift().toLowerCase();   
    
    let commandFile = client.commands.get(command);
    if(commandFile) { commandFile.run(client,message,args)};
});

if (config.BOT_TOKEN) {
    console.log("login successfull");
    client.login(config.BOT_TOKEN);
} else {
    console.log(
      "Login with provided token failed. Please change the token and try again!"
    );
  }