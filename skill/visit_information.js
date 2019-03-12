// このファイルは訪問演奏活動の概要について問い合わせられた場合のskillファイルです。
// 訪問演奏の説明を返します。

'use strict';

module.exports = class visit_information {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: `「訪問演奏活動」は、普段生の演奏を聴く機会のあまりない老人ホームや保育園・幼稚園、病院などの施設に直接出向いて演奏を行う活動です。
            \n月に１～２回程度の活動で、募集状況はgメールで配信しています。参加申込はensemble.commodo.2014@gmail.comにご連絡ください。`
        //詳しくは以下から選択してください。"募集状況"、"参加申込"...のように続けたい
        };
        await bot.reply(message);
    }
};