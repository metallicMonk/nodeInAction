const currency = require('./currency.js')

const settings = require('./settings.json');

let USDollarsAmount = 100;

let canadianDollarsAmount = currency.USToCanadian(USDollarsAmount);

console.log('canadian dollars amount: ', canadianDollarsAmount);

canadianDollarsAmount = 100;

USDollarsAmount = currency.canadianToUS(canadianDollarsAmount);

console.log('us dollar amount: ', USDollarsAmount);

console.log('port: ', settings.port);
