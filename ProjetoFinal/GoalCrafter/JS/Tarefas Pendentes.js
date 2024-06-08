document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('adicionarTarefa') === 'true') {
        localStorage.removeItem('adicionarTarefa');
    }

    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    if (tarefas.length > 0) {
        var mensagemSemTarefas = document.getElementById('mensagem');
        if (mensagemSemTarefas) {
            mensagemSemTarefas.remove();
        }
    }

    tarefas.forEach(function (tarefa) {
        adicionarTarefa(tarefa.titulo, tarefa.descricao, tarefa.data, tarefa.prioridade);
    });

    document.getElementById('alterar-tarefa').addEventListener('click', function () {
        const tarefasElements = document.querySelectorAll('#tarefas .input-group');
        let tarefasMarcadas = [];
        let index = null;

        tarefasElements.forEach(function (tarefaElement, idx) {
            const checkbox = tarefaElement.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                const text = tarefaElement.querySelector('.form-control').value.split('\t');
                tarefasMarcadas.push({
                    titulo: text[0].trim(),
                    descricao: text[1].trim(),
                    data: text[2].trim(),
                    prioridade: text[3].trim()
                });
                index = idx;
            }
        });

        if (tarefasMarcadas.length > 1) {
            alert('Por favor, selecione apenas uma tarefa para alterar.');
        } else if (tarefasMarcadas.length === 1) {
            localStorage.setItem('tarefaAtual', JSON.stringify(tarefasMarcadas[0]));
            localStorage.setItem('tarefaIndex', index);
            window.location.href = 'Alterar Tarefa.html';
        } else {
            alert('Por favor, selecione uma tarefa para alterar.');
        }
    });

    document.getElementById('encerrar-tarefas').addEventListener('click', function () {
        const tarefasElements = document.querySelectorAll('#tarefas .input-group');
        let tarefasMarcadas = [];
        let indicesMarcados = [];

        tarefasElements.forEach(function (tarefaElement, idx) {
            const checkbox = tarefaElement.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                const text = tarefaElement.querySelector('.form-control').value.split('\t');
                tarefasMarcadas.push({
                    titulo: text[0].trim(),
                    descricao: text[1].trim(),
                    data: text[2].trim(),
                    prioridade: text[3].trim()
                });
                indicesMarcados.push(idx);
            }
        });

        if (tarefasMarcadas.length > 0) {
            var tarefasEncerradas = JSON.parse(localStorage.getItem('tarefasEncerradas')) || [];
            if (!Array.isArray(tarefasEncerradas)) {
                console.error('Erro: tarefasEncerradas não é um array', tarefasEncerradas);
                tarefasEncerradas = [];
            }

            tarefasEncerradas = tarefasEncerradas.concat(tarefasMarcadas);
            localStorage.setItem('tarefasEncerradas', JSON.stringify(tarefasEncerradas));

            indicesMarcados.sort((a, b) => b - a).forEach(function (index) {
                tarefas.splice(index, 1);
            });
            localStorage.setItem('tarefas', JSON.stringify(tarefas));

            window.location.href = 'index.html';

            if (tarefas.length === 0) {
                criarMensagemSemTarefas();
            }
        } else {
            alert('Por favor, selecione uma tarefa para encerrar.');
        }
    });
});

function adicionarTarefa(titulo, descricao, data, prioridade) {
    var divPrincipal = document.createElement('div');
    divPrincipal.className = 'input-group mb-3';

    var divSecundaria = document.createElement('div');
    divSecundaria.className = 'input-group-text';

    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input';

    var dataTarefa = parseData(data);

    var text = document.createElement('input');
    text.className = 'form-control';
    text.value = `${titulo} \t ${descricao} \t ${data} \t ${prioridade}`;
    text.readOnly = true;

    divSecundaria.appendChild(checkbox);
    divPrincipal.appendChild(divSecundaria);
    divPrincipal.appendChild(text);

    var dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);

    var timeDifference = dataTarefa - dataAtual;
    var diferencaDias = timeDifference / (1000 * 60 * 60 * 24);

    if (diferencaDias < 0) {
        var divAviso = document.createElement('div');
        divAviso.className = 'input-group-text warning';

        var redDot = document.createElement('span');
        redDot.className = 'gray-dot';
        divAviso.appendChild(redDot);

        var textoAviso = document.createElement('span');
        textoAviso.className = 'texto-aviso-gray';
        textoAviso.textContent = 'Atrasada';
        divAviso.appendChild(textoAviso);

        divPrincipal.appendChild(divAviso);
    } else if (diferencaDias <= 1) {
        var divAviso = document.createElement('div');
        divAviso.className = 'input-group-text warning';

        var redDot = document.createElement('span');
        redDot.className = 'red-dot';
        divAviso.appendChild(redDot);

        var textoAviso = document.createElement('span');
        textoAviso.className = 'texto-aviso-red';
        textoAviso.textContent = 'Próxima de encerrar';
        divAviso.appendChild(textoAviso);

        divPrincipal.appendChild(divAviso);
    }

    document.getElementById('tarefas').appendChild(divPrincipal);

    var mensagemSemTarefas = document.getElementById('mensagem');
    if (mensagemSemTarefas) {
        mensagemSemTarefas.remove();
    }
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

function criarMensagemSemTarefas() {
    var h2 = document.createElement('h2');
    h2.id = 'mensagem';
    h2.textContent = 'Sem tarefas ainda';
    document.getElementById('tarefas').appendChild(h2);
}