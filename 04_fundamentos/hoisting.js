// Hoisting = Içamento 'somente para javascript'
// esse conceito empregado no javascript permite que uma variável declarada posteriormente a sua chamada seja
// içada e acessada. Em outras linguagens isso não poderia acontecer pela característica linear de execução

console.log('a = ', a)
var a = 2
console.log('a = ', a)

// entendendo a ideia
// var = a
// console.log('a = ', a)
// a = 2
// console.log('a = ', a)

// console.log('b = ', b)
// let b = 2
// console.log('b = ', b)