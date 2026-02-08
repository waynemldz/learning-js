let nome = "          Wayne    "; //          Wayn e    
// remove tudo que não for uma string (incluindo espaços e não mexe no meio da string)
console.log(nome.trim()) // Wayne

// adiciona um valor repetidas vezes
let milAoContrario = "1";
console.log(milAoContrario.padStart(4, "0"))

let frase = "testando o metodo split";
// criar um array separando palavras
let palavras = frase.split(" ")

// contrario do split
let novaFrase = palavras.join(" ")
