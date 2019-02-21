// このファイルはチャリティーコンサートの参加概要について問い合わせられた場合のskillファイルです。
// 理念などを返します

'use strict';

module.exports = class concert_attend_overview {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: "コンサートやるよ〜(後日修正)"
        };
        await bot.reply(message);
    }
};