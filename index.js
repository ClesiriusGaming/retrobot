const Discord = require('discord.js');

const bot = new Discord.Client();


var prefix = "?";


bot.login(process.env.TOKEN);

bot.on("ready", () => {
  console.log("Je suis prêt")
  
bot.user.setActivity("[?mail] I SP®『🚫』1 servs", {type:"STREAMING"});    
});

bot.on('message', message => { 

    if(message.content === "Bonjour"){
    	message.delete(message.author);
        message.reply("Salut");
        console.log('Le bot dit Bonjour');
    }

    if(message.content === "Bonsoir"){
    	message.delete(message.author);
        message.reply("Bonsoir :wave:");
        console.log('Le bot dit Bonsoir');
    }
    
    if(message.content === "halloween"){
    	message.delete(message.author);
    	
    message.reply("Destruction du serveur dans 3 2 1 :jack_o_lantern: Happy Halloween.");
    console.log('Le bot fais peur');
    }

if(message.content === prefix + "mail") {
    var mail_embed = new Discord.RichEmbed()
    .setColor("#0800F6")
    .setTitle("Voici la page d'aide pour le bot !")
    .addField("Pour contacter mon créateur","clesiriuspe@gmail.com.")
    .addField("Pour contacter le staff.","clesiriusprotect@gmail.com")
    .addField("Support","https://discord.gg/RRA9ZyT")
    .addField("Invitation","https://discordapp.com/api/oauth2/authorize?client_id=497807334253527097&permissions=8&scope=bot")
   .setFooter("SecurityProtect®/!\『🚫』", bot.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send("La page d'aide du bot vous à bien été envoyée en Message Privé !:incoming_envelope:")
    message.author.send(mail_embed)
    console.log("Un utilisateur a effectué la commande d'aide du bot !")

 }
 
 });
