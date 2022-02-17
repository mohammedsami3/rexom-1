const { Client, Guild, MessageEmbed } = require("discord.js");
const db = require("quick.db");

/**
 *
 * @param {Client} client
 * @param {Guild} guild
 */

module.exports = async (client, guild) => {
  try {
    guild.channels
      .create("ReXom 🎶", {
        type: "text",
        permissionOverwrites: [
          {
            id: guild.roles.everyone.id,
            deny: ["SEND_MESSAGES"],
            allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "ADD_REACTIONS"],
          },
        ],
        reason: "Rexom",
        topic: "Give your server a tune. 🎶",
      })
      .then((channel) => {
        let embed = new MessageEmbed()
          .setAuthor(
            "ReXom",
            client.user.avatarURL({ dynamic: true }),
            "https://discord.com/users/746696275214467112"
          )
          .setColor("BLUE")
          .setImage(
            "https://camo.githubusercontent.com/0b6082ac62d1a2b9257aafe9e5e4e82e10efa73e07bb306a0717131e877be8bf/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3834353130373434333537333731393131322f3835393232323532393933393231303235302f53637265656e73686f745f323032312d30362d32392d30322d30332d30322d36335f33613633373033376433356639356335646263646363373565363937636539312e6a7067"
          )
          .setTitle("**ReXom github page**")
          .setURL("https://github.com/DevelopersSupportAR/rexom.git")
          .setFooter(
            "Bot Made By: NIRO",
            client.user.avatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setDescription(`**Thanks For Using \`ReXom\` Music Bot**
            
            > Developer: NIRO
            > Bot Support Server: [Here](https://discord.com/users/746696275214467112)
            > Bot Github Page: [Here](https://github.com/DevelopersSupportAR/rexom.git)`);
        channel.send({
          content: "> **Give your server a tune. 🎶**",
          embeds: [embed],
          components: [],
        });
      })
      .catch((err) => {});
  } catch (err) {
    console.log(err);
  }
  require("../functions/guildCreateFunction")
    .get(guild, db)
    .catch((err) => console.log(err));
};
