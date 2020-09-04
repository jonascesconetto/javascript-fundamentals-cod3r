const [a] = [10] // para realizar um destructuring em array se usa o []
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8] 
console.log(n1, n3, n5, n6)

// destructuring de array dentro de array
const [,[, nota]] = [[, 8, 8],[9, 6, 8]]
console.log(nota)