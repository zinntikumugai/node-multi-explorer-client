const client = require('./client.js');
module.exports = class {
    constructor() {
        this.apiURI = "https://cryptobe.com";
    }

    selecter(action, currency, data, callback) {
        let url = this.apiURI + "/";
        switch (action) {
            case "addressbalance":
            case "addresstohash":
            case "circulating":
            case "getreceivedbyaddress":
            case "getsentbyaddress":
            case "nethash": //nethash string data
            case "totalbc":
            case "translate_address":
                url += `chain/${currency}/q/${action}/${data}`;
                break;

            case "checkaddress":
            case "decode_address":
            case "hashpubkey":
            case "hashtoaddress":
            url +=`q/${action}/${data}`;
            break;

            case "getblockcount":
            case "getdifficulty":
                url += `q/${action}`;
                break;
        }
        client.get(url, {}, callback);
    }
}