//VAMOS IMPLEMENTAR UM CÓDIGO PARA VERIFICAR SE TODOS OS ELEMENTOS DO ARRAY POSSUEM NÚMEROS POSITIVOS

//CASO NÃO TENHA, DEVA SER LANÇADO UMA EXCEÇÃO

function checkPositive(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("O argumento deve ser de um array")
    }

    const allPositive = numeros.every((num) => num > 0);

    if(!allPositive){
        throw new Error("O Array deve conter apenas números positivos");
    }
    return true;
}

try{
    const numbers = [2,2,3,4,5]

    const isPositive = checkPositive(numbers)

    console.log(isPositive)
}catch(error){
    console.log("Ocorreu um erro -> " + error.message)
}