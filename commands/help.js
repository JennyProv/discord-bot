exports.run = async (bot,message,args) => {
    message.channel.send(`I
    ch kann folgende Befolge ausführen:
    \n
    \nbeer - cheers! 
    \ndice - würfel mich! 
    \nmeme - das neuste vom neusten :3 
    \ndndmeme - gib dir ein dnd meme :D!
    \nping - deine Latenz
    \nsave_birthday DD.MM.YYYY - Trage deinen Geburtstag ein!
    \nbirthday @user - guck nach wann wer geburtstag hat
    \nbirthday all - hol dir ne liste`); 
}

exports.help = {
name: 'help'
}