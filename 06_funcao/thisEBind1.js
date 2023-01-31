const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // passar um objeto no qual você queira que seja resolvido o this
// bind amarra um determinado objeto para ele ser o dono do método invocado
falarDePessoa()