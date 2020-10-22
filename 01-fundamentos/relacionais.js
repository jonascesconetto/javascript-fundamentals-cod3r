// Operadores relacionais sempre retornam true or false

console.log('01) ', '1' == 1)   // só estamos comparando o valor
console.log('02) ', '1' === 1)  // comparação estritamente igual!!! Nesse caso, estamos comparando Number e String
console.log('03) ', '3' != 3)   // comparando somente o valor 
console.log('04) ', '3' !== 3)  // estritamente diferente (lógica igual ao estritamente igual)

console.log('05) ', 3 < 2)
console.log('06) ', 3 > 2)
console.log('07) ', 3 <= 2)
console.log('08) ', 3 >= 2)

// Datas
const d1 = new Date(0) // new Date(0) - remete a primeira hora/data do linux
const d2 = new Date(0)

console.log('09) ', d1 === d2) // como estamos comparando endereço de memória indefere os operadores iguais
console.log('10) ', d1 == d2) 

console.log('11) ', d1.getTime() === d2.getTime()) // comparação entre Number
console.log('12) ', undefined == null)
console.log('13) ', undefined === null)

// obs: é bom utilizar o estritamente igual (===)