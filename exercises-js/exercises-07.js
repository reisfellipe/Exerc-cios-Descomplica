class Motor{
    constructor(cilindrada){
        this.cilindrada = cilindrada;
    }

    ligar(){
        console.log("Motor ligado");
    }
}

//Classe Carro
class Carro{
    constructor(motor){
        this.motor = motor;
    }

    acelerar(){
        console.log(`Acelerando com um motor de ${this.motor.cilindrada} cilindradas`);
    }
}

// Criar um objeto motor
const motor = new Motor(2000);

// Criar um objeto carro com p objeto Motor como argumento
const carro = new Carro(motor);

// Usar o método acelerar do objeto carro
carro.acelerar();