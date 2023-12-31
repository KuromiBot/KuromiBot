const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  const { QuickDB } = require(`quick.db`);
  const db = new QuickDB();

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("warn your friends for being stupid")
    .addUserOption(option => option.setName('loser').setDescription('The user to warn').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The petty reasoning').setRequired(true)),
    
    async execute(interaction, client) {
        const member = interaction.options.getUser('loser');
        let reason = interaction.options.getString('reason');
        
        const dmEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`<a:warning:1126947077960765631> | lol u were **warned** in ${interaction.guild.name} for ${reason}`)
       
        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`<a:warning:1126947077960765631> | lol ${member.tag} has been **warned** for ${reason}`)
        
        await interaction.reply({ embeds: [embed] });

        await member.send({ embeds: [dmEmbed] }).catch(err => {
            return;
        })
        
        db.add(`warns_${member}`, 1)
    }
  }