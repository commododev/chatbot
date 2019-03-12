// このファイルは訪問演奏への参加申込について問い合わせられた場合のskillファイルです。
// 参加申込の流れについてテキストで返します（予定）

'use strict';

module.exports = class visit_application {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `メールアドレス、必要事項、こちらからの連絡などなど`
        };
        await bot.reply(message);
    }
};