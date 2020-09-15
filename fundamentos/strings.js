const escola = "cod3r"

// fornce a letra na posicao solicitada
console.log(escola.charAt(3))

// converte o elemento e identifica a referencia na tabela ASC
console.log(escola.charCodeAt(3))

// verifica se existe o valor na string, retornando a posicao
console.log(escola.indexOf('c'))

// gera uma substring apartir da string original
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// concateçao de strings
console.log(escola.concat(escola).concat("!!!"))

// javascript entende regex também
console.log(escola.replace(3, 'e'))

// quebra uma string em um array
console.log('Ana, Maria, Pedro'.split(', '))
