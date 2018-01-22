const requests  = require('../lib/list');
const urls      = require('../constants/urls');

let assert      = require('chai').assert;

describe("Testing HTTP Get Request To https://api.coinmarketcap.com/v1/ticker/", () => {
    it("should return an object", done => {
        assert.typeOf(requests.list(urls.listAll()), 'object');
        done();
    });

    it("should return an object", done => {
        assert.typeOf(requests.list(urls.listGlobal()), 'object');
        done();
    })

    it("should return an object", done => {
        assert.typeOf(requests.list(urls.listOne('bitcoin')), 'object');
        done();
    })

})
