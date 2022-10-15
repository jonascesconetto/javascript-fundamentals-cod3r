// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

// uma função javascript é um closure, pois ela tem a memória do 
// local onde ela foi definida e esse escopo que está externo a 
// função também vai junto quando a função é invocada.