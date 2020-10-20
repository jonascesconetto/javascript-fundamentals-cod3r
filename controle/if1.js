function soBoaNoticia(nota){
    if(nota>=7){ // sempre retorna um teste de verdadeiro e falso
        console.log('Aprovado com: ' + nota)
    }
}

soBoaNoticia(8.3)
soBoaNoticia(3.0)

function seForVerdadeEuFalo(valor){
    if(valor){ // sempre retorna um teste de verdadeiro e falso
        console.log('É verdade... ' + valor)
    }
}

// FALSO
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
// VERDADE
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

