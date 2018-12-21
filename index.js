bot.on("guildMemberAdd", => {
       var nonverified = member.guild.roles.find(`NV`)
member.addRole(nonverified)
});

bot.on(`message`, function(message) {
  
});

