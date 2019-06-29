var numero = document.querySelector('#numero');
var operacao = '+';
var resultadoAtual = 0;
var ultimoNumero = resultadoAtual;

function adicionarNumero(n) {
	if (numero.innerHTML.length < 8) {
		if (numero.innerHTML != 0) {
			numero.innerHTML += n;
		} else {
			numero.innerHTML = n;
		}
	}
}

function adicao() {
	resultadoAtual = eval(resultadoAtual + operacao + numero.innerHTML);
	operacao = '+';
	numero.innerHTML = 0;
}

function subtracao() {
	resultadoAtual = eval(resultadoAtual + operacao + numero.innerHTML);
	operacao = '-';
	numero.innerHTML = 0;
}

function multiplicacao() {
	resultadoAtual = eval(resultadoAtual + operacao + numero.innerHTML);
	operacao = '*';
	numero.innerHTML = 0;
}

function divisao() {
	resultadoAtual = eval(resultadoAtual + operacao + numero.innerHTML);
	operacao = '/';
	numero.innerHTML = 0;
}

function igual() {
	resultadoAtual = (parseInt(eval(resultadoAtual + operacao + numero.innerHTML)*10000))/10000;
	numero.innerHTML = resultadoAtual;
	operacao = '+';
	resultadoAtual = 0;
}

function ponto() {}

function limparDisplay() {}

function apagarDigito() {}

function porcentagem() {}
