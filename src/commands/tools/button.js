const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Return my button!'),
    async execute(interaction, client) {
        const { bot, config } = client;
        
        const button = new ButtonBuilder()
        .setCustomId('button')
        .setLabel(`Klik på mig`)
        .setStyle(ButtonStyle.Primary);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
}