const client = require('./client.js');
module.exports = class {
    constructor(key = null) {
        this.key = key;
        this.apiURI = "http://chainz.cryptoid.info";
    }

    selecter(action, currency, data, callback) {
        let url = this.apiURI + "/";
        switch (action) {
            case "addresses":
            case "circulating":
            case "getblockcount":
            case "getdifficulty":
            case "hashrate":
            case "nethashps":
            case "netmhashps":
            case "rich":
            case "summary":
            case "ticker.btc:":
            case "ticker.usd":
            case "totalbc":
            case "totalcoins":
                url += `${currency}/api.dws?q=${action}`;
                break;

            case "addressfirstseen":
            case "getbalance":
            case "getreceivedbyaddress":
            case "richrank":
                url += `${currency}/api.dws?q=${action}&a=${data}`;
                break;

            case "lasttxs":
            case "txinfo":
                url += `${currency}/api.dws?q=${action}&t=${data}`;
                break;

            //data Object
            case "getblockhash":    //height
            case "getblockheight":  //hash
            case "txbymessage": //m,before
                if (typeof data == "object")
                    throw new Error("Missing Data(plz Object)");
                let query = "";
                Object.keys(data).forEach(key => {
                    query += `${key}=${data[key]}`;
                });
                url += `${currency}/api.dws?q=${action}&${query}`;
                break;

            case "getblockcount":
            case "getdifficulty":
                url += `q/${action}`;
                break;

            /*
            {
                addrs: ['address','address'] or 'address'
                n: transactions(optional)
            }
            */
            case "multiaddr":
            case "unspent":
                let urls = "";
                if (this.key == null)
                    throw new Error("Not Found API KEY!");
                if (typeof data.addrs == "string")
                    urls = data.addrs;
                else
                    data.addrs.forEach(addr => {
                        urls += '|' + addr
                    });
                url += `${currency}/api.dws?q=${action}&a=${data}`;
                url = data.n ? url += '&n=' + data.n : url;
                break;
        }
        url = this.key ? url += `&key=${this.key}` : url;
        console.log(url);
        client.get(url, {}, callback);
    }
}