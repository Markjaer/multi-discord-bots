const { Events } = require("discord.js");

module.exports = {
    name: Events.PresenceUpdate,
    once: false,
    async execute(oldStatus, newStatus, client) {
        const { bot, config } = client;
        const hooks = bot.hooks.logs;
        const conchannel = hooks.offline;
        const timestamp = `<t:${Math.floor(Date.now() / 1000)}:R>`;

        if (newStatus.userId !== bot.id) return;
        
        async function sendMessage(message) {
            for (const channelId of conchannel.channelids) {
                const channel = await client.channels.fetch(channelId);
    
                try {
                    await channel.send({ embeds: [message] });
                } catch (error) {
                    console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
                    await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
                }
            }

            for (const pingMemberId of conchannel.pingmemberids) {
                const member = await client.users.fetch(pingMemberId);

                try {
                    await member.send({ embeds: [message] });
                } catch (error) {
                    console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
                    await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
                }
            }
        }

        if (!oldStatus && newStatus.status !== "offline") {
            var txt = await config.functions.REPLACEALL(conchannel.backonlinetext, [client]);
            txt = txt.replace('{timestamp}', timestamp);

            await sendMessage(client.config.embeds.S(txt));
        } else if (oldStatus.status !== "offline" && newStatus.status == "offline") {
            var txt = await config.functions.REPLACEALL(conchannel.offlinetext, [client]);
            txt = txt.replace('{timestamp}', timestamp);

            await sendMessage(client.config.embeds.ERROR(txt));
        }
    }
}