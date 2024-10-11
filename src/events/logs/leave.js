const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(interaction, client) {
        const { bot, config } = client;
        const hooks = bot.hooks.logs;
        const conchannel = hooks.leave;

        if (conchannel.enabled && conchannel.channelids.length > 0) {
            const channelreplacing = await config.functions.REPLACEALL(conchannel.channeltext, [client, interaction]);
            const pingreplacing = await config.functions.REPLACEALL(conchannel.pingtext, [client, interaction]);
            
            const channeltext = await config.embeds.MAIN(channelreplacing, bot);
            const pingtext = await config.embeds.WARNING(pingreplacing);
            
            for (const channelid of conchannel.channelids) {
                const channel = await client.channels.fetch(channelid);
                
                try {
                    await channel.send({ embeds: [channeltext] });
                } catch (error) {
                    console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
                    await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
                }
            }
            
            for (const pingMemberId of conchannel.pingmemberids) {
                const member = await client.users.fetch(pingMemberId);

                try {
                    await member.send({ embeds: [pingtext] });
                } catch (error) {
                    console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
                    await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
                }
            }
        }
    }
}