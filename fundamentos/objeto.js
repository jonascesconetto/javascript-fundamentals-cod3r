const prod1 = {} // criando objeto de forma literal

prod1.name = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Especial'] = 0.40 // forma estranha de definição, evitar ao máximo

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.9,
    obj:{
        blabla: 1,
        seila: 'seila'
    }
}

console.log(prod2)