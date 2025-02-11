// function mensagem(nome){
//     return "Seja bem-vindo "+nome 
// }

// console.log(mensagem("Nicolas"))

// function soma(nom1, num2){
//     return nom1 + num2
// }

// console.log(soma(1,6))

//funcao anonima
// (function(x,y){
//     console.log(x+y)
// })

// (5,7)

// const soma = function(x,y){
//     return x+y
// }

// let resultado = soma(3,5)

// console.log(resultado)

//Arrow function
// const triplo = function(num){
//     return num * 2
// }

//Arrow function
// console.log(triplo(5))

// let triploV2 = (num)=>{
//     return num*3
// }
// console.log(triploV2(3))

// Arrow function em uma linha

// let triploV3 = num => {return num * 3}

// console.log(triploV3(2))

// DESAFIOOOO
// const somar = (num1, num2) => num1 + num2;
// const menos = (num1, num2) => num1 - num2;
// const mutiplicar = (num1, num2) => num1 * num2;
// const dividir = (num1, num2) => num1 / num2;

// console.log(somar(1,2))
// console.log(menos(2,1))
// console.log(mutiplicar(3,2))
// console.log(dividir(6,2))

// ... usa quando não sabe o numero de parametros 
// const rest= (...numeros)=>{
//     let aux = 0
//     for( i in numeros){
//         aux++;
//     }
//     return aux
// }
// const numeros = [1,6,5,7]
// console.log(rest(...numeros))
// console.log("REST:",rest(4,3))



//TERNARIO

// let x = 8
// let resultado = x%2 == 0?"PAR": "IMPAR";
// console.log(resultado)

//Diferença
// if(x%2 == 0){
//     resultado= "PAR"
// }else{
//     resultado="IMPAR"
// }

// console.log(resultado)


// const pessoa = {
//     nome:"Barutti",
//     idade:21,
//     peso: 90,
//     endereco:{
//         logadouro:"AV. Paulista",
//         numero: 5000
//     }
// }

// const{nome:n,idade:i, peso:p} = pessoa
// console.log( n + " " + i +" " + p )

// pegando somete o logadouro 

// const {endereco:{logadouro, numero}, } = pessoa
// console.log(logadouro+ " "+ numero)