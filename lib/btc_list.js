// All the records returned from this API are provided by
// Blockchain.info and are up to date.

const request   = require('request');
const term      = require('terminal-kit').terminal;

const urls      = require('../constants/urls');
const list      = require('./list').list;

exports.btc_listAll = () => {
    return list(urls.btc_listAll());
}

exports.btc_convert = (currency, value) => {
    return list(urls.btc_convert(currency, value));
}