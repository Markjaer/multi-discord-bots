const { SlashCommandBuilder, EmbedBuilder, ChannelType, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setupticket')
    .setDescription('🎫 Sæt et ticket system op! /setupticket')
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption(option => option
        .setName('ticket-embed-to')
        .setDescription('📝 Den tekst kanal, hvor folk kan åbne sin ticket!')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .addChannelOption(option => option
        .setName('ticket-create-to')
        .setDescription('📂 Den kategori, hvor tickets ryger ind i!')
        .addChannelTypes(ChannelType.GuildCategory)
        .setRequired(true)
    )
    .addChannelOption(option => option
        .setName('ticket-close-to')
        .setDescription('📂 Den kategori, hvor tickets ryger hen når tickets er færdig!')
        .addChannelTypes(ChannelType.GuildCategory)
        .setRequired(true)
    )
    .addChannelOption(option => option
        .setName('ticket-notification-to')
        .setDescription('📝 Den tekst kanal, hvor de ticket der bliver oprettet viser!')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .addChannelOption(option => option
        .setName('ticket-log-to')
        .setDescription('📝 Den tekst kanal, hvor de ticket der bliver oprettet logger!')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    ),
    async execute(interaction, client) {
        const { bot, config } = client;

        const ticket = bot.hooks.tickets;
        const hexdec = parseInt(bot.maincolor.replace("#", ""), 16);

        const embedChannel = interaction.options.getChannel('ticket-embed-to');
        const createCategory = interaction.options.getChannel('ticket-create-to');
        const closeCategory = interaction.options.getChannel('ticket-close-to');
        const notificationChannel = interaction.options.getChannel('ticket-notification-to');
        const logChannel = interaction.options.getChannel('ticket-log-to');

        await interaction.deferReply({ ephemeral: true });

        var header = null

        if (ticket.headerimage != "") {
            header = new EmbedBuilder()
            .setImage(ticket.headerimage)
            .setColor(hexdec);
        }

        const embed = new EmbedBuilder()
        .setColor(hexdec)
        .setTitle(claimItem.title || '')
        .setDescription(claimItem.content || '')
        .setTimestamp(new Date())
        .setImage(`https://i.stack.imgur.com/Fzh0w.png`)
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.username
        });

        // const ticketEmbed = new EmbedBuilder()
        //     .setTitle(`🎫  ${client.user.username} Ticket System`)
        //     .setDescription(`Velkommen til ${client.user.username} Ticket System.\n\nHvis du mangler hjælp til noget.\nSå opret en ticket og afvent 😉`)
        //     .setThumbnail(client.user.displayAvatarURL())
        //     .setImage(`https://i.stack.imgur.com/Fzh0w.png`)
        //     .setFooter({
        //         iconURL: client.user.displayAvatarURL(),
        //         text: client.user.username
        //     })
        //     .setColor(client.config.colors.info);

        // // Buttons
        // const ticketRow = new ActionRowBuilder()
        //     .addComponents(
        //         new ButtonBuilder()
        //             .setCustomId(`support`)
        //             .setLabel(`Support`)
        //             .setStyle(ButtonStyle.Secondary)
        //             .setEmoji('🚫'),
        //         new ButtonBuilder()
        //             .setCustomId(`gang-group`)
        //             .setLabel(`Bande/Gruppering`)
        //             .setStyle(ButtonStyle.Secondary)
        //             .setEmoji('🔫'),
        //         new ButtonBuilder()
        //             .setCustomId(`bug-report`)
        //             .setLabel(`Bug Report`)
        //             .setStyle(ButtonStyle.Secondary)
        //             .setEmoji('🪧'),
        //         new ButtonBuilder()
        //             .setCustomId(`development`)
        //             .setLabel(`Development`)
        //             .setStyle(ButtonStyle.Secondary)
        //             .setEmoji('🔧'),
        //         new ButtonBuilder()
        //             .setCustomId(`eup-mlo`)
        //             .setLabel(`EUP/MLO`)
        //             .setStyle(ButtonStyle.Secondary)
        //             .setEmoji('📍'),
        //     );

        // await channel.send({ embeds: [imageMessage, ticketEmbed], components: [ticketRow] }); // Send the embed and the button to the channel in line 16.

        // const ticketData = {
        //     // supportRoleID: supportRole.id,
        //     openCategoryID: openCategory.id,
        //     closeCategoryID: closeCategory.id
        // }; // Create an object with the data.

        // fs.writeFileSync(`ticket.json`, JSON.stringify(ticketData, null, 4)); // Write the data to the file.

        // await interaction.editReply({ embeds: [client.config.embeds.S('Ticket systemet er nu sat op og er klar!')] }); // Edit the reply to the user.
    }
};