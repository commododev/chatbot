// このファイルはチャリティーコンサートの指揮者について問い合わせられた場合のskillファイルです。
// 指揮者情報を返します。

'use strict';

module.exports = class concert_information_conductor {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `中川真文さん`
        };
        await bot.reply(message);
    }
};