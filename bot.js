const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
  client.user.setPresence({
    status: 'dnd',
    game: { 
       type: 1,
       name: 'احترمني',
       url: 'http://twitch.tv/Streammingg',
      application_id: '262274898422923264',
  
    }
      });
  });
  

  client.login("MjYyMjc0ODk4NDIyOTIzMjY0.DsEgOg.dnMV49VXfdc_OABiEmaX2Yz1jWI");
