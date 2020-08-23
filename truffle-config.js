var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();
var endpoint = process.env.ENDPOINT;
var mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    // Node 15 で infura にデプロイしようとするとエラーになる
    // 修正待ち
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       mnemonic,
    //       endpoint
    //     );
    //   },
    //   network_id: "*",
    //   gas: 500000
    // },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    }
  },
};
