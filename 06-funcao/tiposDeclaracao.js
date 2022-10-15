console.log(soma(1,2)) // isso vai funcionar, pois o interpretador do javascript primeiro carrega as funções e depois executa o código
// console.log(sub(1,2)) // isso NÃO vai funcionar
// console.log(mult(1,2)) // isso NÃO vai funcionar

// function declaration
function soma(x,y){
    return x + y;
}

// function expression
const sub = function(x, y){
    return x - y;
}
console.log(sub(1,2))

// named function expression
const mult = function mult(x, y){ // a única vantagem é em debugar o código, pois permite visualizar na stack o nome da função
    return x * y; 
}
console.log(mult(1,2))