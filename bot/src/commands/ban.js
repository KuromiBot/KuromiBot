const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  const { QuickDB } = require(`quick.db`);
  const db = new QuickDB();

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban your friends for being stupid")
    .addUserOption(option => option.setName('loser').setDescription('The user to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Whatever rason').setRequired(true)),
    
    async execute(interaction, client) {
        const member = interaction.options.getUser('loser');
        let reason = interaction.options.getString('reason');
        
        const dmEmbed = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`<a:warning:1126947077960765631> | lol u were **banned** in ${interaction.guild.name} for ${reason}`)
       
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`<a:warning:1126947077960765631> | rip ${member.tag} has been **banned** for ${reason}, what a bozo`)
        
        await interaction.reply({ embeds: [embed] });

        await member.send({ embeds: [dmEmbed] }).catch(err => {
            return;
        })
        
        db.add(`bans_${member}`, 1)
    }
  }