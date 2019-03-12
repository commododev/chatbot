// このファイルは遠征の概要について問い合わせられた場合のskillファイルです。
// 遠征の説明を返します。

'use strict';

module.exports = class expedition_information {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `「遠征」は、訪問演奏活動の拡大版です。東日本大震災の被災地の一つである仙台・石巻に、これまで５度の訪問を行っています。
            \n毎年１回程度の開催で、募集状況はgメールで配信しています。参加申込はensemble.commodo.2014@gmail.comにご連絡ください。`
        //詳しくは以下から選択してください。"募集状況"、"参加申込"...のように続けたい
        };
        await bot.reply(message);
    }
};