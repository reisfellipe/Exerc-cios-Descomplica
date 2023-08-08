/*
Você está trabalhando em um projeto de programação e precisa manipular um array que contém tanto strings quanto números. Para isso, você decide utilizar as funções ‘map’, ‘filter’ e ‘reduce’ em JavaScript.

O array dado possui uma combinação de strings e números, e sua tarefa é realizar algumas operações específicas nele. Primeiramente, utilizando a função ‘map’, você deve criar um novo array onde os números serão duplicados e as strings serão transformadas em letras maiúsculas. Caso existam elementos de outros tipos no array, eles devem ser mantidos sem alteração.

Em seguida, utilizando a função ‘filter’, você deve criar outro array contendo somente os números presentes no array original. Ou seja, todos os elementos que não são números devem ser excluídos.

Por fim, utilizando a função ‘reduce’, você deve somar todos os números do array original. O resultado dessa soma deve ser armazenado em uma variável.

Essas operações permitem que você manipule e transforme os elementos do array de acordo com suas necessidades específicas. Ao final do processo, você terá um novo array com elementos modificados, um array contendo apenas os números e a soma de todos eles.

Lembre-se de utilizar corretamente as funções ‘map’, ‘filter’ e ‘reduce’ em JavaScript para resolver esse problema.
*/

array = [ "Faculdade", 10, "JavaScript", 15, "Development", 150]

//Utilizando map para duplicar os númers e transformar as strings em letras maiúsculas

const mapArray = array.map((array) => {
    if (typeof array === 'number') {
        return array * 2;
    } else if(typeof array === 'string'){
        return array.toUpperCase();
    }else{
        return array;
    }
});

console.log(mapArray);

//Utilizando o filter para filtrar somente os numeros do array

filterArray = array.filter((valor) =>{
    return valor >= 10;
})

console.log(filterArray);

//Utilizando reduce para somar os numeros do Array

var total = 0;
for(var ind = 0; ind < array.length; ind++){
    if(typeof array == 'number') {
        total += array[ind];
    }else{
        return array
    }
};

console.log(total);