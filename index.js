module.exports = function(dtype) {
  switch (dtype.toLowerCase()) {
    case 'int8':
      return Int8Array

    case 'i':
    case 'int16':
      return Int16Array

    case 'l':
    case 'int32':
      return Int32Array

    case 'uint8':
      return Uint8Array

    case 'uint16':
      return Uint16Array

    case 'uint32':
      return Uint32Array
    
    case 'f':
    case 'float32':
      return Float32Array

    case 'd':
    case 'float64':
      return Float64Array

    case 'array':
      return Array

    case 'uint8_clamped':
      return Uint8ClampedArray
  }
}
