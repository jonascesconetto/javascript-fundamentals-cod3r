function Pessoa(){
    this.idade = 0;

    const self = this // dessa forma se garante que será amarrado o this ao objeto (gambiarra)
    setInterval(function(){
        // this.idade++;
        // console.log(this.idade)
        self.idade++;
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // setInterval representa que esse bloco será replicado a cada (1000) ms de tempo 
    // esse bind arrama o this a pessoa
}

new Pessoa