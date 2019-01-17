# dtype

Return a data type from a string representing the data type.

Mostly useful for using with [ndarray](https://github.com/mikolalysenko/ndarray)
where you would like instantiate a typed array of the same `array.dtype`.

See [ndarray-dtype](https://www.npmjs.com/package/ndarray-dtype) if you need to support Buffer and other ndarray types.

# Fork modifications
* Added support for single letter strings (D, F, J, I, see table below)

## example

```js
var dtype = require('dtype')
var ndarray = require('ndarray')

var arr = ndarray(new Int8Array(32))

// some time later

var newarr = ndarray(new (dtype(arr.dtype)))
```

## API
`dtype(string)` will return the following data types based on the strings given:

Data type | String
--------: | :-----
`Int8Array` | "int8"
`Int16Array` | "int16" or "i"
`Int32Array` | "int32" or "l"
`Uint8Array` | "uint8"
`Uint16Array` | "uint16"
`Uint32Array` | "uint32"
`Float32Array` | "float32" or "f"
`Float64Array` | "float64" or "d"
`Array` | "array"
`Uint8ClampedArray` | "uint8_clamped"

Returns `undefined` if the type isn't recognized.

## install

With [npm](https://npmjs.org) do:

```
npm install @talenfisher/dtype
```

Use [browserify](http://browserify.org) to `require('dtype')`.

## see also

- [ndarray-dtype](https://www.npmjs.com/package/ndarray-dtype)

## release history
* 2.0.0 - moving buffer, generic and data to a different module
* 1.0.0 - Add uint8_clamped, generic, data, dataview and buffer types
* 0.1.0 - initial release

## license
Copyright (c) 2015 Kyle Robinson Young<br/>
Licensed under the MIT license.
