// TODO: Actually make this work

const { ContextMenuCommandBuilder, 
        ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("Quote It")
        .setType(ApplicationCommandType.Message),
    async execute(interaction, client) {
        await interaction.reply({
            
        })
    }
}
