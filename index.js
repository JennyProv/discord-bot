const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
client.commands = new Discord.Collection();

process.on("unhandledRejection", (reason) => {
    console.error(reason);
    process.exit(1);
});

console.log("Trying to start Moon Moon Discord Bot\nNode version: " + process.version +"\nDiscord.js version: " + Discord.version);

client.on('ready', () => {
    console.log("Moon Moon Bot is online AWWWWOOOOO");
    fs.readdir('./commands', (error, files) => {
        if(error) return console.log(error);
        let jsfile = files.filter(f => f.split(".").pop() == 'js');
        if(jsfile.length == 0) return console.log("could not find any commands!");
        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            client.commands.set(props.help.name, props);
        })
    })
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