function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto1 = {
    nome: 'Iphone',
    preco: 7333,
    desc: 0.15,
    getPreco
}

const produto2 = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto1.getPreco())
console.log(produto2.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // contexto, o restante são os paramentos
console.log(getPreco.apply(carro, [0.27, '@'])) // objeto que será utilizado como contexto da função, os parâmetros são passados como array