let num1 = 1
let num2 = 2

num1++ // pos fixado
console.log(num1)
--num1 // pre fixado
console.log(num1)
// infix entre operandos

// o resultado só é verdadeiro pela regra de precedência, ou seja, o primeiro elemento incrementa antes de comparar, 
// e a comparação ocorre antes da subtração do segundo elemento 
console.log(++num1 === num2--) 
// verificação
console.log(num1 === num2) 

// Obs: Evite códigos confusos
// Código bom é aquele que tu bate o olho e sabe o ele faz 