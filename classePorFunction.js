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