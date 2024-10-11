const { Events } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    async execute(interaction, client) {
        const { bot, config } = client;
        const hooks = bot.hooks;
        const conchannel = hooks.presence;

        async function activityOptions(presence) {
            const options = [];
        
            for (const item of presence.activities) {
                let req = {};
                
                if (item.custom !== "") {
                    try {
                        req = await client.fetch(item.custom);
                    } catch (error) {
                        console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);
                        await config.embeds.LOG(config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`), [client]);
                    }
                }
        
                const text = item.text.replace(/{req\.(\w+)}/g, (match, key) => {
                    return req[key] !== undefined ? req[key] : match;
                });
        
                const replacingText = config.functions.REPLACEALL(text, [client], req);
                
                options.push({
                    type: item.type,
                    text: replacingText,
                    status: item.status
                });
            }
        
            return options;
        }

        async function pickPresence() {
            try {
                const options = await activityOptions(conchannel);
                const option = Math.floor(Math.random() * options.length);

                await client.user.setPresence({
                    activities: [{
                        name: options[option].text,
                        type: options[option].type,
                    }],
                    status: options[option].status,
                });
            } catch (error) {
                console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);

                await config.embeds.LOG(
                    config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                    [client]
                );
            }
        }

        if (conchannel.enabled && bot.id !== "") {
            setInterval(pickPresence, 1000 * conchannel.interval);
        }
    }
}