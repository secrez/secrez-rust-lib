const chai = require('chai')
const assert = chai.assert
const Crypto = require('@secrez/crypto')
const RustLib = require('../lib')

describe('#RustLib', function () {

  const plaintext = 'La canzone di Marinella'
  const key = '9tfDmUMWaFTaeYAHhoHwKv59snG6oNk69h6zxFYsETCe'

  it('should encrypt and decrypt a string', async function () {

    let encrypted = RustLib.encrypt(plaintext, key)

    let decrypted = RustLib.decrypt(encrypted, key)

    assert.equal(plaintext, decrypted)
  })

  it('should encrypt in JS and decrypt in Rust', async function () {

    let encrypted = Crypto.encrypt(plaintext, key)

    let decrypted = RustLib.decrypt(encrypted, key)

    assert.equal(plaintext, decrypted)
  })

  it('should encrypt in Rust and decrypt in JS', async function () {

    let encrypted = RustLib.encrypt(plaintext, key)

    let decrypted = Crypto.decrypt(encrypted, key)

    assert.equal(plaintext, decrypted)

  })

})
