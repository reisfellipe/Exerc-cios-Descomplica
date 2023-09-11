const numeros = [1,2,3,4,5,];

try{
    const doubleNumebers = numeros.map((num) => {
        if(typeof num !== 'number'){
            throw new Error("O array só pode ter números")
        }
        return num * 2;
    })
    console.log(doubleNumebers);
}catch(error){
console.log("Ocorreu uma exceção: " + error.message)
}

