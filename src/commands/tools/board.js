const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('board')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Return my board!'),
    async execute(interaction, client) {
        const { bot, config } = client;
        
        const modal = new ModalBuilder()
        .setCustomId(`board`)
        .setTitle(`Hvad skal der stå?`)
        
        const textInput = new TextInputBuilder()
        .setCustomId(`textInput`)
        .setLabel(`Beskriv...`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    }
}