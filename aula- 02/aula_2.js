// destraket

// const pessoa = {
//     nome: "Nicolas",
//     sobreNome: "Barutti",
//     idade: 23,
//     peso: 90,
//     endereco : {
//         logadouro: "Rua dos bobos",
//         num: 0
//     }

// }
// const { nome, sobreNome, peso } = pessoa;
// console.log(nome, sobreNome, peso); 

// const { endereco: { logadouro, num } } = pessoa;
// console.log(logadouro, num);


// const alunos = ["pedro", "joao", "jose"];
// const alunas = ["maria", "ana", "julia"];
// const professor = ["Nicolas", "Carlos","Joao"];
// const todos = alunos.concat(alunas).concat(professor);
// console.log(todos);


//Adicionar Push Aray
const professor = ["Nicolas", "Carlos","Joao", "Ana", "Maria"];

//adiciona no final
// professor.push("Pedro");

// adiciona no inicio
// professor.unshift("Pedro"); 

//ordena o array
// professor.sort();

//delete
// delete professor[1];

// delete o ultimo
// professor.pop();

// delete o primeiro
// professor.shift();

// splice gambiarra adiciona e remove
// professor.splice(1,3 );

// professor.forEach((professor, index) => {
//     console.log(index, professor);
// });
// console.log(professor);


const carro = [
    {modelo: "Gol", preco: 300000, anoFabr: 2021, flex: true},
    {modelo: "Celta", preco: 20000, anoFabr: 2022, flex: true},
    {modelo: "Fusca", preco: 10000, anoFabr: 2016, flex: false},
    {modelo: "Camaro", preco: 500000, anoFabr: 2025, flex: false},
]
// criando filter fora e chamando la embaixo
const anoFabrabricacao = (carro) => carro.anoFabr >= 2020;
const precoCarro = (carro) => carro.preco > 200000;
const flexCarro = (carro) => carro.flex == true;

//chamando dentro da função
// console.log(carro.filter(function(e){
//     return e.preco > 200000 && e.anoFabr > 2020;
// }));

console.log(carro.filter(anoFabrabricacao).filter(precoCarro).filter(flexCarro));

//Desafio
const pessoas = [  
    {nome: "Nicolas", idade: 21, profissao: "Desenvolvedor"},
    {nome: "Carlos", idade: 18, profissao: "Desenvolvedor"},
    {nome: "Joao", idade: 17, profissao: "Desenvolvedor"},
    {nome: "Ana", idade: 16, profissao: "Designe"},
]

const idade = (pessoas) => pessoas.idade >= 18;
const profissao = (pessoas) => pessoas.profissao == "Desenvolvedor";

console.log(pessoas.filter(idade).filter(profissao));


//Desafio 2
function calcularOperacoes(num1, num2) {
    return {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        divisao: num1 / num2 
    };
}

// Exemplo de uso
console.log(calcularOperacoes(10, 5));
