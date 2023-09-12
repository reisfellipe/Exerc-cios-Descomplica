function processName(nome,callbak){
    if(typeof nome !== 'string'){
        callbak(new Error('O nome deve ser uma string'));
        return;
    }

    if(nome.length === 0){
        callbak(new Error('O nome não pode estar vazio'));
        return;
    }

    callbak(null,"Nome processado com sucesso")
}

processName(10,(error,result) => {
    if(error){
        console.log("Houve algum problema na transmissão de dados ->  " + error.message)
    }else{
        console.log(result)
    }
});