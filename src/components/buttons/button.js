module.exports = {
    data: {
        name: `button`
    },
    async execute(interaction, client) {
        const { bot } = client;
        
        await interaction.reply({
            content: `https://arcticfireline.com`
        });
    }
}