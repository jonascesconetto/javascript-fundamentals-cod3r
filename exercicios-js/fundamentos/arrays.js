/*
* Array em javascript aceita de tudo
*/

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log(valores.length) // tamanho do array de

valores.push({id: 3}, false, null, 'test') // inserindo elementos no array
console.log(valores)

console.log(valores.pop()) // saca o último elementos do array

delete valores[0] // deleta o elemento na posisção informada
console.log(valores) 

console.log(typeof valores) 
/**
 * OBS: por mais que a linguagem aceite diferentes tipos de dados no tipo array não é uma boa pratica
 * utilizar diferentes tipos de dados em uma lógica empregada. Sendo assim, o ideal é utilizar diferentes
 * arrays com os diferentes tipos de dados, e então aplica a lógica.
 */