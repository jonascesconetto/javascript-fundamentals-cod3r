// Pelo menos uma vez o bloco será executado

function getInteiroAleatorioEntree(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do{
    opcao = getInteiroAleatorioEntree(-1, 10);
    console.log('Opção escolhida foi ' + opcao);
}while(opcao != -1)

console.log('Até a próxima!!!');