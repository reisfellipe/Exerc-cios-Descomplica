var bebida = "Energético";
var valor = bebida;

switch(bebida){
    case "Coca-cola":
        console.log(` ${valor} 350ml Custa R$5,50. Obrigado pela compra, volte sempre!`);
        break;
    case "Heinekein":
        console.log(`${valor} 600ml Custa R$8,00. Obrigado pela compra, volte sempre!`);
        break;
    case "Limonada":
        console.log(`${valor} 300ml Custa R$4,79. Obrigado pela compra, volte sempre!`);
        break;
    case "Fanta":
        console.log(`${valor} 350ml Custa R$3,49. Obrigado pela compra, volte sempre!`);
        break;
    default:
        console.log(`Desculpe, não temos ${valor} hoje, mas você pode experimentar nossas bebidas mais vendidas:
        Café: R$2,00
        Leite: R$ 2,79
        Chá: R$ 3,99`);
}

console.log("Deseja algo para comer?");