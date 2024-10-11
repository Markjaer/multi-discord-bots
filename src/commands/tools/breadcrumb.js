const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('breadcrumb')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Return my breadcrumb!'),
    async execute(interaction, client) {
        const { bot, config } = client;
        
        const modal = new ModalBuilder()
        .setCustomId(`breadcrumb`)
        .setTitle(`Hvad skal der stå?`)

        var items = [];

        config.embed.breadcrumb.forEach((item, key) => {
            var style = (item.style == "short" ? TextInputStyle.Short : TextInputStyle.Paragraph);
            var inputVal = item.value
            .replace('{emoji}', bot.emoji)
            .replace('{color}', bot.maincolor);

            if (item.minlength != null && item.maxlength != null) {
                items[key] = new TextInputBuilder()
                .setCustomId(item.id)
                .setLabel(item.label)
                .setPlaceholder(item.placeholder)
                .setValue(inputVal)
                .setRequired(item.required)
                .setMinLength(item.minlength)
                .setMaxLength(item.maxlength)
                .setStyle(style);
            } else {
                items[key] = new TextInputBuilder()
                .setCustomId(item.id)
                .setLabel(item.label)
                .setPlaceholder(item.placeholder)
                .setValue(inputVal)
                .setRequired(item.required)
                .setStyle(style);
            }
        });
        
        var components = []
        items.forEach((item, key) => {
            components[key] = new ActionRowBuilder().addComponents(item);
        });

        modal.addComponents(components);

        await interaction.showModal(modal);
    }
}