const fs = require('fs');

module.exports = (client) => {
    client.handleComponents = async () => {
        const { buttons, selectMenus, modals, bot, config } = client;
        const componentFolders = fs.readdirSync('./src/components');

        if (config.bots.length == (bot.current + 1)) console.log(`\n\x1b[1m\x1b[4mComponents:\x1b[0m`);
        for (const folder of componentFolders) {
            const componentFiles = fs
            .readdirSync(`./src/components/${folder}`)
            .filter((file) => file.endsWith('.js'));

            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`);
                        buttons.set(button.data.name, button);
                        if (config.bots.length == (bot.current + 1)) console.log(` \x1b[35m• ${folder}/${file}\x1b[0m`);
                    }
                    break;

                case "selectMenus":
                    for (const file of componentFiles) {
                        const menu = require(`../../components/${folder}/${file}`);
                        selectMenus.set(menu.data.name, menu);
                        if (config.bots.length == (bot.current + 1)) console.log(` \x1b[35m• ${folder}/${file}\x1b[0m`);
                    }
                    break;

                case "modals":
                    for (const file of componentFiles) {
                        const modal = require(`../../components/${folder}/${file}`);
                        modals.set(modal.data.name, modal);
                        if (config.bots.length == (bot.current + 1)) console.log(` \x1b[35m• ${folder}/${file}\x1b[0m`);
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
}