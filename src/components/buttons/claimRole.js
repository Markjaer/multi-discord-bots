module.exports = {
    data: {
        name: `claimRole`
    },
    async execute(interaction, client) {
        const { customId, values, realCustomId, member, guild } = interaction;  // Get the CustomId from the button interaction
        const { bot } = client;

        const claim = bot.hooks.claim[parseInt(values[0])].roles[parseInt(values[1])]
        const roleId = claim.id;
        const role = guild.roles.cache.get(roleId);

        if (!roleId || roleId == 0 || roleId == "" || roleId == null || roleId == undefined) {
            return interaction.reply({ embeds: [client.config.embeds.E(`Denne rolle eksistere ikke, kontakt en udviker!`)], ephemeral: true });
        }

        try {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ embeds: [client.config.embeds.S(`Du har modtaget rollen **${role.name}** og er **${role.name}**`)], ephemeral: true });
        } catch (error) {
            console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
            await interaction.reply({ embeds: [client.config.embeds.ERROR(`Der skete en fejl. Prøv igen, eller kontakt udvikleren!`)], ephemeral: true });
            await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
        }
    }
}