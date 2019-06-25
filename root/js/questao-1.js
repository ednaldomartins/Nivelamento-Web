// selecionar o que vai ser utilizado
var corpoTabela = document.querySelector('#corpoTabela');
var templateTabela = document.querySelector('#templateTabela');
var listaTd = templateTabela.content.querySelectorAll('td');

function calcular() {
	//recebe os valores
	var n1 = parseFloat(document.querySelector('#n1').value);
	var n2 = parseFloat(document.querySelector('#n2').value);

	//validar valores recebidos pelo usuário e criar tabela
	try {
		validarValores(n1, n2);
		criarTabela(n1, n2);
	} catch (e) {
		alert(e);
	}
}

function validarValores(n1, n2) {
	//lancar throw
	if (isNaN(n1) | isNaN(n2)) throw 'Aviso: Digite o outro número.';
}

function criarTabela(n1, n2) {
	// ? jeito errado de apagar o corpo da tabela ?
	corpoTabela.innerHTML = '';

	//addLinha(_, truncar tudo apos 3 casas decimais)
	adicionarLinha(n1 + ' + ' + n2, parseInt((n1 + n2) * 1000) / 1000);
	adicionarLinha(n1 + ' * ' + n2, parseInt(n1 * n2 * 1000) / 1000);
	adicionarLinha(n1 + ' / ' + n2, parseInt(n1 / n2 * 1000) / 1000);
	adicionarLinha(n1 + ' % ' + n2, parseInt((n1 % n2) * 1000) / 1000);
}

function adicionarLinha(n1, n2) {
	//criar linha e adicionar ao corpo
	listaTd[0].textContent = n1;
	listaTd[1].textContent = n2;
	var novaLinha = document.importNode(templateTabela.content, true);
	corpoTabela.appendChild(novaLinha);
}
