module.exports = {
    data: {
        name: `board`
    },
    async execute(interaction, client) {
        const { bot } = client;
        
        await interaction.reply({
            content: `You selected: ${interaction.fields.getTextInputValue("textInput")}`
        });
    }
}