var carro = [{modelo: 'Audio A3', marca: 'Audi', ano: 2023},
{modelo: 'Compass', marca: 'Jeep', ano: 2021}]

for(let caracteristica in carro){
    console.log(carro[caracteristica]);
};

for(let c of carro){
    console.log(c.ano);
}