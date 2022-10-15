// funcao sem retorno
function imprirsoma(a, b){

    console.log(a + b)
}

imprirsoma(2,3)
imprirsoma(2) // soma um valor com um valor undefined o retorno será um NaN.
imprirsoma(2,3,4,5,6,7,3) // flexibilidade da linguagem

// funcao com retorno
function soma(a, b = 1){    // = 0 é definido como valor padrão da variavel(ECMA6) ideia de tratamento de váriaveis
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))// obervando o valor padrão em ação
console.log(soma())