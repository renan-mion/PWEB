var escolha = prompt("1 - receber três números e retornar o maior" + 
"\n2 - receber três números e retorná-los em ordem crescente" + 
"\n3 - receber uma string e retornar se é palíndromo" + 
"\n4 - receber 3 valores, informar e forma triângulo e de que tipo")

function maior(val1, val2, val3) {
    return Math.max(val1, val2, val3);
}

function crescente(val1, val2, val3) {
    return [val1, val2, val3].sort((a, b) => a - b);
}

function palindromo(texto) {
    var reversa = texto.toLowerCase().split('').reverse().join('');
    if (texto.toLowerCase() == reversa) {
        return "É palíndromo";
    } else {
        return "Não é palíndromo";
    };
}

function triangulo(l1, l2, l3) {
    if (l1 > l2 + l3 || l2 > l1 + l3 || l3 > l1 + l2) {
        return "Não é triângulo";
    } else if (l1 == l2 && l2 == l3) {
        return "Triângulo equilátero";
    } else if ((l1 == l2 && l1 != l3) || (l1 == l3 && l1 != l2) || (l2 == l3 && l2 != l1)) {
        return "Triângulo isósceles";
    } else if (l1 != l2 && l1 != l3) {
        return "Triângulo escaleno";
    }
}

if (escolha == 1 || escolha == 2 || escolha == 4) {
    var val1 = parseFloat(prompt("Valor 1: "));
    var val2 = parseFloat(prompt("Valor 2: "));
    var val3 = parseFloat(prompt("Valor 3: "));

    if (escolha == 1) {
        alert("Maior: " + maior(val1, val2, val3));
    }

    if (escolha == 2) {
        alert(crescente(val1, val2, val3));
    }

    if (escolha == 4) {
        alert(triangulo(val1, val2, val3));
    }
} else if (escolha == 3) {
    var texto = prompt("Digite um texto: ");
    alert(palindromo(texto));
}