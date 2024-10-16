const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('getavatar')
        .setType(ApplicationCommandType.User),
    async execute(interaction, client) {
        const { bot, config } = client;
        
        await interaction.reply({
            content: `${interaction.targetUser.displayAvatarURL()}`
        });
    }
}