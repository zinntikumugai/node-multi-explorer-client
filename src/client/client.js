const request = require('request');

module.exports = {
    get: (url, qs, callback) => {
        request.get({
            url: url,
            qs: qs
        }, callback);
    },

    post: (url, qs, callback) => {
        request.post({
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(qs)
        }, callback);
    }
}