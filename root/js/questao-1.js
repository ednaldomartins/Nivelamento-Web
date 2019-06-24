
function calcular() {
    //recebe os valores
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);

    //validar valores recebidos pelo usuário
    try {
        validarValores(n1, n2);   
        //contruindo tabela
        escrever(n1, n2);
    } catch(e) {
        alert(e);
    }   
}   

function validarValores(n1, n2) {
    //lancar throw
    if(isNaN(n1) | isNaN(n2)) 
        throw "Aviso: Digite o outro número."
}

function escrever(n1, n2) {
    // ? jeito errado de apagar o corpo da tabela ?
    document.querySelector("#corpoTabela").innerHTML = "";

    //addLinha(_, truncar tudo apos 3 casas decimais)
    adicionarLinha( (n1 + " + " + n2), (parseInt((n1+n2)*1000)/1000)  );
    adicionarLinha( (n1 + " * " + n2), (parseInt((n1*n2)*1000)/1000)  );
    adicionarLinha( (n1 + " / " + n2), (parseInt((n1/n2)*1000)/1000)  );
    adicionarLinha( (n1 + " % " + n2), (parseInt((n1%n2)*1000)/1000) );
}

function escreverDiv(output, n1, n2) {
    //limpar texto anterior
    output.innerHTML = "";
    //escrever na <div> output
    output.innerHTML += n1 + " + " + n2 + " | " + (n1+n2) + "<p>" +
                        n1 + " * " + n2 + " | " + (n1*n2) + "<p>" +
                        n1 + " / " + n2 + " | " + (n1/n2) + "<p>" +
                        n1 + " % " + n2 + " | " + (n1%n2) + "<p>";
}

function adicionarLinha( n1, n2) {
    // selecionar o que vai ser utilizado
    var corpoTabela = document.querySelector("#corpoTabela");
    var templateTabela = document.querySelector("#templateTabela");
    var listaTd = templateTabela.content.querySelectorAll("td");

    //criar linha e adicionar ao corpo
    listaTd[0].textContent = n1;
    listaTd[1].textContent = n2;
    var novaLinha = document.importNode(templateTabela.content, true);
    corpoTabela.appendChild(novaLinha);
}