const client = require('./client.js');
module.exports = class {
    constructor(uri = null) {
        if (!uri)
            throw new Error("unkown API URI");
        this.apiURI = uri;
    }

    selecter(action, data, callback) {
        let url = `${this.apiURI}/`;
        switch (action) {
            //data null
            case "api/getdifficulty":
            case "api/getconnectioncount":
            case "api/getblockcount":
            case "api/getnetworkhashps":
            case "ext/getmoneysupply":
            case "ext/getdistribution":
                url += action;
                break;

            //data Object
            case "api/getblockhash":
            case "api/getblock":
            case "api/getrawtransaction":
                let query = "";
                Object.keys(data).forEach(key => {
                    query += key + "=" + data[key];
                });
                url += action + "?" + query;
                break;

            //data String
            case "ext/getaddress":
            case "ext/getbalance":
            case "qr":
                url += action + "/" + data;
                break;

            //data Array [10, 100]
            case "ext/getlasttxs":
                url += action + "/" + data.join('/');
                break;
        }
        client.get(url, {}, callback);
    }
}