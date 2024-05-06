function validar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
    var pesquisa = document.forms["form"]["pesquisa"].value;

    if (nome.length < 10) {
        alert("Nome deve ter pelo menos 10 caracteres");
        return false;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Email inválido");
        return false;
    }
    if (comentario.length < 20) {
        alert("Comentário deve ter no mínimo 20 caracteres");
        return false;
    }
    if (pesquisa != "sim" && pesquisa != "nao") {
        alert("Por favor, selecione se é a primeira vez nesta página");
        return false;
    }

    if (pesquisa == "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }

    return true;
}