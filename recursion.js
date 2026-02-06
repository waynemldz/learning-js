function retornarNumeroPar(n){
    if(n < 2){
        console.log("recursividade parou")
    }
    else if (n % 2 != 0){
        console.log("impar = " + n);
        retornarNumeroPar(n - 1)
    } else{
        console.log("agora é par = " + n)
        retornarNumeroPar(n - 2)
    }
}

retornarNumeroPar(15);