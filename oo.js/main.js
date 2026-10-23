
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.emitirSom = function() {
        console.log("Som de animal");
    };
}

function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);

    this.raca = raca;

    this.latir = function() {
        console.log("Au au!");
    };
}

function Gato(nome, idade, cor) {
    Animal.call(this, nome, idade);

    this.cor = cor;

    this.miar = function() {
        console.log("Miau!");
    };
}

const cachorro = new Cachorro("Bob", 3, "Vira-lata");
const gato = new Gato("Mimi", 2, "Branco");
const outroCachorro = new Cachorro("Thor", 5, "Pastor Alemão");

console.log(cachorro);
console.log(gato);
console.log(outroCachorro);

cachorro.latir();
gato.miar();
outroCachorro.latir();
