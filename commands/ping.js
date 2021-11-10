exports.run = async (bot,message,args) => {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! 🐶 This message had a latency of ${timeTaken}ms.`); 
}

exports.help = {
    name: 'ping'
}