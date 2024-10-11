const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    async execute(interaction, client) {
        const { bot, config } = client;
        const hooks = bot.hooks;
        const conchannel = hooks.channels;

        for (const item of conchannel) {
            if (item.enabled && item.channelids.length > 0) {
                async function updateChannel() {
                    let req = {};
                    
                    if (item.custom !== "") {
                        try {
                            req = await client.fetch(item.custom);
                        } catch (error) {
                            console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
            
                            await config.embeds.LOG(
                                config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                                [client]
                            );
                        }
                    }
        
                    const text = item.text.replace(/{req\.(\w+)}/g, (match, key) => {
                        return req[key] !== undefined ? req[key] : match;
                    });

                    const replacingText = config.functions.REPLACEALL(text, [client], req);

                    for (const channelid of item.channelids) {
                        const channel = await client.channels.fetch(channelid);

                        try {
                            await channel.setName(replacingText);
                        } catch (error) {
                            console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);

                            await config.embeds.LOG(
                                config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                                [client]
                            );
                        }
                    }
                }

                updateChannel();
                setInterval(updateChannel, 1000 * item.interval);
            }
        }
    }
}