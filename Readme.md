
# json-key-aliases

## _A simple library to compress your Json size_

  

[![N|Solid](http://qnar-dev.com/logo-q-t.png)](https://qnar-dev.com)

By Muhammad Abdullah Qamar @ QNAR-Dev

  
  

A simple library , can be used to

  

- compress your DB size

- increase data transfer speed

- less network bandwidth consumption

  

## Features

  

- get aliases for a key

- get key for an aliases

- convert object to keys (which is previously converted to aliases [ as keys ] )

- convert object to aliases

  

## Installation

```sh

npm install json-key-alises

```

  

## Usage

First Thing First

```sh
//initialize library with a prototype object OR a json file 
//prototype object is like schema 
//see an example in prototype.json file
const { initialize } = require('json-key-alises');
const prototype = require('./prototype.json');
initialize(prototype);

// do stuff
....
```

Then you can use convertObjectToAliases() to convert the object's key to aliases

Returns an object with keys converted to aliases

```sh
const { initialize, convertObjectToAlises } = require('json-key-alises');
.....
...

const convertedObject  = convertObjectToAlises(collection, object)
``` 
and when you want the converted object in it's original form use convertObjectToKeys()

Returns an object with keys converted to original keys from aliases

```sh
const { initialize, convertObjectToKeys } = require('json-key-alises');
.....
...

const originalObject  = convertObjectToKeys(collection, object)
``` 

.......MORE TO COME ........ I'll write the remainig docs when i get some free time
Please refer to the _example.js_ for a basic usage example 

Enjoy !