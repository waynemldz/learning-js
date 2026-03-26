const estoque = ['arroz', 'feijão', 'arroz', 'macarrao', 'batata', '']
const precos = [3.50, 5, 3.50, 2, 2.50, 0]

const total = precos.reduce((acc, valor) => {
    return acc + valor
}, 0)

console.log(total)