// このファイルはチャリティーコンサートについて問い合わせられた場合のskillファイルです。
// 1. 演奏会参加について
// 2. 演奏会そのものについて
// の二つに分岐させるボタンの作成をします。

'use strict';

module.exports = class concert {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: "チャリティーコンサートについてお問い合わせありがとうございます。"
        };

        await bot.reply(message);
    }
};