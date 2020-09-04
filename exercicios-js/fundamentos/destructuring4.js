function rand([min = 0, max = 1000]){ // desestruturação de objeto por passagem de parâmetro 
    if (min > max) [min, max] = [max, min] // invertendo as variáveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arrendonda o número para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand())// erro
