const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: `claim`
    },
    async execute(interaction, client) {
        const { bot, config } = client;

        client.channels.fetch(interaction.channelId).then(async (channel) => {
            const buttons = [];
            const claimItem = bot.hooks.claim[interaction.values[0]];
            const hexdec = parseInt(bot.maincolor.replace("#", ""), 16);

            var header = null

            if (claimItem.headerimage != "") {
                header = new EmbedBuilder()
                .setImage(claimItem.headerimage)
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
            
            claimItem.roles.map((item, key) => {
                if (item.buttonstyle == "link") {
                    buttons[key] = new ButtonBuilder()
                    .setLabel(item.label)
                    .setURL(item.link)
                    .setStyle(config.buttons[item.buttonstyle] || ButtonStyle.Primary); 
                } else {
                    if (item.emojiid != "") {
                        buttons[key] = new ButtonBuilder()
                        .setCustomId(`claimRole[${interaction.values[0]},${key}]`)
                        .setLabel(item.label)
                        .setEmoji(item.emojiid)
                        .setStyle(config.buttons[item.buttonstyle] || ButtonStyle.Primary);
                    } else {
                        buttons[key] = new ButtonBuilder()
                        .setCustomId(`claimRole[${interaction.values[0]},${key}]`)
                        .setLabel(item.label)
                        .setStyle(config.buttons[item.buttonstyle] || ButtonStyle.Primary);
                    }
                }
            });

            const actionRows = new ActionRowBuilder().addComponents(buttons);

            try {
                if (claimItem.headerimage != "") {
                    await channel.send({ embeds: [header, embed],  components: [actionRows] });
                } else {
                    await channel.send({ embeds: [embed],  components: [actionRows] });
                }

                await interaction.reply({ embeds: [client.config.embeds.S(`Så er den oprettet!`)], ephemeral: true });
            } catch (error) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
                await interaction.reply({ embeds: [client.config.embeds.ERROR(`Der skete en fejl. Prøv igen, eller kontakt udvikleren!`)], ephemeral: true });
                await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
            }
        });
    }
}