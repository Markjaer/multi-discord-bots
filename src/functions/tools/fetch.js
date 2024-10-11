const axios = require('axios');

module.exports = (client) => {
    client.fetch = async (url) => {
        const { bot, config } = client;
        
        try {
            const response = await axios.get(url);
            const data = response.data;
            return data;
        } catch (error) {
            console.error(`\x1b[91m${module.exports.name} Error:\x1b[39m`, error);

            await config.embeds.LOG(
                config.embeds.ERROR(`\`${module.exports.name}\`: ${error}`),
                [client]
            );
            return "";
        }
    };
};