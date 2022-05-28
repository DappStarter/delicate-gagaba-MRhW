require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain umbrella guess arch obscure genuine'; 
let testAccounts = [
"0x1b3d9554a8511e04f25c3561c309784e95c0dfa1d8a826f22c0055a5f7a22fdb",
"0x55aaf3c851eccb795c607c49e1c8cfc74665705f2065c24b7ae1c73032cc276d",
"0xf8fabe852bc81d80df3bfcedaece7d3e8e241da3358f0abd7158a0d9584c747d",
"0xd9f0591c9c787f1929514efe254e980de01af20a132e31d293809b39f527ef20",
"0x8669ea78c03db5ca47bd60aff01b732ee7fcaed5358882e0ed79c3e41b2505d5",
"0x38eb188edb37b50db731402c79c9cf1c12d25376d42701f029fcf2d615b388b9",
"0x0f1890e6963b4833f43d7ffaeb8a72de071ab20855b16c3589ee8cff999c4c6d",
"0x24ecc9653e331d16cecf9a6bb83e12740b97bd0a080a40c51b65aba1f141daf0",
"0x7f55a5b08485e04b8c2cdddaebc96b21598c7ef616fbc7120f10a5fef012255f",
"0xb0d1a157d2c2363427006f5734f492e773dedddcacc3291f61c88b2e59d2414c"
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
            version: '^0.8.0'
        }
    }
};

