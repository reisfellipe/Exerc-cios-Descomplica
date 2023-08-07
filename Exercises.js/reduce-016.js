var numeros = [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for(var position = 0; position < numeros.length;position++){
    total += numeros[position];
}
console.log(total);

/*var tot = numeros.reduce(function(total, numero){
    return total + numero;
},0);
console.log(total);
*/