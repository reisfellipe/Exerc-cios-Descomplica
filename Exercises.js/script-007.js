var valores = [15, 16, 18, 20, 10]; //TODO ARRAY COMEÇA NA POSIÇÃO 0 

console.log(valores[2]); //com isso será exibido o elemento da posição indicada

for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

//é possivel determinar cada valor em cada posição específica um por um

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";
carros[2] = "Ferrari";

var motos = new Array("BMW", "YAMAHA", "HUNDAY");

//calculando a média de todos os Arrays

var $media = [10, 20, 30, 40, 50];


var divisao = 0
for (var res = $media;) {
    console.log(`A média dos valores é ${res}`);
}