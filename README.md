# Kraken API Wrapper for Node.js

Lightweight, no external dependencies, callback/promise based wrapper for [Kraken](https://www.kraken.com/) exchange platform.

## Installing / Getting started

```shell
npm i https://github.com/vickas777/kraken-api-wrapper --save
```

## How to use

```javascript
const kraken = require('kraken-api-wrapper')() // create wrapper for API 
```
OR
```javascript
const kraken = require('kraken-api-wrapper')('public API key', 'API sign key') // create wrapper for API 
```
In first example you have access ONLY to public methods, in second you can use both public and private methods.

### Module API Reference
To know more about Kraken API you can on the [official API reference](https://www.kraken.com/help/api). 
* Module methods:
  * `kraken.setPrivateKey('new public API key')` - change public API key, (default: '')
  * `kraken.setSecreteKey('new sign API key')` - change API sign key, (default: '')
  * `kraken.setOtp('new two factor password')` - change two-factor auth password, (default: '')
  * `kraken.setRequestTime(new timeout)` - change request timeout (default: 10000)
  * `kraken.setApiVersion(new API version)` - change API version, (default: 0)
  
Methods names are similar to methods in API reference. 
Providing `cb` function you will have default node callback based api, if not - promise based. If you don't need to provide any parameters to request, you can set callback function instead of `params` or call without arguments to have a promise.
  
* Public methods:
  * `kraken.Time([cb])` - [Get server time](https://www.kraken.com/help/api#get-server-time)
  * `kraken.Assets([params, cb])` - [Get asset info](https://www.kraken.com/help/api#get-asset-info)
  * `kraken.AssetPairs([params, cb])` - [Get tradable asset pairs](https://www.kraken.com/help/api#get-tradable-pairs)
  * `kraken.Ticker(params[, cb])` - [Get ticker information](https://www.kraken.com/help/api#get-ticker-info)
  * `kraken.OHLC(params[, cb])` - [Get OHLC data](https://www.kraken.com/help/api#get-ohlc-data)
  * `kraken.Depth(params[, cb])` - [Get order book](https://www.kraken.com/help/api#get-order-book)
  * `kraken.Trades(params[, cb])` - [Get recent trades](https://www.kraken.com/help/api#get-order-book)
  * `kraken.Spread(params[, cb])` - [Get recent spread data](https://www.kraken.com/help/api#get-recent-spread-data)
* Private user methods:
  * `kraken.Balance([cb])` - [Get account balance](https://www.kraken.com/help/api#get-account-balance)
  * `kraken.TradeBalance([params, cb])` - [Get trade balance](https://www.kraken.com/help/api#get-trade-balance)
  * `kraken.OpenOrders([params, cb])` - [Get open orders](https://www.kraken.com/help/api#get-open-orders)
  * `kraken.ClosedOrders(params[, cb])` - [Get closed orders](https://www.kraken.com/help/api#get-closed-orders)
  * `kraken.QueryOrders(params[, cb])` - [Query orders info](https://www.kraken.com/help/api#query-orders-info)
  * `kraken.TradesHistory(params[, cb])` - [Get trades history](https://www.kraken.com/help/api#get-trades-history)
  * `kraken.QueryTrades(params[, cb])` - [Query trades info](https://www.kraken.com/help/api#query-trades-info)
  * `kraken.OpenPositions(params[, cb])` - [Get open positions](https://www.kraken.com/help/api#get-open-positions)
  * `kraken.Ledgers(params[, cb])` - [Get ledgers info](https://www.kraken.com/help/api#get-ledgers-info)
  * `kraken.QueryLedgers(params[, cb])` - [Query ledgers](https://www.kraken.com/help/api#query-ledgers)
  * `kraken.TradeVolume(params[, cb])` - [Get trade volume](https://www.kraken.com/help/api#get-trade-volume)
* Private trading methods:
  * `kraken.AddOrder(params[, cb])` - [Add standard order](https://www.kraken.com/help/api#add-standard-order)
  * `kraken.CancelOrder(params[, cb])` - [Cancel open order](https://www.kraken.com/help/api#cancel-open-order)

## Examples
Regular usage only public methods:
```javascript
const kraken = require('kraken-api-wrapper')();

// Get XZECZUSD tradable asset pair
kraken.AssetPairs({ pair: 'XZECZUSD' }, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res);
});

// Same as previous but based on promise 
kraken.AssetPairs({ pair: 'XZECZUSD' })
  .then(result => console.log(result))
  .catch(err => console.error(err));
```
Using methods without additional parameters:
```javascript
const kraken = require('kraken-api-wrapper')();

// Get all tradable asset pairs
kraken.AssetPairs((err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log(res);
});

kraken.AssetPairs()
  .then(result => console.log(result))
  .catch(err => console.error(err));
```
Private methods:
```javascript
const kraken = require('kraken-api-wrapper')('publicKey', 'signKey');

// Get asset names and balance amount
kraken.Balance((err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res);
});

// Get tradable balances 
kraken.TradeBalance({ asset: 'ZUSD' })
  .then(result => console.log(result))
  .catch(err => console.error(err));
```
Use your own nonce generation method. By default it uses current time stamp. 
```javascript
const kraken = require('kraken-api-wrapper')();

kraken.AssetPairs({ 
  pair: 'XZECZUSD' ,
  nonce: getAlwaysEncreasingCounter() // generator of always increasing counter
})
  .then(result => console.log(result))
  .catch(err => console.error(err));
```
## Licensing

