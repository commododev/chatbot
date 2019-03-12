// このファイルは遠征の参加申込について問い合わせられた場合のskillファイルです。
// 遠征の申込方法を返します。

'use strict';

module.exports = class expedition_schedule {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `遠征への参加申込はensemble.commodo.2014@gmail.comにご連絡ください。
            \n2019年度東北遠征は現在企画中です。\n詳細が決まり次第、募集要項がgmailで配信されます。`
        //詳細が決まっていないパターン
        };
        await bot.reply(message);
    }
};