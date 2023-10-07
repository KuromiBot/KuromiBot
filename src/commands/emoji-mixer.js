const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");

const superagent = require("superagent");
const onlyEmoji = require("emoji-aware").onlyEmoji;

require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ship-emojis")
    .setDescription("If two emojis had babies")
    .addStringOption(option => option.setName("emojis").setDescription("emojis to ship").setRequired(true)),

    async execute (interaction) {
        await interaction.deferReply({ ephmeral: true });

        const { options } = interaction;
        const eString = options.getString('emojis');
        const input = onlyEmoji(eString)
        const response = `One or both of these emojis (\`${eString}\`) are not supported. Gestures and server emojis do not work.`;

        const output = await superagent.get('https://tenor.googleapis.com/v2/featured')
        .query({
            key: process.env.TENORAPI,
            contentfilter: "high",
            media_filter: "png_transparent",
            component: "proactive",
            collection: "emoji_kitchen_v5",
            q: input.join('_')
        }).catch(err => {});

        if(!output) {
            return await interaction.editReply({ content: response });
        } else if (!output.body.results[0]) {
            return await interaction.editReply({ content: response });
        } else if (eString.startsWith('<') || eString.endsWith(`>`)) {
            return await interaction.editReply({ content: response });
        }

        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setImage(output.body.results[0].url)

        await interaction.editRepy({ embeds: [embed] });
    }
}