class Animal {
    constructor(tipo){
        this.tipo = tipo;
    }

    consome(alimento){
        console.log(`Esse animal se alimenta de ${alimento}`);
    }
}

class cachorro extends Animal {
    constructor(tipo){
        super(tipo);
    }
    latir(){
        console.log("Cachorro late");
    }
}

class gato extends Animal{
    constructor(tipo){
        super(tipo);
    }
    banho(){
        console.log("Gato não toma banho no chuveiro");
    }
    miar(){
        console.log("Os gatos miam");
    }
}

let pitbull = new cachorro();
pitbull.consome("Ração de cachorro");
pitbull.latir();

let garfield = new gato();
garfield.banho();
garfield.miar();