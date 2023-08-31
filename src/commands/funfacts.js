const {
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");

let funfact = ["Dead skin cells are a main ingredient in household dust", "There are parts of Africa in all four hemispheres", "It takes a drop of water 90 days to travel the entire Mississippi River","Lemons float, but limes sink", "There’s only one letter that doesn’t appear in any U.S. state name; `Q`!", "Samsung tests phone durability with a butt-shaped robot", "Scotland has 421 words for snow","Fact: Mercedes invented a car controlled by a joystick", "The CIA headquarters has its own Starbucks", "Bees can fly higher than Mount Everest", "Cap’n Crunch’s full name is Horatio Magellan Crunch", "Paint used to be stored in pig bladders", "An employee at Pixar accidentally deleted a sequence of Toy Story 2 during production", "A woman called the police when her ice cream didn’t have enough sprinkles", "Neil Armstrong’s hair was sold in 2004 for $3,000"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fun-facts")
    .setDescription("Interesting facts!"),

  async execute(interaction, client) {
    const funfactembed= new EmbedBuilder()
      .setColor("#5865f4")
      .setTitle("**Fun Fact!**")
      .setDescription(`${funfact[(Math.floor(Math.random() * funfact.length))]}`)
      .setTimestamp();

    await interaction.reply({
      embeds: [funfactembed],
    });
  },
};
