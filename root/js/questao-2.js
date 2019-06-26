function reajustarSalario() {
	var inputSalario = parseFloat(document.querySelector('#inputsalario').value);
	if (inputSalario > 0) {
		document.querySelector('#salarioatual').innerHTML = '<b>R$ ' + inputSalario.toFixed(2) + '</b>';
		document.querySelector('#novosalario').innerHTML = '<b>R$ ' + aumento(inputSalario) + '</b>';
	}
}

function aumento(salario) {
	let aumento = salario * calculoDoPercentual(salario);
	document.querySelector('#aumento').innerHTML = '<b>R$ ' + aumento.toFixed(2) + '</b>';
	return (salario + aumento).toFixed(2);
}

function calculoDoPercentual(salario) {
	let percentual = 0;
	if (salario <= 954.0) {
		percentual = 0.15;
	} else if (salario <= 1903.97) {
		percentual = 0.1;
	} else if (salario <= 2826.65) {
		percentual = 0.075;
	} else {
		percentual = 0.05;
	}
	document.querySelector('#percentual').innerHTML = '<b>' + percentual * 100 + '%</b>';
	return percentual;
}
