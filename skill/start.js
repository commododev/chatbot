'use strict';

module.exports = class start {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `こんにちは!!`

        await bot.reply(message);
    }
};