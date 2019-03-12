// このファイルは訪問演奏の募集状況について問い合わせられた場合のskillファイルです。
// 最終的には、最新の募集状況とリンクしたい。

'use strict';

module.exports = class visit_state {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `イリーゼよしかわ
            \n日時:3/16(土)14:00〜15:00(リハ13:00〜)
            \n募集:全楽器(エレクトーンあり)
            \n曲目:卒業の曲、歌謡曲 他`
        };
        await bot.reply(message);
    }
};