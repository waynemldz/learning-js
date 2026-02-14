function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){
        console.log("insira um número");
    }else{
        return resultado;
    }
}

console.log(checarNumero(5));
checarNumero("teste")