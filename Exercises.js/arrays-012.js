/*
1- Slice
2- Filter
3- Map
4- Reduce
5- ForEach
*/

/*
SLICE = O método slice() copia uma parte de um array e o retorna como um novo array. Isso NÃO MODIFICA o array original

De: Corta o array a partir do índice informado;
Ate: Corta o array até o índice informado;
*/

let array1 = new Array(1, 2, 3, "Fellipe", 100, "Da Silva");

let ArrayCopy = array1.slice(0,3);

console.log(array1);
console.log(ArrayCopy);

/*
CONCAT =  O Concat é utilizado para fazer a junção de duas partes e após essa junção ele retorna uma nova.
Pode ser usado para Strings ou em Arrays, o comando é igual, para os dois tipos de dados.
*/

//com Strings
let nome = "Dr. ";
let titulo = "Fellipe Reis";
let nome_completo = nome.concat(titulo);
console.log(nome_completo);

//agora com Arrays
let parteum = new Array(1, 2, 3);
let partedois = [4,5,6];
let array_complete = parteum.concat(partedois);
console.log(array_complete);

//exercício dado em aula

var meses = ["janeiro", "fevereiro", "março",];
