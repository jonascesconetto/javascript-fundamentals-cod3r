// Objetivo de criar uma funcão de forma mais reduzida e também
// deixar o this premanente
// função arrow é sempre anonima

let dobro = function (a){
    return 2*a;
}

dobro = (a) => {
    return 2*a;
}

dobro = (a) => 2*a // return está implicito

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possi um parametro
console.log(ola())