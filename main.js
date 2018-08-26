const BIP39 = require("bip39")
const bitcore = require("bitcore-lib")

// Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
var mnemonic = BIP39.generateMnemonic()

var hexSeed = BIP39.mnemonicToSeedHex(mnemonic)


/*

Do not edit code below this line.

*/

new Vue({
    el:"#mnemonic",
    data() {
        return { mnemonic: mnemonic }  
    },
    methods:{
        generateNew: function(){
            this.mnemonic = BIP39.generateMnemonic()
        }
    },
    computed: {
        validMnemonic: function() {
            return BIP39.validateMnemonic(this.mnemonic)
        }
    }
})