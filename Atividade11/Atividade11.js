var Funcionario1 = new Object();
Funcionario1.matricula = 111111;
Funcionario1.nome = "Paulo";
Funcionario1.funcao = "Analista de testes";

function Mostrar(obj) {
    return `Matrícula: ${obj.matricula}\nNome: ${obj.nome}\nFunção: ${obj.funcao}`;
}

alert(Mostrar(Funcionario1));

var Funcionario2 = {
    matricula: 222222,
    nome: "Elisa",
    funcao: "Scrum Master"
}

alert(Mostrar(Funcionario2));


function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

var Funcionario3 = new Funcionario(333333, "Jailson", "Gerente de vendas");

alert(Mostrar(Funcionario3));
