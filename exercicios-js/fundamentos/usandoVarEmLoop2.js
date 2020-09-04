const funcs = []

for (var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// problema histórico do 'var', por ter escopo aberto ele sempre vai atualizar com o último valor tudo