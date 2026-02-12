function criarCachorro(raca, cor, nome){
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.cor = cor
    cachorro.nome = nome
    return cachorro
}

let pastor = criarCachorro('Pastor Alemão', 'preto', 'Pinguço')
let viralata = criarCachorro('Vira-Lata', 'Caramelo', 'Zidane')
console.log(pastor)
console.log(viralata)

// outra forma

function Carro(marca){
    this.marca = marca
}

let bmw = new Carro('bmw')

function Aluno(nome, idade, notaTotal, frequencia){
    this.nome = nome;
    this.idade = idade;
    this.notaTotal = notaTotal;
    this.frequencia = frequencia;
    this.passou = () => {
        notaTotal >= 60 && frequencia > 50 ? console.log("aprovado") : console.log("reprovado");
    }
}

let thiago = new Aluno('Thiago', 17, 80, 30)
thiago.passou()
console.log(thiago)