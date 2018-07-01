const client = require('./client.js');
module.exports = class {
    constructor(uri = null) {
        if (!uri)
            throw new Error("unkown API URI");
        this.apiURI = uri;
    }

    selecter(action, data, limit, callback) {
        let url = `${this.apiURI}/`;
        let postData = {};  //post
        let flg = null;
        switch (action) {
            //data String
            case "block":
            case "block-index":
            case "rawblock":
            //case "blocks":
            case "tx":
            case "rawtx":
            case "addr":
                flg = 1;
                url += `${action}/${data}`;
                break;

            //data null
            case "sync":
            case "peer":
                flg = 1;
                url += `${data}`;
                break;
            //data string
            case "status":
                flg = 1;
                url += `status?q=${data}`;
                break;

            //data String or Array
            case "addrs/utxo":
            case "addrs/txs":
                flg = 2;
                url += action;
                postData = limit ? limit : {};
                postData["addrs"] = (typeof data == "string") ? data : data.join(',');
                break;

            //data Object(block = "" or address = "")
            case "txs":
                flg = 1;
                let datas = "";
                Object.keys(data).forEach(key => {
                    datas += `${key}=${data[key]}`;
                });
                url += "txs/?" + datas;
                break;
            //data String
            case "tx/send":
                flg = 2;
                url += "tx/send";
                postData = {
                    rawtx: data
                }
                break;
            default:
                throw new Error("Known action");
        }
        if (limit != {} && flg == 1) {
            let limits = "";
            Object.keys(limit).forEach(key => {
                limits += `${key}=${limit[key]}`;
            })
            url += `?` + limits;
        }
        console.log(url, limit != {})
        switch (flg) {
            //get
            case 1:
                client.get(url, {}, callback);
                break;
            //post
            case 2:
                client.post(url, postData, callback);
                break;
        }
    }
}