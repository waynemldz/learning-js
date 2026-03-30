interface endereco {
    cidade: string,
    estado: string
}

interface pessoa {
    nome: string,
    idade: number,
    endereco: endereco
}

let pessoa: pessoa = { 
    nome: 'Wayne',
    idade: 25,
    endereco: {
        cidade: 'Belo Horizonte',
        estado: 'MG'
    }
}

console.log(pessoa)