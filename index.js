const cmc_list          = require('./lib/cmc_list');
const urls              = require('./constants/urls');

const btc_listAll       = require('./lib/btc_list').btc_listAll;
const btc_convert       = require('./lib/btc_list').btc_convert;

const cmc_listAll       = require('./lib/cmc_list').cmc_listAll;
const cmc_listGlobal    = require('./lib/cmc_list').cmc_listGlobal;
const cmc_listOne       = require('./lib/cmc_list').cmc_listOne;

exports.btcList         = btc_listAll;
exports.btcConvert      = btc_convert;

exports.cmcListAll      = cmc_listAll;
exports.cmcListGlobal   = cmc_listGlobal;
exports.cmcListOne      = cmc_listOne;