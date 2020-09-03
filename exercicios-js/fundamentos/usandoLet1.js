var numero = 1
{
    // Let tem o escopo dentro do bloco definido com
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// Let - Let
// Usando o let dentro e fora do escopo passamos para uma linha de priorização
// se a mesma variável estiver dentro de um escopo mais restritivo, o valor que será obtido 
// o de dentro do escopo, se não ele pegara o de um escopo mais abrangente

let numeroTeste = 1
{
    // Let tem o escopo dentro do bloco definido com
    let numeroTeste2 = 2
    console.log('dentro = ', numeroTeste)
}
console.log('fora = ', numeroTeste)