const insight = require('./client/insight.js');
const iquidus = require('./client/iquidus.js');
const cryptobe = require('./client/cryptobe.js');
const cryptoid = require('./client/cryptoID.js');
let func = {
    explorer: {
        insight: 1,
        iquidus: 2,
        cryptobe: 3,
        cryptoid: 4
    },
    selecter: (id, url) => {
        switch (id) {
            case func.explorer.insight:
                return new insight(url);

            case func.explorer.iquidus:
                return new iquidus(url);

            case func.explorer.cryptobe:
                return new cryptobe();

            case func.explorer.cryptoid:
                return new cryptoid(url);
                
            default:
                throw new Error("Not Support Service");
        }
    }
}
module.exports = func;