const sprueche=['Ist der Ruf erst ruiniert, säuft sich’s völlig ungeniert.',
'Unser letzter Wille, noch mehr Promille!',
'Von der Wiege bis zur Bahre ist der Suff das einzig Wahre!',
'Mein größter Feind das ist der Alkohol, doch in der Bibel steht geschrieben, du sollst auch deine Feinde lieben.',
'Genug getrunken, jetzt wird gesoffen!',
'Stößchen! Wie man unter Männern sagt.',
'Oh Alkohol, oh Alkohol,dass Du mein Feind bist weiß ich wohl,doch in der Bibel steht geschrieben,Du solltest Deine Feinde Lieben. Also Prost!',
'Iß, was gar ist, trink, was klar ist, red, was wahr ist.',
'Essen ist ein Bedürfnis des Magens, Trinken ein Bedürfnis der Seele. Essen ist ein gewöhnliches Handwerk, Trinken eine Kunst',
'Es trinkt der Mensch es säuft das Pferd: nur heute ist es umgekehrt.',
'Wer ordentlich ißt, soll auch gut trinken',
'Das erste Bier, das löscht den Durst. Ein zweites stimmt mich heiter. Nach dreien ist mir alles Wurst, drum sauf’ ich einfach weiter.',
'Zu viel kann man nie trinken, doch trinkt man nie genug!',
'Ob ich morgen leben werde, Weiß ich freilich nicht: Aber, wenn ich morgen lebe, Daß ich morgen trinken werde, Weiß ich ganz gewiß.',
'Es tut mir im Herz so weh, wenn ich vom Glas den Boden seh.',
'Sport ist Mord, nur Sprit hält fit.',
'Wer tanzt hat bloß kein Geld zum Saufen.',
'Zwischen Leber und Nierchen passt immer ein Bierchen.',
'Betrunkene und Kinder sagen die Wahrheit',
'Das Leben ist an manchen Tagen, halt nur im Vollrausch zu ertragen.'];

exports.run = async (bot,message,args) => {
    const result = 1 + Math.floor(Math.random()*sprueche.length); 
    message.reply(`${sprueche[result]}`); 
}


exports.help = {
    name: 'beer'
    }