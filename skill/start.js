'use strict';

module.exports = class start {
    // パラメーターが全部揃ったら実行する処理を記述します。
    async finish(bot, event, context){
        let message = {
            text: `こんにちは!!`
        };

        await bot.reply(message);
    }
};