const insight = require('./client/insight.js');
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
        }
    }
}
module.exports = func;