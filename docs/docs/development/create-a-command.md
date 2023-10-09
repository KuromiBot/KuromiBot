---
sidebar_position: 1
---

# Create a command

To create a command, navigate to the directory the bot is hosted in, `cd` to /src/commands, then create a file for the command you want to create, for example, `echo.js`.

Now that you have the file created, use your favorite code (or text) editor to start making the file.

Start by requiring the things you need to make it with discord.js, for example;
```js {1-4} showLineNumbers title="/src/commands/echo.js"
const {
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");
```

Now, we will want to start making the command itself, so we can do 

```js jsx {6-9} showLineNumbers title="/src/commands/echo.js"
const {
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echo something"),
```

To create our slash commands, however, we want it to echo what we say, so let's add the `addStringOption` property
```js
module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echo something")
    .addStringOption(option => 
        option
            .setName("string")
```
