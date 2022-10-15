const valor = 'Global';

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec();

// contexto léxico é muito importante para uma função, 
// pois quando uma função é declarada o seu contexto 
// vai junto, ou seja, a onde ela foi declarada tem importância. 