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

/**
 * Link abaixo explicando como utilizar RegExp() em javascript.
 * ! link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
 */
function ponto() {
	if (numero.innerHTML.search('\\.') === -1) numero.innerHTML += '.';
}

function limparDisplay() {
	numero.innerHTML = 0;
}

function apagarDigito() {
	if (numero.textContent.length > 1) {
		numero.innerHTML = numero.textContent.substring(0, numero.textContent.length - 1);
	} else {
		numero.innerHTML = 0;
	}
}

function porcentagem() {
	//! A forma de calcular a porcentagem varia de acordo com o sinal da operacao.
	/**
	 * Quando +|- recalculamos o valor guardado aplicando um novo baseado na porcentagem
	 * exemplo: 950 + 10% = 1045, 950 - 10% = 855
	 */
	if(operador.search('\\+|\\-') !== -1)
		numero.innerHTML = resultadoAtual * (numero.textContent / 100)
	/**
	 * Quando *|/ o resultado é a extração da porcentagem ou o valor inverso da porcentagem respectivamente
	 * exemplo: 950 * 10% = 95,  950 / 10% = 9500 (inverso de: 9500 * 10% = 950)
	 */
	else 
		numero.innerHTML = (numero.textContent / 100);

	igual();
}
