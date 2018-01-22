const urls = {
    cmc_ticker: "https://api.coinmarketcap.com/v1/ticker/",
    cmc_global: "https://api.coinmarketcap.com/v1/global/",
    btc_ticker: "https://blockchain.info/ticker",
    btc_convert: "https://blockchain.info/tobtc"
}

// fetchs prices of all digital currencies. ordered in highest value.
// datas are provided by CoinMarketCap.com
exports.cmc_listAll = (limit, start, convert) => {
    if (!limit && !start && !convert) {
        return urls.cmc_ticker;
    }

    return `${urls.cmc_ticker}?limit=${limit}&start=${start}&convert=${convert}`;
}

// fetches global data. such as 'total_market_cap', 'active_markets', etc.
// you can 'convert' values when retrieving them
// datas are provided by CoinMarketCap.com
exports.cmc_listGlobal = convert => {
    if (!convert) {
        return urls.cmc_global;
    }

    return `${urls.cmc_global}?convert=${convert}`;
}

// fetches data about one specific digital currency. such as Bitcoin.
// datas are provided by CoinMarketCap.com
exports.cmc_listOne = (coin, convert) => {
    if (!coin) {
        return {response: 'error', errCode: '1'}
    }

    if (!convert) {
        return `${urls.cmc_ticker}${coin}`;
    }

    return `${urls.cmc_ticker}${coin}/?convert=${convert}`;
}

// fetches data about bitcoin price in different currencies.
// datas are provided by Blockchain.info
exports.btc_listAll = () => {
    return urls.btc_ticker;
}

// converts x value in the provided currency to btc.
// datas are provided by Blockchain.info
exports.btc_convert = (currency, value) => {
    return `${urls.btc_convert}?currency=${currency.toUpperCase()}&value=${value}`;
}