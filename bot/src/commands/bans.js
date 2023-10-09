const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  const { QuickDB } = require(`quick.db`);
  const db = new QuickDB();

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("warnings")
    .setDescription("check warnings")
    .addUserOption(option => option.setName('loser').setDescription('check warnings!').setRequired(true)),
    
    async execute(interaction, client) {
        
        const member = interaction.options.getUser('loser');
        let warns = await db.get(`bans_${member}`);

        if (warns == null) warns = 0;

        const warnings = new EmbedBuilder()
        .setColor("Blurple")
        .setDescription(`<a:warning:1126947077960765631> | ${member.tag} has **${warns}** warns:bangbang:`)

        await interaction.reply({ embeds: [warnings] })
    }
  }