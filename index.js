//Bot Imports
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const prefix = '!';
//End Import

//Start Bot
client.on('ready', () => {
    console.log('Bot ready');
})
//End Starting Bot 

//Begin Link to Socials : 
client.on("message", (message) => {
    if (message.content === "!Github" || message.content === "!github") {
        message.channel.send(`https://github.com/gitClaudius`);
        message.delete();
    }
    if (message.content === "!Linkedin" || message.content === "!linkedin") {
        message.channel.send(`https://www.linkedin.com/in/claudius-zensen-5601041b9/`);
        message.delete();
    }
    if (message.content === "!Youtube" || message.content === "!youtube") {
        message.channel.send(`https://www.youtube.com/channel/UCGRIgyxhEBpni817zdEQgPg`);
        message.delete();
    }
    if (message.content === "!Twitter" || message.content === "!twitter") {
        message.channel.send(`https://twitter.com/neToX_LIVE`);
        message.delete();
    }
    if (message.content === "!Twich" || message.content === "!twitch") {
        message.channel.send(`https://www.twitch.tv/net0x___`);
        message.delete();
    }
});
// End Link to Socials

//Login Data Bot
client.login(process.env.TOKEN);
//End Login Data
