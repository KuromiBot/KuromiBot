const {
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");

let answer = ["yes", "maybe", "indeed", "fuck no", "nah", "dawg what the fuck?", "idk but im gay", "I hate you guys", "I would rather die than answer that question", "I guess", "ask your mother", "due to unfortunate circumcisions, I do not care enough to answer this question.", "my lawyers advised me against answering that question"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask-me")
    .setDescription("Ask KuromiBot anything")
    .addStringOption(option => option
    .setName('question')
			  .setDescription('Your stupid question!')
        .setRequired(true)),

  async execute(interaction, client) {
    const question = interaction.options.getString('question')
    const eightballembed = new EmbedBuilder()
      .setColor("#5865f4")
      .setTitle(`${question}`)
      .addFields({
        name: "**KuromiBot says**",
        value: `> ${answer[(Math.floor(Math.random() * answer.length))]}`,
        inline: false,
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [eightballembed],
    });
  },
};
