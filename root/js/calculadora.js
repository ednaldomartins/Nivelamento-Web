var numero = document.querySelector('#numero');
var operador = '+';
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
	operacao('+');
}

function subtracao() {
	operacao('-');
}

function multiplicacao() {
	operacao('*');
}

function divisao() {
	operacao('/');
}

function operacao(novoOperador) {
	resultadoAtual = eval(resultadoAtual + operador + numero.innerHTML);
	operador = novoOperador;
	numero.innerHTML = 0;
}

function igual() {
	resultadoAtual = parseInt(eval(resultadoAtual + operador + numero.innerHTML) * 10000) / 10000;
	numero.innerHTML = resultadoAtual;
	operador = '+';
	resultadoAtual = 0;
}

function ponto() {}

function limparDisplay() {}

function apagarDigito() {}

function porcentagem() {}
