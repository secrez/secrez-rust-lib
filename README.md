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
> @secrez/rust-lib@0.0.2 test
> cross-env NODE_ENV=test nyc --reporter=lcov --reporter=text ./node_modules/.bin/_mocha test/*.test.js test/**/*.test.js --exit



  #RustLib
    ✓ should encrypt and decrypt a string
    ✓ should encrypt in JS and decrypt in Rust
    ✓ should encrypt in Rust and decrypt in JS


  3 passing (12ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------

> @secrez/rust-lib@0.0.2 posttest
> nyc check-coverage --statements 99 --branches 90 --functions 99 --lines 99
```

## Copyright

(c) 2021-present [Francesco Sullo](https://francesco.sullo.co) (<francesco@sullo.co>)

## Licence

MIT

