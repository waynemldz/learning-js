let pessoa = {
    nome: "Wayne",
    profissao: "Programador",
    idade: 24,
    mergulhar: function(){
        console.log("pluft pluft")
    }
}

pessoa.mergulhar()

let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}
// adicionando e deletando propriedades
delete carro.portas
carro.tetoSolar = true;

// copiar propriedades

let objetoA = {
    prop1: "teste",
    prop2: "teste2"
}

let objetoB = {
    prop3: "teste3"
}

Object.assign(objetoA, objetoB);

// armazena as chaves em um array
let array = Object.keys(objetoA);
array.push("teste")
console.log(array)

// copiar objeto (mutação)
let objetoC = objetoA;