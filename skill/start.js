'use strict';

module.exports = class start {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `命の恩人`
        };

        await bot.reply(message);
    }
};