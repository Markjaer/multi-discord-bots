const Config = require('../config');

console.log(`\x1b[34m------------------------------------\x1b[0m`);
Config.bots.map((bot, l) => {
    bot['current'] = l;
    bot['hexdec'] = parseInt(bot.maincolor.replace("#", ""), 16);
    
    console.log(`Bot: \x1b[96m${bot.name}\x1b[0m`)

    const { Client, Collection, GatewayIntentBits } = require('discord.js');
    const fs = require('fs');

    const client = new Client({intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildIntegrations,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMessageTyping,
		GatewayIntentBits.GuildEmojisAndStickers,
		GatewayIntentBits.GuildInvites,
		GatewayIntentBits.GuildWebhooks,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.DirectMessageReactions,
		GatewayIntentBits.DirectMessageTyping,
		GatewayIntentBits.DirectMessages,
	]});
    client.commands = new Collection();
    client.buttons = new Collection();
    client.selectMenus = new Collection();
    client.modals = new Collection();
    client.commandArray = [];
    client.config = Config;
    client.bot = bot;

    const functionFolders = fs.readdirSync(`./src/functions`);
    for (const folder of functionFolders) {
        const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter((file) => file.endsWith('.js'));
        for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
    }

    client.handleEvents(bot);
    client.handleCommands(bot);
    client.handleComponents(bot);

    client.login(bot.token);
});








// const Config = require('../config.json');

// console.log(`\x1b[34m------------------------------------\x1b[0m`);
// Config.BOTS.map(bot => {
//     console.log(`\n\x1b[96m${bot.NAME}\x1b[0m`)

//     const { Client, Collection, GatewayIntentBits } = require('discord.js');
//     const fs = require('fs');

//     const client = new Client({intents: [
// 		GatewayIntentBits.Guilds,
// 		GatewayIntentBits.GuildMessages,
// 		GatewayIntentBits.GuildMembers,
// 		GatewayIntentBits.GuildPresences,
// 		GatewayIntentBits.GuildIntegrations,
// 		GatewayIntentBits.GuildMessageReactions,
// 		GatewayIntentBits.GuildMessageTyping,
// 		GatewayIntentBits.GuildEmojisAndStickers,
// 		GatewayIntentBits.GuildInvites,
// 		GatewayIntentBits.GuildWebhooks,
// 		GatewayIntentBits.MessageContent,
// 		GatewayIntentBits.DirectMessageReactions,
// 		GatewayIntentBits.DirectMessageTyping,
// 		GatewayIntentBits.DirectMessages,
// 	]});
//     client.commands = new Collection();
//     client.buttons = new Collection();
//     client.selectMenus = new Collection();
//     client.modals = new Collection();
//     client.commandArray = [];
//     client.serverConfig = require('../config');
//     client.config = bot;

//     console.log(client.serverConfig)

//     const functionFolders = fs.readdirSync(`./src/functions`);
//     for (const folder of functionFolders) {
//         const functionFiles = fs
//         .readdirSync(`./src/functions/${folder}`)
//         .filter((file) => file.endsWith('.js'));
//         for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
//     }

//     client.handleEvents(bot);
//     client.handleCommands(bot);
//     client.handleComponents(bot);

//     client.login(bot.TOKEN);

//     console.log(`\n\x1b[34m------------------------------------\x1b[0m`);
// });