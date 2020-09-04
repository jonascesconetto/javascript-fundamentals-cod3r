const funcs = []

for (let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// diante do problema de escopo aberto do var o let resolve esse problema