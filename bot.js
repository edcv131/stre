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
  

  client.login("NTEyMDY1NjMzNDg4NDcwMDM2.Ds_1Jw.eYP-eFeZPy00CkCoF42UmeCWlVQ");
