var url = "https://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Fellipe";
const parametros = url.split("?")[1]
console.log(parametros)
const valores = parametros.split("&")
console.log(valores);

for(let i = 0; i < valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase();
    }
}
console.log(valores);