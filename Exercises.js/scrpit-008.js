var irmãos = new Array("Tech", "Fellipe", "JavaScript", "Front-End");
var order = irmãos.reverse()
console.log(order);

console.log("posição do nome Fellipe: " + irmãos.indexOf("Fellipe"));
irmãos.push("Adicionado"); // ADICIONA UM ELEMENTO NA ARRAY
console.log(irmãos);
irmãos.pop(); //REMOVE O ULTIMO ELEMENTO DE UMA ARRAY
console.log(irmãos)

var sequencia = [1, 2, 3, 4, 5, 6];

console.log(sequencia.join(' ')); //vai colocar alguma coisa entre os elementos do Array, mesmo se for só escpaço

var retirar = sequencia.shift(); //ele tira o primeiro elemento do Array
console.log(retirar);

console.log(sequencia);

console.log("Posição do numero 3: " + sequencia.indexOf(3)); //vai revelar a posição do elemento 3