// このファイルはチャリティーコンサートの練習日程について問い合わせられた場合のskillファイルです。
// 練習日程リスト返します

'use strict';
const moment = require('moment');
// GSSのURLをファイルから取得するため(Herokuにデプロイする方はHerokuで設定する)
// GSSを導入したい場合は以下*の付いているコメント付近を参考にしてください
const config = require("config");

// 曜日と月の対応づけ
// GSSが勝手にRFC2822もどきみたいな書式で返すからこうなった
const month = {"Jan":"1", "Feb":"2", "Mar":"3", "Apr":"4", "May":"5", "Jun":"6", "Jul":"7", "Aug":"8", "Sep":"9", "Oct":"10", "Nov":"11", "Dec":"12"};
const day = ["日", "月", "火", "水", "木", "金", "土"];

// *非同期でURLを呼び出すための自作関数をインポート
const doRequest = require('../doRequest');

module.exports = class concert_attend_practice {
    async finish(bot, event, context){
        let reply = "以下が練習日程です。";
        // *上記のdoRequest関数を非同期で呼び出す
        const getGSS = async () => {
            // *URL等の設定
            let URL = process.env.PRACTICE_DATE_GSS || config.env.PRACTICE_DATE_GSS;
            const options = {
                uri: URL,
                headers: {'Content-type': 'application/json'},
                json: true
            }
            // *await指定しないと非同期に実行しちゃってデータ取得より先にBotが返事しちゃう
            return await doRequest.doRequest(options);
        }

        // *await指定しないと非同期に実行しちゃってデータ取得より先にBotが返事しちゃう
        await getGSS().then((data) => {
            // formatを適当にいじって返事にする
            data.forEach(element => {
                //曜日まで
                const arr = element.date.split(" ");
                const monthStr = month[arr[1]].length == 1 ? `0${month[arr[1]]}` : `${month[arr[1]]}`;
                const date = moment(`${arr[3]}-${monthStr}-${arr[2]}T00:00:00+09:00`);
                const str = `・${date.month()+1}月${date.date()}日(${day[date.day()]})`;
                //練習時間
                const start = element.start_time.split(" ")[4].substring(0,5);
                const end = element.end_time.split(" ")[4].substring(0,5);
                const str2 = `${str} ${start}~${end}`;
                //練習場所
                const place = element.place
                const result = `${str2} ${place}`;
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