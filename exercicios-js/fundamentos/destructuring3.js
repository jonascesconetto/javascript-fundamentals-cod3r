function rand({min = 0, max = 1000}){ // desestruturação de objeto por passagem de parametro 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({})) // objeto vazio 0-1000
// console.log(rand()) // erro