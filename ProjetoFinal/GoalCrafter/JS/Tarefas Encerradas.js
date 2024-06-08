document.addEventListener('DOMContentLoaded', function () {
    var tarefasEncerradas = JSON.parse(localStorage.getItem('tarefasEncerradas')) || [];

    tarefasEncerradas.forEach(function(tarefa) {
        adicionarTarefaEncerrada(tarefa.titulo, tarefa.descricao, tarefa.data, tarefa.prioridade);
    });

    document.getElementById('restaurar-tarefas').addEventListener('click', function () {
        const tarefasElements = document.querySelectorAll('#tarefas-encerradas .input-group');
        let tarefasMarcadas = [];
        let indicesMarcados = [];

        tarefasElements.forEach(function (tarefaElement, idx) {
            const checkbox = tarefaElement.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
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
            var tarefasPendentes = JSON.parse(localStorage.getItem('tarefas')) || [];

            tarefasPendentes = tarefasPendentes.concat(tarefasMarcadas);
            localStorage.setItem('tarefas', JSON.stringify(tarefasPendentes));

            indicesMarcados.sort((a, b) => b - a).forEach(function (index) {
                tarefasEncerradas.splice(index, 1);
            });
            localStorage.setItem('tarefasEncerradas', JSON.stringify(tarefasEncerradas));

            window.location.href = 'Tarefas Encerradas.html';
        } else {
            alert('Por favor, selecione uma tarefa para restaurar.');
        }
    });
});

function adicionarTarefaEncerrada(titulo, descricao, data, prioridade) {
    var divPrincipal = document.createElement('div');
    divPrincipal.className = 'input-group mb-3';

    var divSecundaria = document.createElement('div');
    divSecundaria.className = 'input-group-text';

    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input';

    var text = document.createElement('input');
    text.className = 'form-control';
    text.value = `${titulo} \t ${descricao} \t ${data} \t ${prioridade}`;
    text.readOnly = true;

    divSecundaria.appendChild(checkbox);
    divPrincipal.appendChild(divSecundaria);
    divPrincipal.appendChild(text);

    document.getElementById('tarefas-encerradas').appendChild(divPrincipal);
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