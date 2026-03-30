interface ocupacao { 
    trabalho: string,
    local: string
}

interface pessoas {
    name: string,
    idade: number,
    cidade: string
}

const pessoas: pessoas | ocupacao = {
    name: 'Paulo',
    idade: 24, 
    cidade: 'Fortaleza'
}

// aliases

interface escolaridade {
    ensinoMedio: boolean,
    faculdade: boolean
}

interface aluno{
    nome: string,
    cidade: string,
    nota: number
}

type dados = aluno & escolaridade

const aluno: dados {
    nome: 'Wayne',
    cidade: 'Belo Horizonte',
    nota: 900,
    ensinoMedio: true,
    faculdade: false
}