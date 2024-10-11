const { SlashCommandBuilder, PermissionFlagsBits, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Return my select menu!'),
    async execute(interaction, client) {
        const { bot, config } = client;
        
        const menu = new StringSelectMenuBuilder()
        .setCustomId(`claim`)
        .setMinValues(0)
        .setMaxValues(bot.hooks.claim.length)
        .setOptions(
            bot.hooks.claim.map((item, key) => 
                new StringSelectMenuOptionBuilder()
                .setLabel(item.label)
                .setValue(`${key}`)
            )
        );

        await interaction.reply({
            content: "Vælg en type knap til denne breadcrumb",
            components: [new ActionRowBuilder().addComponents(menu)], 
            ephemeral: true
        });
    }
}