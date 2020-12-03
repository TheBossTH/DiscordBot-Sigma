const Discord = require('discord.js');
const botsigma = new Discord.Client();

botsigma.on('ready', () => {
  console.log('Sigma ready!');
});
botsigma.on('message', message => {
  if (message.content.toLowerCase() === "cp2-2563") {
    let { cache } = message.guild.roles;
    let role = cache.find(role => role.name.toLowerCase() === "cp2-2563")
    if(message.member.roles.cache.has(role.id)){
      message.reply('You already has cp2-2563 role!');
    }
    else{
      let role = cache.find(role => role.name === "cp2-2563");
      message.member.roles.add(role);
      message.reply('cp2-2563 role has added, Welcome to Sigma Grader');
    }
  }
});
botsigma.login('token');
