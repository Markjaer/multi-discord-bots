const { EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: {
        name: `breadcrumb`
    },
    async execute(interaction, client) {
        const { bot } = client;

        client.channels.fetch(interaction.channelId).then(async (channel) => {
            const image = interaction.fields.getTextInputValue("image");
            const color = interaction.fields.getTextInputValue("color");
            const title = interaction.fields.getTextInputValue("title");
            const description = interaction.fields.getTextInputValue("description");
            const hexdec = (color != "" ? parseInt(color.replace("#", ""), 16) : parseInt(bot.maincolor.replace("#", ""), 16));

            var header = null

            if (image != "") {
                header = new EmbedBuilder()
                .setImage(image)
                .setColor(hexdec);
            }

            const embed = new EmbedBuilder()
            .setColor(hexdec)
            .setTitle(title || '')
            .setDescription(description || '')
            .setTimestamp(new Date())
            .setImage(`https://i.stack.imgur.com/Fzh0w.png`)
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            });

            try {
                if (image != "") {
                    await channel.send({ embeds: [header, embed] });
                } else {
                    await channel.send({ embeds: [embed] });
                }
                
                await interaction.reply({ embeds: [client.config.embeds.S(`Så er den oprettet!`)], ephemeral: true });
            } catch (error) {
                console.error("Error processing modal input:", error);
                await interaction.reply({ embeds: [client.config.embeds.E(`Der skete en fejl med inputs. Prøv igen, eller kontakt udvikleren!`)], ephemeral: true });
                await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
            }
        });
    }
};
