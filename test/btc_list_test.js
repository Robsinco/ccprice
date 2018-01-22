const requests  = require('../lib/list');
const urls      = require('../constants/urls');

let assert      = require('chai').assert;

describe("Testing HTTP Get Request To https://blockchain.info/ticker", () => {
    it("should return an object", done => {
        assert.typeOf(requests.list(urls.btc_listAll()), 'object');
        done();
    })

    it("should return an object", done => {
        assert.typeOf(requests.list(urls.btc_convert('usd', 500)), 'object');
        done();
    })
})