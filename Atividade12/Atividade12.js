function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcArea = function() {
        return this.base * this.altura;
    }
}

var base = parseFloat(prompt("Digite a base do retângulo"));
var altura = parseFloat(prompt("Digite a altura do retângulo"));

var objRetangulo = new Retangulo(base, altura);
alert("Área do retângulo: " + objRetangulo.calcArea());


class Conta {
    constructor(numConta) {
        this._numConta = numConta;
    }

    get numConta() {
        return this._numConta;
    }

    set nomeCorrentista(nomeCorrentista) {
        this._nomeCorrentista = nomeCorrentista;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set banco(banco) {
        this._banco = banco;
    }

    get banco() {
        return this._banco;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }
}

class ContaCorrente extends Conta {
    constructor(numConta, saldoEspecial) {
        super(numConta);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }
}

class ContaPoupanca extends Conta {
    constructor(numConta, juros, dataVencimento) {
        super(numConta);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }
}

var numContaCorrente = parseInt(prompt("Digite o número da conta corrente:"));
var saldoEspecial = parseFloat(prompt("Digite o saldo especial"));
var objContaCorrente = new ContaCorrente(numContaCorrente, saldoEspecial);
objContaCorrente.nomeCorrentista = prompt("Digite o nome:");
objContaCorrente.banco = prompt("Digite o banco:");
objContaCorrente.saldo = parseFloat(prompt("Digite o saldo:"));

alert("Nome correntista: " + objContaCorrente.nomeCorrentista
+ "\nBanco: " + objContaCorrente.banco
+ "\nNúmero da conta: " + objContaCorrente.numConta
+ "\nSaldo: " + objContaCorrente.saldo
+ "\nSaldo Especial: " + objContaCorrente.saldoEspecial);



var numContaPoupanca = parseInt(prompt("Digite o número da conta poupanca:"));
var juros = parseFloat(prompt("Digite a taxa de juros:"));
var dataVencimento = prompt("Digite a data de vencimento:");
var objContaPoupanca = new ContaPoupanca(numContaPoupanca, juros, dataVencimento);
objContaPoupanca.nomeCorrentista = prompt("Digite o nome:");
objContaPoupanca.banco = prompt("Digite o banco:");
objContaPoupanca.saldo = parseFloat(prompt("Digite o saldo:"));

alert("Nome correntista: " + objContaPoupanca.nomeCorrentista
+ "\nBanco: " + objContaPoupanca.banco
+ "\nNúmero da conta: " + objContaPoupanca.numConta
+ "\nSaldo: " + objContaPoupanca.saldo
+ "\nSaldo Especial: " + objContaPoupanca.juros
+ "\nData de Vencimento: " + objContaPoupanca.dataVencimento);
