function criarProduto(nome, preco){
    
    return{ 
        nome,
        preco,
        desconto: 0.1,
    }
}

// function criarProduto(nome, preco){
    
//     let teste = preco * 0.1
    
//     return{ 
//         nome,
//         preco,
//         desconto: 0.1,
//         precoFinal: teste
//     }
// }

console.log(criarProduto('Notebook', 1000));