class Funcionario {
    constructor(nome,idade,cargo){
        this.nome  = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Olá eu trabalho na ${empresa}`);
    }

    trabalhar(){
        console.log("Trabalho junto com minha equipe na produção");
    }
}

class Gerente extends Funcionario {
    constructor(departamento){
        this.departamento = departamento;
    }

    gerenciar(){
        console.log("É necessário ter habilidade de gestão para gerenciar pessoas e projetos.")
    }
}

class Desenvolvedor extends Funcionario {
    constructor(linguagem){
        this.linguagem = linguagem;
    }

    programar(){
        console.log("Para programar, eu devo usar recursos e ferramentas de programação, IDE, Linguagem de programação e um bom computador.")
    }
}

const gerente = new Gerente("Lorenzo", 33, "Gerente de Projetos");
gerente.departamento();

const desenvolvedor = new Desenvolvedor("Fellipe", 19, "Programador Front End");
desenvolvedor.programar();