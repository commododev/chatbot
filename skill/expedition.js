// このファイルは遠征について問い合わせられた場合のskillファイルです。
// 1. 参加要項について
// 2. 次回遠征の日程について
// 3. 参加登録
// 4. 曲目
// の4つに分岐させるボタンの作成をします。

'use strict';

module.exports = class expedition {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: "遠征についてお問い合わせありがとうございます。"
        };

        await bot.reply(message);
    }
};