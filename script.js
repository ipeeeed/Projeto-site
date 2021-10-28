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









//window.confirm('Alô !!!')

//window.prompt('')

//window.alert('')