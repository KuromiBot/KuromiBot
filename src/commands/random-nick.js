// TODO: Actually make this work
const {
    EmbedBuilder,
    SlashCommandBuilder,
    Embed,
  } = require("discord.js");
  
  let nicknames = ["loser", "ratio", "unfortunate", "bozo", "ban me", "kick me", "#1 idiot", "pineapple pizza", "uh oh", "cool", "amazing", "#1 awesome user", "zaza"];
  
  let changedNick = nicknames[(Math.floor(Math.random() * nicknames.length))] 
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("nick-gen")
      .setDescription("generte a nickname"),
  
    async execute(interaction, client) {
        const user = interaction.member

        const nickname = new EmbedBuilder()
        .setColor("Random")
        .setDescription(`Congratulations, you changed your name to ${changedNick}`)

        user.setNickname(changedNick).catch(err => {console.log("Whoops, something broke")})        
    },
  };
  