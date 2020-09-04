// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){ 
    const saudacao = 'Fala dev... ' // contexto léxico 2
    return saudacao
}

// Objectos são grupos aninhados de pares e nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)