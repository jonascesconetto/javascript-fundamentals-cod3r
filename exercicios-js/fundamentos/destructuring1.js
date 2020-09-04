// recurso adicionado no ES2015

const pessoa = {
    nome: 'Fabi',
    idade: 22,
    endereco: {
        logradouro: 'Rua tal',
        numero: 64
    }
}

const {nome, idade} = pessoa // tire de dentro do objeto os atributos {}
console.log(nome, idade)

const {nome: n, idade: i} = pessoa 
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// quando desestruturar um dados aninhado tem que ter certeza que o caminho até 
// o dado seja conhecido, o último dados pode ser undefined