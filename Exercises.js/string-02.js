var s = "JavaScript e Python"

var pos1 = s.indexOf("Python") //revela a posição que está o conteúdo
console.log(pos1);

var novaString = s.substring(13, 19); //exibe somente o conteudo que estiver entre essas duas posições
console.log(novaString)

var frase = "Olá mundo";
if (frase.startsWith("Olá")) {
    let sub = frase.substring(4);
    let novaStr = sub.replace("mundo", "pessoal")
    let novaStringMaiuscula = novaStr.toUpperCase();
    console.log(novaStringMaiuscula);
}