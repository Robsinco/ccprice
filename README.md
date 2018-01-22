<h1>CCPrice (CryptoCurrency Price):</h1>
<h3>CCPrice is a Nodejs Module for retrieving cryptocurrencies prices.</h3>

<h1>Docs</h1>
1. Example: Retrieving prices of top 100 most valueable cryptocurrencies using CoinMarketCap API:

```
const ccprice = require('ccprice');

ccprice.cmcListAll(limit, start, convert);
// returns an object containing data about cryptocurrencies, including price
// limit is an integer, limiting the number of results.
// start is the starting point for counting down cryptocurrencies. cryptocurrencies are ranked // from 'start' to 'start - limit'.
// convert is a string, the currency you want to convert to. example: USD, EUR, etc.  

```

2. Example: Retrieving the price of Bitcoin. cmc gives you data about all of the in use cryptocurrencies, but with these specific functions, you can get data about the cryptocurrency you want and you can be sure that the retrieved price is up to date.


```
const ccprice = require('ccprice');

ccprice.btcList();
// returns up to date value of BTC in USD.

```