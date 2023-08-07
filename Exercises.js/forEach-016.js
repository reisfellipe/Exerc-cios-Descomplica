/*
O método forEach é usado para percorrer arrays, mas usa uma função de modo diferente do "laço for" tradicional.
*/
//for tradicional conhecido
var a = new Array(10,20,30,40,50);
for(let valor of a){
    console.log(valor);
}

//usando o ForEach, para o mesmo resultado de cima

a.forEach(valor => console.log(valor));

//para somar os valores usando forEach
var tot = 0;
a.forEach(valor => {
    tot += valor;
})
console.log(tot);

//Agora usando o forEach com função

a.forEach(function(valor, indice, array){
    console.log(array[indice]);
})
