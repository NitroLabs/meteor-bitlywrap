maxkferg:bitly
==============

A lightweight wrapper around the node-bitly package. Makes
the ```Bitly``` object available as a global variable on the server.
All methods are syncronous.

## Installation

```sh
meteor add maxkferg:bitly
```

Usage:
The ```Bitly``` object is exposed to the global scope.
All methods throw Meteor.error on failure

``js
var bitly = new Bitly('<YOUR USERNAME>', '<YOUR API KEY>');
shortUrl = bitly.shorten('https://github.com/tanepiper/node-bitly')
longUrl = bitly.expand(shortUrl);

// Data is an object with the aggregate_link property
data = bitly.lookup(shortUrl);

// Info is an object describing the link
info = bitly.lookup(shortUrl);
```

## Documentation

For documentation, see the [Bitly Repo](https://github.com/tanepiper/node-bitly).

## Licence

MIT<br>
Forked from [Kai Schlichting's package](https://github.com/lacco/meteor-bitlywrap)