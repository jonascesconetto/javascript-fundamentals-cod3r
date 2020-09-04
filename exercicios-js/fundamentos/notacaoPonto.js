console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' // criando um atributo dinamicamente usando a notação ponto
// obj1['nome'] = 'Bola2' // mesma coisa que a linha anterior
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const objt2 = new Obj('Cadeira')
const objt3 = new Obj('Mesa')

console.log(objt2.nome)
console.log(objt3.nome)
objt3.exec()

// usando a notação Ponto a partir do 'this' criar tanto atributos como funções que serão exportadas