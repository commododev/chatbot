// このファイルはチャリティーコンサートそのものについて問い合わせられた場合のskillファイルです。
// 1. 指揮者紹介
// 2. 曲一覧
// 3. 日時と場所
// の三つに分岐させるボタンの作成をします。

'use strict';

module.exports = class concert_information {
    async finish(bot, event, context){
        let message = {
            type: "template",
            altText: `チャリティーコンサートの情報についてお問い合わせありがとうございます。\n"チャリティーコンサート指揮者情報"、"チャリティーコンサート曲目"、"チャリティーコンサート開催日時"からお問い合わせになりたいもの入力してください。`,
            template: {
                type: "buttons",
                text: "チャリティーコンサートの情報についてお問い合わせありがとうございます。以下からお問い合わせになりたい内容をお選びください。",
                actions: [
                    {type:"postback",label:"指揮者情報",data:"チャリティーコンサート指揮者情報"},
                    {type:"postback",label:"曲目",data:"チャリティーコンサート曲目"},
                    {type:"postback",label:"開催日時",data:"チャリティーコンサート開催日時"}
                ]
            }
        };

        await bot.reply(message);
    }
};