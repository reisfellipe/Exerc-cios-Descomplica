//1 = forma de criar objetos

const pessoa = {
    nome: 'Fellipe',
    sobrenome: 'Reis'
}

console.log(pessoa['sobrenome']);

//2 forma de criar objeto

const funcionario = new Object();
funcionario.nome = "Olívia"
funcionario.sobrenome = "Drummond"

console.log(funcionario.nome);

//3 forma de criar objeto

function criarPessoa(nome, sobrenome, i){
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Artur", "Lorenzzeti", 25)
const p2 = criarPessoa("Heitor", "Soares", 19)


console.log(p1.nomeCompleto)
console.log(p2)