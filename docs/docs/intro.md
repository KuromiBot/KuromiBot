---
sidebar_position: 1
---

# Welcome to KuromiBot

KuromiBot is a Discord bot specifically designed for your friend groups. 

## Getting Started

Get started by downloading the release, or if you'd like to contribute, git clone the repository.

### What you'll need

- [Node.js](https://nodejs.org/en/download/)
- All dependencies required by running `npm install`

## Install the bot via `git clone`

```bash
git clone https://github.com/KuromiBot/KuromiBot.git
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

```bash
cd KuromiBot
cd bot
```
## Install the bot using the provided files

Unzip the file where you wish to install the bot, **c**hange **d**irectory into the bot directory, run `npm install`, and profit!

## Setting up the bot
The bot makes use of the `dotenv` package, so create a file named `.env` and insert the following in the file:

```env
TOKEN= <TOKEN>
GUILD_ID= <GUILD ID if in Development>
STATUS=DEVELOPMENT <Change to PRODUCTION to load commands on every guild>
STATUSBOT= <The status for your bot>
DISCORDSTATUS=dnd <Change to whatever you want>
TENORAPI= <Your Google Tenor API>
```

## Start the bot

Now that you have your bot setup, it is time to start it! Run the following command

```bash
npm run start
```

Congratulations, your bot (hopefully) should work! 

:::tip

The `cd` command changes the directory you're working with. In order to work with your amazing Discord bot, you'll need to navigate the terminal there.
