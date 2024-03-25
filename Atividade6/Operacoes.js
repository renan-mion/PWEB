var num1 = prompt("Primeiro número");
var num2 = prompt("Segundo número")

var soma = parseFloat(num1) + parseFloat(num2);
var sub = parseFloat(num1) - parseFloat(num2);
var prod = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var resto = parseFloat(num1) % parseFloat(num2);

alert("Soma: " + soma);
alert("Subtração: " + sub);
alert("Produto: " + prod);
alert("Divisão: " + div);
alert("Resto da divisão: " + resto);