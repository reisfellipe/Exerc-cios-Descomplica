var produtos = [
    {id: 1, descrição: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descrição: "Televisão", categoria: "Eletrônico"},
    {id: 3, descrição: "Microondas", categoria: "Eletrodoméstico"},
    {id: 4, descrição: "Estante", categoria: "Móveis"},
    {id: 5, descrição: "Sofá", categoria: "Móveis"},
    {id: 6, descrição: "Piso", categoria: "Construção"},
]

var produtoListagem = produtos.filter(
    function (valor) {
        return valor.categoria == "Eletrônico";
    }
);
console.log(produtoListagem);