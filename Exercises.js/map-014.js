var numeros = [1,2,3,4,5,6,7,8,9,10];

var num = numeros.map(function(valor){
    return valor *2;
});
console.log(num);

var funcionarios = [
    {nome: "Luiz", idade: 25},
    {nome: "Isaías", idade: 17},
    {nome: "Roberto", idade: 42},
    {nome: "Pablo", idade: 55},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);

var highfive = new Array(1,2,3,4,5,6,7,8,9,10);

var res = highfive.map(function(valor){
    return valor > 5;
})

console.log(res);

var fill = highfive.filter(function(valor){
    return valor < 5;
});

console.log(fill);
