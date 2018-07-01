const insight = require('./client/insight.js');
const iquidus = require('./client/iquidus.js');
const cryptobe = require('./client/cryptobe.js');
let func = {
    explorer: {
        insight: 1,
        iquidus: 2,
        cryptobe: 3
    },
    selecter: (id, url) => {
        switch (id) {
            case func.explorer.insight:
                return new insight(url);
                break;
            case func.explorer.iquidus:
                return new iquidus(url);
                break;
            case func.explorer.cryptobe:
                return new cryptobe();
                break;
            default:
                throw new Error("Not Support Service");
        }
    }
}
module.exports = func;