var numeros = new Array(1,2,3,4,5,6,7,8,9,10);
var total = 0;
for(var i = 0; i < numeros.length; i++){
    total += numeros[i];
}
console.log(total);

var tot = numeros.reduce(function(total, numero){
    return total + numero;
},0);