function verificarTamanho(texto){
    if(texto.length > 9){
        console.log("o texto é muito grande")
    } else{
        console.log("dentro do limite")
    }
}

verificarTamanho("boa noite a todos")

let text = "nao sei de nada";
console.log(text.length)