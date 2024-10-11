const { EmbedBuilder, ButtonStyle, ActivityType } = require('discord.js');

module.exports = {
    bots: [
        { // bot has to be created on https://discord.com/developers/applications
            name: "Bot name...",
            website: "Website...",
            token: "Bot token...",
            botid: "Bot client id...",
            serverid: "Server id...",
            prefix: "!", // can be "!p" then you can "!p clear" or "!p ban <user>"
            maincolor: "#FFFFFF", // hex only with # like this "#FFFFFF"
            emoji: "logo", // emoji name thats has been uploaded from discord server like "logo" or "emoji_kappa"
            hooks: {
                tickets: {
                    label: "Label...",
                    headerimage: "https://example.com/example.png",
                    title: "Title...",
                    content: "Description...",
                    buttons: [
                        {
                            label: "Support",
                            style: "success",
                            emoji: "stop",
                            headerimage: "https://example.com/example.png",
                            title: "",
                            content: "Description..."
                        },
                        {
                            label: "Support",
                            style: "success",
                            emoji: "success",
                            headerimage: "https://example.com/example.png",
                            title: "",
                            content: "Description..."
                        },
                        {
                            label: "Support",
                            style: "success",
                            emoji: "error",
                            headerimage: "https://example.com/example.png",
                            title: "",
                            content: "Description..."
                        },
                        {
                            label: "Support",
                            style: "success",
                            emoji: "gun",
                            headerimage: "https://example.com/example.png",
                            title: "",
                            content: "Description..."
                        },
                    ]
                },
                claim: [
                    {
                        label: "Label...",
                        headerimage: "https://example.com/example.png",
                        title: "Title...",
                        content: "Description...",
                        roles: [ // max 5 buttons and use only theese styles
                            {label: "Label...", id: "00000000000000000", buttonstyle: "success", emojiid: "", link: ""},
                            // {label: "Primary", id: "00000000000000000", buttonstyle: "primary", emojiid: "1290904172685688894", link: ""},
                            // {label: "Secondary", id: "00000000000000000", buttonstyle: "secondary", emojiid: "1290904172685688894", link: ""},
                            // {label: "Success", id: "00000000000000000", buttonstyle: "success", emojiid: "1290904172685688894", link: ""},
                            // {label: "Danger", id: "00000000000000000", buttonstyle: "danger", emojiid: "1290904172685688894", link: ""},
                            // {label: "Link", id: "00000000000000000", buttonstyle: "link", emojiid: "", link: "https://aimmaster.info"},
                        ]
                    }
                ],
                channels: [
                    {
                        enabled: true,
                        text: "🎧 {membercount} members {req.name} {req.description}",
                        interval: 60, // seconds: 60 is 1 minutes
                        custom: "https://example.com/json.json", // api website to get json data like "{name: "test", description: "test"}" and use {req.[data from json]}
                        channelids: [
                            "00000000000000000"
                        ]
                    }
                ],
                presence: {
                    enabled: true,
                    interval: 10, // seconds: 60 is 1 minutes
                    activities: [
                        {
                            type: ActivityType.Watching,
                            text: "{membercount} members on discord {req.name} {req.description}",
                            custom: "https://example.com/json.json", // api website to get json data like "{name: "test", description: "test"}" and use {req.[data from json]}
                            status: "online"
                        }
                    ]
                },
                logs: {
                    infochannelid: "00000000000000000",
                    ready: {
                        enabled: true,
                        channeltext: "**{bot}** is online!", // sending success
                        pingtext: "**{bot}** is online!", // sending success
                        pingmemberids: [
                            "00000000000000000"
                        ],
                        channelids: [
                            "00000000000000000"
                        ]
                    },
                    offline: {
                        enabled: true,
                        backonlinetext: "**{server} is back online again!**\n{timestamp}", // sending success
                        offlinetext: "**{server} is offline!**\nThere might be a error, you have to run the bot manual!\n{timestamp}", // sending error
                        pingmemberids: [
                            "00000000000000000"
                        ],
                        channelids: [
                            "00000000000000000"
                        ]
                    },
                    join: {
                        enabled: true,
                        channeltext: "{emoji} Yooo, {usertag} welcome to **{server}**", // sending main
                        pingtext: "{usertag} has joined **{server}**", // sending success
                        pingmemberids: [
                            "00000000000000000"
                        ],
                        channelids: [
                            "00000000000000000"
                        ],
                        addroles: [
                            "00000000000000000"
                        ]
                    },
                    leave: {
                        enabled: true,
                        channeltext: "{emoji} Noooo, {usertag} left **{server}**", // sending main
                        pingtext: "{usertag} left **{server}**", // sending warning
                        pingmemberids: [
                            "00000000000000000"
                        ],
                        channelids: [
                            "00000000000000000"
                        ]
                    }
                }
            }
        },
        // { // bot has to be created on https://discord.com/developers/applications
        //     name: "Bot name...",
        //     website: "Website...",
        //     token: "Bot token...",
        //     botid: "Bot client id...",
        //     serverid: "Server id...",
        //     prefix: "!", // can be "!p" then you can "!p clear" or "!p ban <user>"
        //     maincolor: "#FFFFFF", // hex only with # like this "#FFFFFF"
        //     emoji: "logo", // emoji name thats has been uploaded from discord server like "logo" or "emoji_kappa"
        //     hooks: {
        //         tickets: {
        //             label: "Label...",
        //             headerimage: "https://example.com/example.png",
        //             title: "Title...",
        //             content: "Description...",
        //             buttons: [
        //                 {
        //                     label: "Support",
        //                     style: "success",
        //                     emoji: "stop",
        //                     headerimage: "https://example.com/example.png",
        //                     title: "",
        //                     content: "Description..."
        //                 },
        //                 {
        //                     label: "Support",
        //                     style: "success",
        //                     emoji: "success",
        //                     headerimage: "https://example.com/example.png",
        //                     title: "",
        //                     content: "Description..."
        //                 },
        //                 {
        //                     label: "Support",
        //                     style: "success",
        //                     emoji: "error",
        //                     headerimage: "https://example.com/example.png",
        //                     title: "",
        //                     content: "Description..."
        //                 },
        //                 {
        //                     label: "Support",
        //                     style: "success",
        //                     emoji: "gun",
        //                     headerimage: "https://example.com/example.png",
        //                     title: "",
        //                     content: "Description..."
        //                 },
        //             ]
        //         },
        //         claim: [
        //             {
        //                 label: "Label...",
        //                 headerimage: "https://example.com/example.png",
        //                 title: "Title...",
        //                 content: "Description...",
        //                 roles: [ // max 5 buttons and use only theese styles
        //                     {label: "Label...", id: "00000000000000000", buttonstyle: "success", emojiid: "", link: ""},
        //                     // {label: "Primary", id: "00000000000000000", buttonstyle: "primary", emojiid: "1290904172685688894", link: ""},
        //                     // {label: "Secondary", id: "00000000000000000", buttonstyle: "secondary", emojiid: "1290904172685688894", link: ""},
        //                     // {label: "Success", id: "00000000000000000", buttonstyle: "success", emojiid: "1290904172685688894", link: ""},
        //                     // {label: "Danger", id: "00000000000000000", buttonstyle: "danger", emojiid: "1290904172685688894", link: ""},
        //                     // {label: "Link", id: "00000000000000000", buttonstyle: "link", emojiid: "", link: "https://aimmaster.info"},
        //                 ]
        //             }
        //         ],
        //         channels: [
        //             {
        //                 enabled: true,
        //                 text: "🎧 {membercount} members {req.name} {req.description}",
        //                 interval: 60, // seconds: 60 is 1 minutes
        //                 custom: "https://example.com/json.json", // api website to get json data like "{name: "test", description: "test"}" and use {req.[data from json]}
        //                 channelids: [
        //                     "00000000000000000"
        //                 ]
        //             }
        //         ],
        //         presence: {
        //             enabled: true,
        //             interval: 10, // seconds: 60 is 1 minutes
        //             activities: [
        //                 {
        //                     type: ActivityType.Watching,
        //                     text: "{membercount} members on discord {req.name} {req.description}",
        //                     custom: "https://example.com/json.json", // api website to get json data like "{name: "test", description: "test"}" and use {req.[data from json]}
        //                     status: "online"
        //                 }
        //             ]
        //         },
        //         logs: {
        //             infochannelid: "00000000000000000",
        //             ready: {
        //                 enabled: true,
        //                 channeltext: "**{bot}** is online!", // sending success
        //                 pingtext: "**{bot}** is online!", // sending success
        //                 pingmemberids: [
        //                     "00000000000000000"
        //                 ],
        //                 channelids: [
        //                     "00000000000000000"
        //                 ]
        //             },
        //             offline: {
        //                 enabled: true,
        //                 backonlinetext: "**{server} is back online again!**\n{timestamp}", // sending success
        //                 offlinetext: "**{server} is offline!**\nThere might be a error, you have to run the bot manual!\n{timestamp}", // sending error
        //                 pingmemberids: [
        //                     "00000000000000000"
        //                 ],
        //                 channelids: [
        //                     "00000000000000000"
        //                 ]
        //             },
        //             join: {
        //                 enabled: true,
        //                 channeltext: "{emoji} Yooo, {usertag} welcome to **{server}**", // sending main
        //                 pingtext: "{usertag} has joined **{server}**", // sending success
        //                 pingmemberids: [
        //                     "00000000000000000"
        //                 ],
        //                 channelids: [
        //                     "00000000000000000"
        //                 ],
        //                 addroles: [
        //                     "00000000000000000"
        //                 ]
        //             },
        //             leave: {
        //                 enabled: true,
        //                 channeltext: "{emoji} Noooo, {usertag} left **{server}**", // sending main
        //                 pingtext: "{usertag} left **{server}**", // sending warning
        //                 pingmemberids: [
        //                     "00000000000000000"
        //                 ],
        //                 channelids: [
        //                     "00000000000000000"
        //                 ]
        //             }
        //         }
        //     }
        // }
    ],

    colors: {
        error: 0xFF0000, // #FF0000
        success: 0x00FF00, // #00FF00
        warning: 0xFFFF00, // #FFFF00
        info: 0xFFFF00, // #FFFF00
    },

    buttons: {
        "primary": ButtonStyle.Primary,
        "secondary": ButtonStyle.Secondary,
        "success": ButtonStyle.Success,
        "danger": ButtonStyle.Danger,
        "link": ButtonStyle.Link,
    },

    emojis: {
        error: '⛔',
        success: '✅',
        warning: '⚠️',
        info: '📝',
        stop: '🚫',
        gun: '🔫',
        sign: '🪧',
        wrench: '🔧',
    },

    embed: {
        breadcrumb: [
            {
                id: "image",
                label: "Billede link header",
                placeholder: "https://example.com/image.png",
                value: "",
                required: false,
                style: "long",
                minlength: null,
                maxlength: null
            },
            {
                id: "color",
                label: "Farve",
                placeholder: "#ffffff",
                value: "{color}",
                required: false,
                style: "short",
                minlength: null,
                maxlength: null
            },
            {
                id: "title",
                label: "Title",
                placeholder: "Title...",
                value: "",
                required: true,
                style: "short",
                minlength: null,
                maxlength: null
            },
            {
                id: "description",
                label: "Beskrivelse",
                placeholder: "Beskrivelse...",
                value: "",
                required: true,
                style: "long",
                minlength: null,
                maxlength: null
            }
        ]
    },

    functions: {
        REPLACEALL: (string, data, custom = "") => {
            const client = (data[0] !== "" && data[0] !== undefined ? data[0] : []);
            const interaction = (data[1] !== "" && data[1] !== undefined ? data[1] : []);
            const { bot } = client;
            const { user } = interaction;
            const server = client.guilds.cache.find(guild => guild.id === bot.serverid);

            var newString = string
            .replace('{member}', client.user.username)
            .replace('{username}', user?.username)
            .replace('{usertag}', `<@${user?.id}>`)
            .replace('{bot}', bot.name)
            .replace('{emoji}', client.emojis.cache.find(emoji => emoji.name === bot.emoji))
            .replace('{server}', bot.name)
            .replace('{custom}', custom)
            .replace('{membercount}', server.memberCount.toLocaleString());
            return newString;
        }
    },
    
    embeds: {
        LOG: (embed, data) => {
            const interaction = data[0];
            const bot = interaction.bot;
            const server = interaction.guilds.cache.find(guild => guild.id === bot.serverid);
            if (bot.hooks.logs.infochannelid != "") {
                server.channels.cache.get(bot.hooks.logs.infochannelid).send({ embeds: [embed]})
                return true;
            } else {
                return false;
            }
        },
        MAIN: (description, bot) => {
            const embed = new EmbedBuilder()
                .setColor(bot.hexdec)
                .setDescription(description);
            return embed;
        },
        ERROR: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.error)
                .setDescription(`\`${module.exports.emojis.error}\` : ${description}`);
            return embed;
        },
        SUCCESS: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.success)
                .setDescription(`\`${module.exports.emojis.success}\` : ${description}`);
            return embed;
        },
        WARNING: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.warning)
                .setDescription(`\`${module.exports.emojis.warning}\` : ${description}`);
            return embed;
        },
        INFO: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.info)
                .setDescription(`\`${module.exports.emojis.info}\` : ${description}`);
            return embed;
        },
        E: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.error)
                .setDescription(`\`${module.exports.emojis.error}\` : ${description}`);
            return embed;
        },
        S: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.success)
                .setDescription(`\`${module.exports.emojis.success}\` : ${description}`);
            return embed;
        },
        Q: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.warning)
                .setDescription(`\`${module.exports.emojis.warning}\` : ${description}`);
            return embed;
        },
        I: (description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.info)
                .setDescription(`\`${module.exports.emojis.info}\` : ${description}`);
            return embed;
        },
        N: (emoji, description) => {
            const embed = new EmbedBuilder()
                .setColor(module.exports.colors.info)
                .setDescription(`\`${emoji}\` : ${description}`);
            return embed;
        }
    }
}