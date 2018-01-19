const privateMethods = [
  'Balance',
  'TradeBalance',
  'OpenOrders',
  'ClosedOrders',
  'QueryOrders',
  'TradesHistory',
  'QueryTrades',
  'OpenPositions',
  'Ledgers',
  'QueryLedgers',
  'TradeVolume',
  'AddOrder',
  'CancelOrder',
  'WithdrawInfo',
  'Withdraw',
  'WithdrawCancel',
  'DepositMethods',
  'DepositAddresses',
  'DepositStatus'
];
const publicMethods = [
  'Time',
  'Assets',
  'AssetPairs',
  'Ticker',
  'OHLC',
  'Depth',
  'Trades',
  'Spread',
];

module.exports = { privateMethods, publicMethods };
