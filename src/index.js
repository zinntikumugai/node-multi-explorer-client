const insight = require('./client/insight.js');
const iquidus  =require('./client/iquidus.js');
let func = {
    explorer: {
        insight: 1,
        iquidus: 2
    },
    selecter: (id, url) => {
        switch (id) {
            case func.explorer.insight:
                return new insight(url);
                break;
            case func.explorer.iquidus:
                return new iquidus(url);
                break;
            default:
                throw new Error("Not Support Service");
        }
    }
}
module.exports = func;