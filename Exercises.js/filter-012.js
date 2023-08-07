var numbers = new Array(1,2,3,4,5,6,7,8,9,10);
var result = numbers.filter(item => item % 2 == 0);
console.log(result);

//Usando função par retornar numeros maior que o 5
var numerosFiltrados = numbers.filter(
    function(valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados);

function buscarValores(valor){
    return valor < 5;
}

var numerosEncontrados = numbers.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = numbers.filter((valor) => {
    return valor > 5;
});
console.log(r1);

var r2 = numbers.filter(valor => 5);

//USANDO OBJETOS AGORA

var funcionario = new Array(
    {nome: "Fellipe", idade: 18},
    {nome: "Isaias", idade: 33},
    {nome: "Noah", idade: 11},
    {nome: "Oliver", idade: 43},
)

var pessoasListagem = funcionario.filter(
    function(valor) {
        return valor.nome.length < 5;
    }
)
console.log(pessoasListagem);