var elementos = new Array(2023, "Fellipe", "Descomplica", 365, -10, "exchange");

var novos = elementos.splice(3, 3, "Faculdade Digital");
console.log(elementos);
console.log(novos);

/*
Para acrescentar ou substituir um valor usando SPLICE, devemos usar 3 PARÂMETROS:
Array.splice(1º, 2º, 3º);

1º Indique a posição desejada
2º Indique quantas a partir da posição voce quer remover
3º Escreva o Elemente que surgirá no lugar da qual estava.
*/

//VEJAMOS AGORA COMO ACRESENCENTAR UM ELEMENTO no início SEM APAGAR NENHUM

var paises = new Array("Brasil", "Groenlândia", "Nova Zelândia", "Dinamarca");

paises.unshift("Canadá");

console.log(paises);

//Exercício de aula

var nomes = new Array("Guilherme", "Manoel", "Samuel", "Davi", "João");
nomes.unshift("Monica");
nomes.splice(5,1);
console.log("A posição de Samuel é: " + nomes.indexOf("Samuel"));
console.log(nomes);
nomes.splice(2,1,"Emanoel");
console.log(nomes);
