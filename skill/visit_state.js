// このファイルは訪問演奏の募集状況について問い合わせられた場合のskillファイルです。
// 最終的には、最新の募集状況とリンクしたい。

//'use strict';

//module.exports = class visit_state {
//    async finish(bot, event, context){
//        let message = {
//            type: "text",
//            text: `イリーゼよしかわ
//            \n日時:3/16(土)14:00〜15:00(リハ13:00〜)
//            \n募集:全楽器(エレクトーンあり)
//            \n曲目:卒業の曲、歌謡曲 他`
//        };
//        await bot.reply(message);
//    }
//};

'use strict';
const moment = require('moment');

// 曜日と月の対応づけ
// GSSが勝手にRFC2822もどきみたいな書式で返すからこうなった
const month = {"Jan":"1", "Feb":"2", "Mar":"3", "Apr":"4", "May":"5", "Jun":"6", "Jul":"7", "Aug":"8", "Sep":"9", "Oct":"10", "Nov":"11", "Dec":"12"};
const day = ["日", "月", "火", "水", "木", "金", "土"];

// *非同期でURLを呼び出すための自作関数をインポート
const doRequest = require('../doRequest');

module.exports = class visit_state {
    async finish(bot, event, context){
        let reply = "参加者募集中の訪問演奏は以下の通りです。";
        // *await指定しないと非同期に実行しちゃってデータ取得より先にBotが返事しちゃう
        // *この関数の引数で呼び出したいシートの名前を指定
        await doRequest.getGSS('visit_state').then((data) => {
            // formatを適当にいじって返事にする
            data.forEach(element => {
                //曜日まで
                const arr = element.date.split(" ");
                const monthStr = month[arr[1]].length == 1 ? `0${month[arr[1]]}` : `${month[arr[1]]}`;
                const date = moment(`${arr[3]}-${monthStr}-${arr[2]}T00:00:00+09:00`);
                const str = `・${date.month()+1}月${date.date()}日(${day[date.day()]})`;
                //開始時間（リハ～）
                const start = element.start_time.split(" ")[4].substring(0,5);
                const rehearsal = element.rehearsal_time.split(" ")[4].substring(0,5);
                const str2 = `${str} ${start}(${rehearsal}~)`;
                //場所＠最寄り駅
                const place = element.place;
                const str3 = `${str2} ${place}`;
                //募集楽器
                const instrument = element.instrument;
                const result = `${str3} ${instrument}`;
                reply += ("\n" + result);
            });
        })

        let message = {
            type: "text",
            text:reply
        };
        await bot.reply(message);
    }
};