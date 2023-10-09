const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  const { QuickDB } = require(`quick.db`);
  const db = new QuickDB();

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("bans")
    .setDescription("check bans")
    .addUserOption(option => option.setName('loser').setDescription('check bans!').setRequired(true)),
    
    async execute(interaction, client) {
        
        const member = interaction.options.getUser('loser');
        let bans = await db.get(`bans_${member}`);

        if (bans == null) ban = 0;

        const banned = new EmbedBuilder()
        .setColor("Blurple")
        .setDescription(`<a:warning:1126947077960765631> | ${member.tag} has **${bans}** bans zomg:bangbang:`)

        await interaction.reply({ embeds: [banned] })
    }
  }