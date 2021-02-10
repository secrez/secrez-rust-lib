# rust-lib

A Rust crypto library for Secrez.

Secrez has been created to handle small files. However, some users are using it also for long documents complaining about the speed. To solve this problem we added this module that uses sodiumoxide in Rust to encrypt and decrypt the data. 

It does not make much sense to use it outside Secrez.  

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

