function abre(imagem) {
    imagem.src = "imagens/Janela Aberta.jpg"
    texto = document.getElementById("estado-janela");
    texto.innerHTML = "Janela Aberta";
}

function fecha(imagem) {
    imagem.src = "imagens/Janela Fechada.jpg";
    texto = document.getElementById("estado-janela");
    texto.innerHTML = "Janela Fechada";
}

function quebra(imagem) {
    imagem.src = "imagens/Janela Quebrada.jpg";
    texto = document.getElementById("estado-janela");
    texto.innerHTML = "Janela Quebrada";
}

alert("Abra a janela");