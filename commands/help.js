exports.run = async (bot,message,args) => {
    message.channel.send(`Ich kann folgende Befolge ausführen:\n\nbeer - cheers! \ndice - würfel mich! \nmeme - das neuste vom neusten :3 \nping - deine Latenz
    \nsave_birthday DD.MM.YYYY @user - Trage deinen Geburtstag ein!
    \nbirthday @user - guck nach wann wer geburtstag hat`); 
}

exports.help = {
name: 'help'
}