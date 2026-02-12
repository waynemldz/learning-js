class Universitario {
    constructor(nome, idade, cor, notaEnem){
        this.nome = nome;
        this.cor = cor;
        this.notaEnem = notaEnem;
    }
}

Universitario.prototype.idade = 18;
let alfredo = new Universitario('Alfredo', 18, 'branco', 650);
Universitario.prototype.nome = 'Teste';
 console.log(alfredo.nome)
 console.log(Universitario.nome)