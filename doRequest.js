const request = require('request');

exports.doRequest = function(options) {
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