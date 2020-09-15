function tratarErroELancar(erro){

    /** Diferentes throw permitidos */

    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Mensagem Erro'

    throw{
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e){
        tratarErroELancar(e)
    } finally{ // executa sempre independente do erro apresentado
        console.log('Final'); 
    }
}

// const obj = {nome : 'Jonas'} // erro
const obj = {name : 'Jonas'}
imprimirNomeGritando(obj);