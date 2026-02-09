let pessoa = {
    nome: "Wayne",
    idade: 25
}

const {nome: nomeUsuario} = pessoa;

console.log(nomeUsuario)
console.log(pessoa)

const {sobrenome = "Gabriel"} = pessoa;

console.log(sobrenome)
console.log(pessoa)