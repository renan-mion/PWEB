var altura = parseFloat(prompt("Digite sua altura(em centímetros): "));
var peso = parseFloat(prompt("Digite seu peso: "));

function calcIMC(altura, peso) {
    return peso / (Math.pow(altura / 100, 2));
}

function mensagem(imc) {
    if (imc < 18.5) {
        return "Magreza\nGrau: 0";
    } else if (imc < 25) {
        return "Normal\nGrau: 0";
    } else if (imc < 30) {
        return "Sobrepeso\nGrau: 1";
    } else if (imc < 40) {
        return "Obesidade\nGrau: 2";
    } else {
        return "Obesidade grave\nGrau: 3";
    }
}

var imc = calcIMC(altura, peso).toFixed(2);
alert("IMC: " + imc);
alert("Classificação: " + mensagem(imc));
