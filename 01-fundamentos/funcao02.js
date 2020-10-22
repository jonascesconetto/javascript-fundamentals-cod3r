// Armazenado uma função dentro de uma variável

const imprimirSoma = function (a, b){ // constante recebe uma função anonima

    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenado uma função arrow dentro de uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

// reduzindo ainda mais a expressão
const imprime2 = a => console.log(a)

imprime2('Legal!')