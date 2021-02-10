# rust-lib

A Rust crypto library for Secrez.

Secrez has been created to handle small files. However, some users are using it also for long documents complaining about the speed. To solve this problem we added this module that uses sodiumoxide in Rust to encrypt and decrypt the data. 

It does not make much sense to use it outside Secrez.

**PS > After extensively testing it with large docs in Secrez, I realized that Rust/Sodiumoxide is as fast as JS/TweetNaCl. In some case, it is even slower because of type conversions unnecessary in JS. For this reason, I am leaving this library here as an interesting experiment, but I won't use it in Secrez.**

## How to use it



## TODO

Adding more primitives if it works well enough :-)

## History

__0.0.2__
* first version


## Coverage

```
  #RustLib
    encrypt and decrypt in JS
      ✓ should signup the user and signin (81ms)
    encrypt in Rust and decrypt in JS
      ✓ should signup the user and signin
    encrypt in JS and decrypt in Rust
      ✓ should signup the user and signin
    encrypt and decrypt in Rust
      ✓ should signup the user and signin (47ms)


  4 passing (198ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------

```

## Copyright

(c) 2021-present [Francesco Sullo](https://francesco.sullo.co) (<francesco@sullo.co>)

## Licence

MIT

