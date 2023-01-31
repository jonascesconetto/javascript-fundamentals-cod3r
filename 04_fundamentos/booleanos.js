let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1;
console.log(!!isAtivo) // !! - duas vezes negação

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!'')// string vazia
console.log(!!null)
console.log(!!NaN) // not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('finalizando')
console.log(!!('' || null || 0 || 'epa')) // testa
console.log(('' || null || 0 || 'epa')) // mostra o verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') // se o nome estiver vazio (falso) retorna o segundo texto