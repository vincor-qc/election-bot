const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setTitle("Github Documentation Here")
        .setURL("https://github.com/Crabo-7498/election-bot#how-to-use")
        .addField("Why can't i just the bot?", "For now, Only Ewan and Vincent can operate this bot (as i don't want anyone DDoSing me internally", true);

    message.channel.send(embed);
}

module.exports.help = {
  name:"help"
}
