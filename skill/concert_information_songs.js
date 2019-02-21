// このファイルはチャリティーコンサートの曲目について問い合わせられた場合のskillファイルです。
// 曲目リストを返します。

'use strict';

module.exports = class concert_information_songs {
    async finish(bot, event, context){
        let message = {
            type: "text",
            text: 
            `ポピュラーステージ
1.21世紀フォックスファンファーレ(金管と弦)
2.パイレーツ・オブ・カリビアン(フルオケ)
3.ディズニー･オン･パレード(フレックス)
4.｢アラジン｣メドレー(フルオケ)
 

クラシックステージ
1. ｢魔笛｣序曲
2. おもちゃの交響曲(アンゲラー版)
3. 華麗なる大円舞曲(ショパン)
4. 古風なメヌエット(ラヴェル)
5. ｢カルメン組曲｣より`
        };
        await bot.reply(message);
    }
};