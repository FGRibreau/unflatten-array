Unflatten [![Build Status](https://drone.io/github.com/fgribreau/unflatten-array/status.png)](https://drone.io/github.com/fgribreau/unflatten-array/latest)
=========

> Unflatten an single-level list based on a pattern

## Setup

```
npm install unflatten-array
```

## Usage

```javascript
var unflatten = require('unflatten-array');

var flatList = [1, 2, 3, 4];
var arrayPattern = [['it', 'can'],['be', 'anything']];

unflatten(flatList, arrayPattern); // [[1, 2], [3, 4]]
```


## Lodash mixin

```javascript
_.mixin({
    unflatten: require('unflatten-array')
})
```
