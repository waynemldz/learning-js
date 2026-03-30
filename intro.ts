function showName(name: string){
    console.log(name)
}

showName('Wayne')


const nome: string = 'Wayne'

// array

const num: number[] = [3,4,5,6,2,3]
const people: string[] = ['Gabriel', 'Yasmin']
const people2: Array<string> = ['Yasmin', 'Wayne']
const arrayMisto: [string, number, boolean] = ['Nunes', 3, true]

//object

type person = {
    nome: string,
    idade: number,
    cidade: string
}

const person: person = {
    nome: 'Yasmin',
    idade: 18,
    cidade: 'Belo Horizonte'
}