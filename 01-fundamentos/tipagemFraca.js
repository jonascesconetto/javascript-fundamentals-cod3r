// uma mesma váriavel pode conter diferenres valores e tipos de valores
// o que significa que javascript é de tipagem fraca.

let qualquer = 'legal'

console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1215
console.log(qualquer)
console.log(typeof qualquer)

// evite nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false

// Obs: prefira declarações descritivas a utilizar comentários