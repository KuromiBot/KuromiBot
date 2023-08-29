const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  SlashCommandBuilder,
} = require("discord.js");

let answer = ["yes", "maybe", "indeed", "fuck no", "nah", "dawg what the fuck?", "idk but im gay", "I hate you guys", "I would rather die than answer that question", "I guess", "ask your mother", "due to unfortunate circumcisions, I do not care enough to answer this question.", "my lawyers advised me against answering that question"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask-me")
    .setDescription("Ask KuromiBot anything"),
    .addStringOption(option =>
		  option.setName('question')
			  .setDescription('Your stupid question!')
        .setRequired(true));

  async execute(interaction, client) {
    const pingembed = new EmbedBuilder()

      .setColor("#5865f4")
      .setTitle(`${question}`)
      .addFields({
        name: "**KuromiBot says**",
        value: `> ${answer[(Math.floor(Math.random() * arr.length))]}`,
        inline: false,
      })
      .setTimestamp();

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Discord Ping")
        .setStyle(5)
        .setEmoji("💻")
        .setURL("https://discordstatus.com/"),
    );

    await interaction.reply({
      embeds: [pingembed],
      components: [button],
    });
  },
};
