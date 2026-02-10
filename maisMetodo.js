let pessoa = {
    nome: "",
    setNome: (novoNome) => {
        this.nome = novoNome
    },
    getNome: () => this.nome
}


pessoa.setNome("Lucas");
console.log(pessoa.getNome())


console.log(pessoa.nome)
