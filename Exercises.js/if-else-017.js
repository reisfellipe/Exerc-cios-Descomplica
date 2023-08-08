var país = "Brasil";

if(país != "Brasil"){
    console.log(`Você é da ${país}, estrangeiro!`);
}else{
    console.log(`Você é do ${país}, é brasileiro!`);
}

var idade = 17;

if(idade < 16){
    console.log("Não vota");
}else if(idade < 18){
    console.log("Voto opcional");
}else{
    console.log("Voto obrigatório");
}