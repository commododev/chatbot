// このファイルはチャリティーコンサートの参加登録について問い合わせられた場合のskillファイルです。
// 参加申込先のメアドとテンプレを返します。
// TODO(検討事項)
// 1. ボタン押したら自動的にテンプレが記入されたメールが開く
// 2. フォームにするかも?
// 3. ここで登録処理しても良くない? 値を受け取ってどっかに放り込むめばできそう。

'use strict';

module.exports = class concert_attend_registration {
    async finish(bot, event, context){
        let templete = 
        `氏名:
楽器、経験年数:
所属学校、団体、年齢:
連絡の取れるメールアドレス、電話番号、LineID:
希望曲、パート(Vnの方は1stか2ndか、管楽器の方は特殊楽器保有の有無もお願いします):`;
        let message = [{
            type: "text",
            text: "以下の項目をコピーして埋めていただき ensemble.commodo.2014@gmail.com まで送信してください。件名は'チャリティーコンサート参加応募'でお願いします。"
        },
        {
            type: "text",
            text: templete
        }];
        await bot.reply(message);
    }
};