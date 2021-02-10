const chai = require('chai')
const assert = chai.assert
const path = require('path')
const fs = require('fs-extra')
let {Crypto, Secrez} = require('@secrez/core')
Secrez = Secrez(Math.random())

const RustLib = require('../lib')

describe('#RustLib', function () {

  const password = 'some weird password'
  const iterations = 1000

  let rootDir = path.resolve(__dirname, '../tmp/test/secrez')
  let secrez
  let masterKeyHash

  const OriginalCrypto = {
    encrypt: Crypto.encrypt,
    decrypt: Crypto.decrypt
  }

  beforeEach(async function () {
    await fs.emptyDir(path.resolve(__dirname, '../tmp/test'))
    secrez = new Secrez()
    await secrez.init(rootDir)
  })

  describe('encrypt and decrypt in JS', async function () {

    it('should signup the user and signin', async function () {
      await secrez.signup(password, iterations)
      assert.isTrue(await fs.pathExists(secrez.config.keysPath))
      masterKeyHash = secrez.masterKeyHash
      secrez.signout()
      assert.isUndefined(secrez.masterKeyHash)
      await secrez.signin(password, iterations)
      assert.equal(masterKeyHash, secrez.masterKeyHash)
    })
  })

  describe('encrypt in Rust and decrypt in JS', async function () {

    before(function () {
      Crypto.encrypt = (message, key) => {
        return RustLib.encrypt(message, key)
      }
    })

    after(function () {
      Crypto.encrypt = OriginalCrypto.encrypt
    })

    it('should signup the user and signin', async function () {
      await secrez.signup(password, iterations)
      assert.isTrue(await fs.pathExists(secrez.config.keysPath))
      masterKeyHash = secrez.masterKeyHash
      secrez.signout()
      assert.isUndefined(secrez.masterKeyHash)
      await secrez.signin(password, iterations)
      assert.equal(masterKeyHash, secrez.masterKeyHash)
    })
  })

  describe('encrypt in JS and decrypt in Rust', async function () {

    before(function () {
      Crypto.decrypt = (message, key) => {
        return RustLib.decrypt(message, key)
      }
    })

    after(function () {
      Crypto.decrypt = OriginalCrypto.decrypt
    })

    it('should signup the user and signin', async function () {
      await secrez.signup(password, iterations)
      assert.isTrue(await fs.pathExists(secrez.config.keysPath))
      masterKeyHash = secrez.masterKeyHash
      secrez.signout()
      assert.isUndefined(secrez.masterKeyHash)
      await secrez.signin(password, iterations)
      assert.equal(masterKeyHash, secrez.masterKeyHash)
    })
  })

  describe('encrypt and decrypt in Rust', async function () {

    before(function () {
      Crypto.encrypt = (message, key) => {
        return RustLib.encrypt(message, key)
      }
      Crypto.decrypt = (message, key) => {
        return RustLib.decrypt(message, key)
      }
    })

    after(function () {
      Crypto.encrypt = OriginalCrypto.encrypt
      Crypto.decrypt = OriginalCrypto.decrypt
    })

    it('should signup the user and signin', async function () {
      await secrez.signup(password, iterations)
      assert.isTrue(await fs.pathExists(secrez.config.keysPath))
      masterKeyHash = secrez.masterKeyHash
      secrez.signout()
      assert.isUndefined(secrez.masterKeyHash)
      await secrez.signin(password, iterations)
      assert.equal(masterKeyHash, secrez.masterKeyHash)
    })
  })

})
