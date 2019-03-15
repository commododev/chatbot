const request = require('request');
// GSSのURLをファイルから取得するため(Herokuにデプロイする方はHerokuで設定する)
// GSSを導入したい場合は以下*の付いているコメント付近を参考にしてください
const config = require("config");

function doRequest(options) {
    return new Promise((resolve, reject) => {
        request.get(options, (err, req, data) => {
            if (!err && req.statusCode == 200) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

exports.getGSS = async function (sheet) {
    // *URL等の設定
    let URL = process.env.PRACTICE_DATE_GSS || config.env.PRACTICE_DATE_GSS;
    const options = {
        uri: URL,
        headers: {'Content-type': 'application/json'},
        // *ここでsheetを指定
        qs: {
            'sheet': sheet
        },
        json: true
    }
    // *await指定しないと非同期に実行しちゃってデータ取得より先にBotが返事しちゃう
    return await doRequest(options);
}