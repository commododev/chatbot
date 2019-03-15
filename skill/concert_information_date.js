// このファイルはチャリティーコンサートの開催日時について問い合わせられた場合のskillファイルです。
// テキストとチラシの画像を返します。

'use strict';

const doRequest = require('../doRequest');

module.exports = class concert_information_date{
    async finish(bot, event, context){
        let text = "チャリティーコンサートは以下の日時場所で開催します。";
        await doRequest.getGSS('concert_information_date').then((data) => {
            let info = data[0];
            text += 
`
<日時>
${info.date}
<場所>
${info.place}
${info.price}
${info.other}`; 
        });
        let message = [{
            type: "text",
            text: text
        },
        {
            type: "image",
            originalContentUrl: "https://static.wixstatic.com/media/d169f6_0e59f22dba234eada7522de19da7968e~mv2.jpg/v1/fill/w_742,h_1024,al_c,q_85,usm_0.66_1.00_0.01/S__14868536.webp",
            previewImageUrl: "https://static.wixstatic.com/media/d169f6_0e59f22dba234eada7522de19da7968e~mv2.jpg/v1/fill/w_742,h_1024,al_c,q_85,usm_0.66_1.00_0.01/S__14868536.webp"
        }];
        await bot.reply(message);
    }
};