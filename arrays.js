let numeros = [1, 3, 5, 7, 23];
// mostra o tamanho 
console.log(numeros.length)
// mostra o elemento localizado na posição solicitada
console.log(numeros[3])
// adiciona no final do array
numeros.push("teste")
console.log(numeros)
// remove no final do array
numeros.pop()
console.log(numeros)
// remove no inicio do array
numeros.shift()
console.log(numeros)
// adiciona no inicio do array
numeros.unshift(5, "oi")
console.log(numeros)
// pesquisa a posiçao do valor a partir do inicio
console.log(numeros.indexOf(5))
// pesquisa a posiçao do valor a partir do fim
console.log(numeros.lastIndexOf(5))
// criar uma array a partir de outra
console.log(numeros.slice(1, 4)) // ['oi', 3, 5]
// procurar se array tem determinado elemento
numeros.includes("oi") // true
// inverte um array
numeros.reverse()