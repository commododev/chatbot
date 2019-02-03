// このファイルはその他について問い合わせられた場合のskillファイルです。
// コモドのメアドを返します。

'use strict';

module.exports = class others {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: "その他についてお問い合わせありがとうございます。"
        };

        await bot.reply(message);
    }
};