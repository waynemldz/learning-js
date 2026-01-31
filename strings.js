console.log(typeof("5" + 1));

function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("seu nome é " + nome)
    } else{
        console.log("seu nome é " + nome + " e vc tem " + idade + " anos")
    }
}

nomeComIdade("wayne", 21);