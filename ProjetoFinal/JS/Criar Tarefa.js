document.addEventListener('DOMContentLoaded', function () {
    var tituloInput = document.getElementById('titulo');
    var descricaoTextarea = document.getElementById('descricao');

    tituloInput.addEventListener('focus', function () {
        this.setAttribute('placeholder', '');
    });

    tituloInput.addEventListener('blur', function () {
        this.setAttribute('placeholder', 'Escreva um título');
    });

    descricaoTextarea.addEventListener('focus', function () {
        this.setAttribute('placeholder', '');
    });

    descricaoTextarea.addEventListener('blur', function () {
        this.setAttribute('placeholder', 'Escreva uma descrição');
    });
});

function salvarTarefa() {
    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var data = document.getElementById('data').value;
    var prioridade = document.querySelector('input[name="prioridade"]:checked').value;

    var partes = data.split('-');
    data = `${partes[2]}/${partes[1]}/${partes[0]}`;

    var dataTarefa = parseData(data);
    var dataAtual = parseData(formatarData(new Date()));

    if (dataTarefa < dataAtual) {
        alert("A data da tarefa não pode ser menor que a data atual.");
        return;
    }

    var novaTarefa = {
        titulo: titulo,
        descricao: descricao,
        data: data,
        prioridade: prioridade
    };

    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    localStorage.setItem('adicionarTarefa', 'true');

    window.location.href = 'index.html';
}

function formatarData(data) {
    var dia = data.getDate().toString().padStart(2, '0');
    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
    var ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function parseData(data) {
    var partes = data.split('/');
    var dia = parseInt(partes[0]);
    var mes = parseInt(partes[1]) - 1; 
    var ano = parseInt(partes[2]);
    return new Date(ano, mes, dia);
  }