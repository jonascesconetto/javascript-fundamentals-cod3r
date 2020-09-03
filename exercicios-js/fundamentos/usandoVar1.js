// javascript variáveis do tipo 'var' possuem apenas dois escopos possíveis 
// global (toda aplicação tem acesso) ou dentro de uma função (só dentro do escopo da função se tem acesso) 
// Obs: evitar usar var globais, pois a aplicação pode sobrescrever o conteúdo gerando um erro na aplicação

{{{{ var sera = 'será???'} }}}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)