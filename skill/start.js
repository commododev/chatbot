'use strict';

module.exports = class start {
    async finish(bot, event, context){
        let message = {
            type: "template",
            altText: "話しかけてくれてありがとうございます。訪問演奏会、チャリティーコンサート、遠征、その他からお問い合わせになりたい活動を選んでください。",
            template: {
                type: "buttons",
                text: "話しかけてくれてありがとうございます。以下からお問い合わせになりたい活動をお選びください。",
                actions: [
                    {type:"postback",label:"訪問演奏会",data:"訪問演奏会"},
                    {type:"postback",label:"チャリティーコンサート",data:"チャリティーコンサート"},
                    {type:"postback",label:"遠征",data:"遠征"},
                    {type:"postback",label:"その他",data:"その他"}
                ]
            }
        };

        await bot.reply(message);
    }
};