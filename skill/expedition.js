// このファイルは遠征について問い合わせられた場合のskillファイルです。
// 1. 遠征についての概要
// 2. 遠征の日程について
// 3. 参加申込について
// の３つに分岐させるボタンの作成をします。

'use strict';

module.exports = class expedition {
    async finish(bot, event, context){
        let message = {
            type: "template",
            altText: `遠征についてお問い合わせありがとうございます。\n"遠征について"、"遠征の日程について"、"遠征の参加申込について"からお問い合わせになりたいもの入力してください。`,
            template: {
                type: "buttons",
                text: "遠征についてお問い合わせありがとうございます。以下からお問い合わせになりたい内容をお選びください。",
                actions: [
                    {type:"postback",label:"遠征について",data:"遠征の概要"},
                    {type:"postback",label:"遠征の日程について",data:"遠征の日程"},
                    {type:"postback",label:"遠征の参加申込について",data:"遠征の参加申込"}
                ]
            }
        };
        await bot.reply(message);
    }
};