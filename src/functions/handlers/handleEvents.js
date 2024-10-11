const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const { bot, config } = client;
        const eventFolders = fs.readdirSync('./src/events');

        if (config.bots.length == (bot.current + 1)) console.log(`\n\x1b[1m\x1b[4mEvents:\x1b[0m`);
        for (const folder of eventFolders) {
            const eventFiles = fs
            .readdirSync(`./src/events/${folder}`)
            .filter((file) => file.endsWith('.js'));

            switch (folder) {
                case "client":
                case "logs":
                case "utils":
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
                        else client.on(event.name, (...args) => event.execute(...args, client));
                        if (config.bots.length == (bot.current + 1)) console.log(` \x1b[35m• ${folder}/${file}\x1b[0m`);
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
}