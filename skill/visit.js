// このファイルは訪問演奏会について問い合わせられた場合のskillファイルです。
// 1. 日程、必要楽器、拘束時間について
// 2. 登録について
// の二つに分岐させるボタンの作成をします。

'use strict';

module.exports = class visit {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: "訪問演奏会についてお問い合わせありがとうございます。"
        };

        await bot.reply(message);
    }
};