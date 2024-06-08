document.addEventListener('DOMContentLoaded', function () {
    var tarefa = JSON.parse(localStorage.getItem('tarefaAtual'));

    if (tarefa) {
        document.getElementById('titulo').value = tarefa.titulo;
        document.getElementById('descricao').value = tarefa.descricao;
        document.getElementById('data').value = converterDataISO(tarefa.data);

        var radios = document.getElementsByName('prioridade');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].value === tarefa.prioridade) {
                radios[i].checked = true;
                break;
            }
        }
    }
});

function atualizarTarefa() {
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

    var tarefaAtualizada = { titulo, descricao, data, prioridade };

    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    var index = localStorage.getItem('tarefaIndex');
    tarefas[index] = tarefaAtualizada;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    localStorage.removeItem('tarefaAtual');
    localStorage.removeItem('tarefaIndex');

    window.location.href = 'index.html';
}

function converterDataISO(data) {
    var partes = data.split('/');
    var dia = partes[0].padStart(2, '0');
    var mes = partes[1].padStart(2, '0');
    var ano = partes[2];
    return `${ano}-${mes}-${dia}`;
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