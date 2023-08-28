class DispositivoEletronico{

    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Já está ligado.")
            return;
        }
        this.ligado = true;
    }
}

//extends pega todas as configurações de outra classe
class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Samsung", "Preto", "S22 ULTRA");
console.log(s1);
s1.ligar();