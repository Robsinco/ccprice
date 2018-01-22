// All the records returned from this API are provided by
// CoinMarketCap.com and may not be accurate/up to date

const request   = require('request');
const term      = require('terminal-kit').terminal;

const urls      = require('../constants/urls');
const list      = require('./list').list;

exports.cmc_listAll = (limit, start, convert) => {
    return list(urls.cmc_listAll(limit, start, convert));
}

exports.cmc_listGlobal = convert => {
    return list(urls.cmc_listGlobal(convert));
}

exports.cmc_listOne = (coin, convert) => {
    return list(urls.cmc_listOne(coin, convert));
}