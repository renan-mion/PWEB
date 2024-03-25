var nome = prompt("Digite seu nome");
var nota1 = prompt("Nota 1");
var nota2 = prompt("Nota 2");
var nota3 = prompt("Nota 3");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert("Média: " + media);