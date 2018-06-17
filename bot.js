const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NDU3ODU3ODQ4MzA3NjEzNjk3.DggCgw.5dBAh0FQ5EKu8XvCT7buhlBwou8'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          



client.on('message', message => {
     if (message.content === "") {
message.author.send("**--help**" + `  **

 شكرا لاستعمال البوت

**`);
    }
});     
