// このファイルはチャリティーコンサートの開催日時について問い合わせられた場合のskillファイルです。
// テキストとチラシの画像を返します。

'use strict';

module.exports = class concert_information_date{
    async finish(bot, event, context){
        let message = [{
            type: "text",
            text: 
            `チャリティーコンサートは以下の日時場所で開催します。
<日時>
2019年5月25日(土) 14:00開演 13:30開場 
<場所>
大田区民プラザ 大ホール
全席自由・500円(中学生以下無料、全額石巻市へ寄付)
未就学児入場可能で声を出しても大丈夫です。`
        },
        {
            type: "image",
            originalContentUrl: "https://static.wixstatic.com/media/d169f6_0e59f22dba234eada7522de19da7968e~mv2.jpg/v1/fill/w_742,h_1024,al_c,q_85,usm_0.66_1.00_0.01/S__14868536.webp",
            previewImageUrl: "https://static.wixstatic.com/media/d169f6_0e59f22dba234eada7522de19da7968e~mv2.jpg/v1/fill/w_742,h_1024,al_c,q_85,usm_0.66_1.00_0.01/S__14868536.webp"
        }];
        await bot.reply(message);
    }
};