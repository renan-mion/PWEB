function transformar() {
    var texto = document.getElementById("texto").value;
    var maiuscula = document.getElementById("maiuscula");
    var minuscula = document.getElementById("minuscula");
    var saida = "";

    if (maiuscula.checked) {
        saida = texto.toUpperCase();
    } else if (minuscula.checked) {
        saida = texto.toLowerCase();
    } else {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    document.getElementById("texto").value = saida;
}