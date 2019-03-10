// このファイルは訪問演奏について問い合わせられた場合のskillファイルです。
// 1. 訪問演奏の概要について
// 2. 訪問演奏の募集状況について
// 3. 訪問演奏への参加申込について
// の三つに分岐させるボタンの作成をします。

'use strict';

module.exports = class visit {
    async finish(bot, event, context){
        let message = {
            type: "template",
            altText: `訪問演奏についてお問い合わせありがとうございます。\n"訪問演奏の概要"、"訪問演奏の募集状況"、"訪問演奏への参加申込"からお問い合わせになりたいものを入力してください`,
            template: {
                type: "buttons",
                text: "訪問演奏についてお問い合わせありがとうございます。以下からお問い合わせになりたい内容をお選びください。",
                actions: [
                    {type:"postback",label:"訪問演奏概要",data:"訪問演奏の概要"},
                    {type:"postback",label:"訪問演奏の募集状況",data:"訪問演奏の募集状況"},
                    {type:"postback",label:"訪問演奏への参加申込",data:"訪問演奏への参加申込"}
                ]
            }
        };

        await bot.reply(message);
    }
};