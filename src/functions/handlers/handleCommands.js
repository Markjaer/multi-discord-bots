const { REST, Routes } = require('discord.js');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        const { commands, commandArray, bot, config } = client;

        if (config.bots.length == (bot.current + 1)) console.log(`\n\x1b[1m\x1b[4mCommands:\x1b[0m`);
        for (const folder of commandFolders) {
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith('.js'));

            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                if (config.bots.length == (bot.current + 1)) console.log(` \x1b[35m• ${folder}/${file}\x1b[0m`);
            }
        }

        const clientId = bot.botid;
        const guildId = bot.serverid;
        const rest = new REST().setToken(bot.token);
        
        try {
            // console.log(`\n\x1b[93mStarted refreshing application (/) commands.\x1b[39m`);
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body: client.commandArray,
            });
            // console.log(`\x1b[92mSuccessfully reloaded application (/) commands.\x1b[39m`);
        } catch (error) {
            console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
            await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
        }
    }
}