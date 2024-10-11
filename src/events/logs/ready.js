const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    async execute(interaction, client) {
        const { bot, config } = client;
        const hooks = bot.hooks.logs;
        const conchannel = hooks.ready;

        // client.pickPresence();
        // setInterval(client.pickPresence, 10 * 1000);

        if (conchannel.enabled && conchannel.channelids.length > 0) {
            const txt = await config.functions.REPLACEALL(conchannel.text, [client, interaction]);

            const embed = await client.config.embeds.S(txt);
            
            for (const channelid of conchannel.channelids) {
                const channel = await client.channels.fetch(channelid);
                
                try {
                    await channel.send({ embeds: [embed] });
                } catch (error) {
                    console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);

                    await config.embeds.LOG(
                        config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                        [client]
                    );
                }
            }
            
            for (const pingMemberId of conchannel.pingmemberids) {
                const member = await client.users.fetch(pingMemberId);

                try {
                    await member.send({ embeds: [embed] });
                } catch (error) {
                    console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);

                    await config.embeds.LOG(
                        config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                        [client]
                    );
                }
            }
        }
    }
}