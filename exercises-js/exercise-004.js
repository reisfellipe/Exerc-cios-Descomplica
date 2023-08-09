const numeros = 0;
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        soma += numeros[i];
    }
}
console.log(soma);