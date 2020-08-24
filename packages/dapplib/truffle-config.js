require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach cruise range minor good clock onion gentle'; 
let testAccounts = [
"0x9b6f787cc10fae70f19a266c0c65c6b30905eb4b76c81b3bdfebf78a0e3242a4",
"0x433a68c545d7a5df639b932a4b7de379d83881a9700d707d8518cf6592f240f8",
"0x865bf5b26fa04069e4152bcaa7e7edefe27588146f2f3216c16448540b9a5b4a",
"0x8a88d71a4f9d480e4cc0b1a9e7031cc0ab5fc860846ae85000317bf45b968689",
"0x7aeea13f6a784c953214abffe89bfa907d33b441b48fe4e6956b60cd625530dc",
"0xf93b6e1399883e7759ca03d28a5ea80c5c222348d9a2f39a0105985901f9ba92",
"0x5dd9e76fdd9aac76535d2d92dca06d6e4866d5e1184f528e3f30cb76ff5bea98",
"0xc10fcf3e18caf0b8eb9ad9c3ade23aca0ce6b6493867a77caa6a85d4076c5697",
"0x18800d75eb5e1007362983e288c259e407a52fb257af548854a54c3ce6658cd2",
"0x5d07a2af371e0008e4f35ec3196da04108ec3d29ed240984938801d02f2912de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
