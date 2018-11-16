const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
  client.user.setPresence({
    status: 'dnd',
    game: { 
       type: 1,
       name: 'لا اله محمد رسول الله',
       url: 'http://twitch.tv/Streammingg',
      application_id: '262274898422923264',
  
    }
      });
  });
  

  client.login("NDkwMjE4MjIwMjgwODcyOTgw.Ds_vfQ.vHwVmRU06WWjOMeVES5ccdazOZY");
