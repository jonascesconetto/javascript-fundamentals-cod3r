// Indicado para quantidade indeterminado de repetições
// Essa estrutura pode nunca entra no laço de repetição

// Sempre observar a melhor estrutura para o problema a ser resolvido

function getInteiroAleatorioEntree(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1){
    opcao = getInteiroAleatorioEntree(-1, 10);
    console.log('Opção escolhida foi ' + opcao);
}

console.log('Até a próxima!!!');