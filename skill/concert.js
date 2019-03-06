// このファイルはチャリティーコンサートについて問い合わせられた場合のskillファイルです。
// 1. 演奏会参加について
// 2. 演奏会そのものについて
// の二つに分岐させるボタンの作成をします。

'use strict';

module.exports = class concert {
    async finish(bot, event, context){
        let message = {
            type: "template",
            altText: `チャリティーコンサートについてお問い合わせありがとうございます。\n"チャリティーコンサート参加について"、"チャリティーコンサート情報について"からお問い合わせになりたいもの入力してください。`,
            template: {
                type: "buttons",
                text: "チャリティーコンサートについてお問い合わせありがとうございます。以下からお問い合わせになりたい内容をお選びください。",
                actions: [
                    {type:"postback",label:"コンサート参加",data:"チャリティーコンサート参加"},
                    {type:"postback",label:"コンサート情報",data:"チャリティーコンサート情報"}
                ]
            }
        };

        await bot.reply(message);
    }
};