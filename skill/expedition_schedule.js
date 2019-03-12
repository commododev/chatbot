// このファイルは遠征の日程について問い合わせられた場合のskillファイルです。
// 遠征の日程を返します。

'use strict';

module.exports = class expedition_schedule {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `遠征は例年７月ごろに企画されています。2019年度東北遠征の日程は現在調整中です。
            \n詳細が決まり次第、募集要項がgmailで配信されます。`
        //スケジュールが決まっていないパターン
        };
        await bot.reply(message);
    }
};