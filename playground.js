typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof 'foo' // "string"
typeof Symbol('id') // "symbol"
typeof {} // "object"
typeof null // "object"  *
typeof alert // "function"  *

let variable = {}
variable.prop = null
