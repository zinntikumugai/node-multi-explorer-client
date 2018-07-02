# Node Multi Expoloer Client

**コレ１つでいいです**  
**One is over**  
_(これ以上ライブラリを増やしたくない)_  
_(I do not want to increase the number of libraries any more)_

下記のエクスプローラーに対応しています  
(It corresponds to the following explorer)

- [insight](https://github.com/bitpay/insight-api)
- [iquidus](https://github.com/iquidus/explorer)
- [crypotbe](https://cryptobe.com/q)
- [cryptoID](https://chainz.cryptoid.info/api.dws)

# Install

```console
npm i multi-expoloer-client
```

# Use

```javascript
const client = require('multi-expoloer-client');

//insight,iqudus
let zny = client.selecter(
    client.explorer.insight,
    'https://insight.bitzeny.jp/api');  //api url
zny.selecter(
    'addr',
    'ZxBNHC97x1X7o3ACSqbLPaUVj3YwkaCzPY',
    {
        noTxList:1
    },
    (req, res, body) => {
        console.log(body);
    })

//cryptobe
let shnd = client.selecter(
    client.explorer.cryptobe,
    '');    //null
shnd.selecter(
    'addressbalance',
    'StrongHands',
    'SQntCWLsNGQodgykfyXD1zjCr2RPAoBc1x',
    (req, res, body) => {
        console.log(body);
    })

//cryptoid
let xp = client.selecter(
    client.explorer.cryptoid,
    '');    //'' or apikey
    
xp.selecter(
    'getbalance',
    'xp',
    'XGZjewkqwmCiUeojiZb1McVtHRaFT69rB9',
    (req, res, body) => {
        console.log(body);
    })
```

# Donation

[Give Me](https://donation.zinntikumugai.com/)