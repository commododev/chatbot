// このファイルはその他について問い合わせられた場合のskillファイルです。
// コモドのメアドを返します。

'use strict';

module.exports = class others {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: "ensemble.commodo.2014@gmail.com \n までご連絡ください"
        };

        await bot.reply(message);
    }
};