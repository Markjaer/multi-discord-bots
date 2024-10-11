module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                await interaction.reply({
                    content: `Noget gik galt, prøv igen senere eller kontakt en udvikler!`,
                    ephemeral: true
                });
                
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                    [client]
                );
            }
        } else if (interaction.isButton()) {
            const { buttons } = client;
            const { customId } = interaction;
            const newCustomId = customId.match(/^[^\[]+/)[0];
            const button = buttons.get(newCustomId);
            interaction.values = customId.match(/\[(.*?)\]/)[1].split(',');
            interaction.realCustomId = newCustomId;
            if (!button) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, 'Der er ingen kode for denne: [isButton]!');
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: Der er ingen kode for denne: [isButton]!`),
                    [client]
                );

                return;
            }

            try {
                await button.execute(interaction, client)
            } catch (error) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                    [client]
                );
            }
        } else if (interaction.isSelectMenu()) {
            const { selectMenus } = client;
            const { customId } = interaction;
            const menu = selectMenus.get(customId);
            if (!menu) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, 'Der er ingen kode for denne: [isSelectMenu]!');
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: Der er ingen kode for denne: [isSelectMenu]!`),
                    [client]
                );
                
                return;
            }

            try {
                await menu.execute(interaction, client)
            } catch (error) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                    [client]
                );
            }
        } else if (interaction.isModalSubmit()) {
            const { modals } = client;
            const { customId } = interaction;
            const modal = modals.get(customId);
            if (!modal) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, 'Der er ingen kode for denne: [isModalSubmit]!');
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: Der er ingen kode for denne: [isModalSubmit]!`),
                    [client]
                );
                
                return;
            }

            try {
                await modal.execute(interaction, client)
            } catch (error) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                    [client]
                );
            }
        } else if (interaction.isContextMenuCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const contextCommand = commands.get(commandName);
            if (!contextCommand) return;

            try {
                await contextCommand.execute(interaction, client);
            } catch (error) {
                await interaction.reply({
                    content: `Noget gik galt, prøv igen senere eller kontakt en udvikler!`,
                    ephemeral: true
                });

                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
    
                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                    [client]
                );
            }
        }
    }
}