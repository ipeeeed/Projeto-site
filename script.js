/*
// let produz uma variavel, pode ser redefinida.
let idade = 23;
let altura = 175;
let peso = 60;
let nome = 'Pedro';
altura = 179;
peso = 59

// const produz uma variavel, não pode ser redefinida.
const cor = 'branco'; 
const sexo = 'masculino';

// var produz uma variavel
var namorada = undefined;
var programador = true;
var emprego = null;

console.log(idade, altura, peso, nome, cor, sexo, namorada, programador, emprego);

// objects são variaveis de um mesmo objeto juntas
let pessoa = {
    nome: 'Roberto',
    idade: 38,
    altura: 190,
    peso: 82,
    emprego: undefined
}

// arrays
let família = ['Natália', 12, 166, 47]
let amigos = ['Gabriel', 'Kevelin', 'Lucas', 'Karem', 'Lidânia']

console.log(pessoa, família, amigos[3]);
*/

//window.confirm('Alô !!!')
/*
var nome = window.prompt('Digite seu nome!')
window.alert('Seja bem-vindo(a) ' + nome + '!')
*/

/*
var n1 = Number(window.prompt('Digite um número: '))
var n2 = Number(window.prompt('Digite outro número: '))
var s = n1 + n2
window.alert(`A soma entre o número ${n1} e o número ${n2} é ${s}`)
*/


/* var nome = window.prompt('Digite seu Nome!')
document.write(`Olá ${nome}, seu nome com ${nome.length} letras faz você ficar mais bonito(a) por cinco segundos.`)
*/

var p1 = window.document.querySelector('p');
window.document.write('Escreva algo diferente' + p1.innerText);
p1.style.background = 'green'