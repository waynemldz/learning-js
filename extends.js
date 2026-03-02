class Animal{

    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log("O animal fez um som")
    }
}

class Cachorro extends Animal{

    constructor(nome, patas){
        super(nome);
        this.patas = patas;
    }

    latir(){
        console.log("au au")
    }
}

let dog = new Cachorro("Rex", 4);

dog.falar()
dog.latir()

console.log(dog)