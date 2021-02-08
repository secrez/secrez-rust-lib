const addon = require('../native')
const Crypto = require('@secrez/crypto')

const NONCE_LENGHT = 24

class RustLib {

  static encrypt(plaintext, key) {
    const payload = JSON.stringify({
      plaintext,
      keyarr: [...Crypto.bs58.decode(key)]
    })
    const enc = addon.encrypt(payload).replace(/\]\[/, ',')
    return Crypto.bs58.encode(Buffer.from(JSON.parse(enc)))
  }

  static decrypt(messageWithNonce, key) {
    const messageWithNonceAsUint8Array = Crypto.bs58.decode(messageWithNonce)
    const nonce = messageWithNonceAsUint8Array.slice(0, NONCE_LENGHT)
    const ciphertext = messageWithNonceAsUint8Array.slice(
        NONCE_LENGHT,
        messageWithNonceAsUint8Array.length
    )
    const encPayload = JSON.stringify({
      noncearr: [...nonce],
      ciphertext: [...ciphertext],
      keyarr: [...Crypto.bs58.decode(key)]
    })

    return addon.decrypt(encPayload)
  }

}

module.exports = RustLib
