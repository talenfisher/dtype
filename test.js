var test = require('tape')
var dtype = require('./')

test('dtype', function(t) {
  t.plan(15)
  
  var arr = new (dtype('int8'))
  t.ok(arr instanceof Int8Array)

  arr = new (dtype('int16'))
  t.ok(arr instanceof Int16Array)

  arr = new (dtype('i'));
  t.ok(arr instanceof Int16Array)

  arr = new (dtype('int32'))
  t.ok(arr instanceof Int32Array)

  arr = new (dtype('l'))
  t.ok(arr instanceof Int32Array)

  arr = new (dtype('uint8'))
  t.ok(arr instanceof Uint8Array)

  arr = new (dtype('uint16'))
  t.ok(arr instanceof Uint16Array)

  arr = new (dtype('uint32'))
  t.ok(arr instanceof Uint32Array)

  arr = new (dtype('float32'))
  t.ok(arr instanceof Float32Array)

  arr = new (dtype('f'))
  t.ok(arr instanceof Float32Array)

  arr = new (dtype('float64'))
  t.ok(arr instanceof Float64Array)

  arr = new (dtype('d'))
  t.ok(arr instanceof Float64Array)

  arr = new (dtype('array'))
  t.ok(arr instanceof Array)

  arr = new (dtype('uint8_clamped'))
  t.ok(arr instanceof Uint8ClampedArray)
  t.equal(dtype('buffer'), undefined, 'returns undefined for non-array types')
})
