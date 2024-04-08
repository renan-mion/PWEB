var media = 0;
var maior = 0;
var menor = 0;
var pessimo = 0;
var positivas = 0;
var mulher = 0;
var homem = 0;

for (var i=0; i < 45; i++) {
    var idade = parseInt(prompt("Idade: "));
    var sexo = prompt("Sexo: ");
    var opiniao = prompt("Opinião: ");

    media += idade;

    if (idade > maior)
        maior = idade;
    
    if (i == 0) {
        menor = idade;
    } else if (idade < menor) {
        idade = menor;
    }

    if (opiniao == 1)
        pessimo++;

    if (opiniao == 4 || opiniao == 3)
        positivas++;

    if (sexo.toUpperCase() == "M")
        homem++;

    if (sexo.toUpperCase() == "F")
        mulher++;
}

alert("Média de idade: " + media / 45 + 
"\nIdade da pessoa mais velha: " + maior +
"\nIdade da pessoa mais nova: " + menor +
"\nQuantidade de respostas péssimas: " + pessimo +
"\nPorcentagem de respostas ótimas e boas: " + positivas / 45 * 100 + "%" + 
"\nNúmero de mulheres: " + mulher + 
"\nNúmero de homens: " + homem);
