// このファイルはチャリティーコンサートの参加について問い合わせられた場合のskillファイルです。
// 1. 演奏会参加の概要
// 2. 参加登録方法
// 3. 練習日程
// の三つに分岐させるボタンの作成をします。

'use strict';

module.exports = class concert_attend {
    async finish(bot, event, context){
        let message = {
            type: "template",
            altText: `チャリティーコンサートの参加についてお問い合わせありがとうございます。\n"チャリティーコンサート参加の概要"、"チャリティーコンサート参加登録方法"、"チャリティーコンサート練習日程"からお問い合わせになりたいもの入力してください。`,
            template: {
                type: "buttons",
                text: "チャリティーコンサートの参加についてお問い合わせありがとうございます。以下からお問い合わせになりたい内容をお選びください。",
                actions: [
                    {type:"postback",label:"参加の概要",data:"チャリティーコンサート参加概要"},
                    {type:"postback",label:"参加登録方法",data:"チャリティーコンサート参加登録方法"},
                    {type:"postback",label:"練習日程",data:"チャリティーコンサート練習日程"}
                ]
            }
        };

        await bot.reply(message);
    }
};