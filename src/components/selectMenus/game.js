module.exports = {
    data: {
        name: `game`
    },
    async execute(interaction, client) {
        const { bot } = client;
        
        await interaction.reply({
            content: `You selected: ${interaction.values[0]}`
        });
    }
}