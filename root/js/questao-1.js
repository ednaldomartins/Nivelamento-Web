function calcular() {
    //recebe os valores
    n1 = parseInt(prompt("n1"));
    n2 = parseInt(prompt("n2"));

    //validar valores recebidos pelo usuário
    try {
        validarValores(n1, n2);
        //selecionar a <div> q vai ser escrita, e escrever
        var output = document.querySelector("#output");    
        escrever(output, n1, n2)
    } catch(e) {
        alert(e);
    }   
}   

function validarValores(n1, n2) {
    //lancar throw
    if(isNaN(n1) | isNaN(n2)) 
        throw new Error("Digite apenas números");
}

function escrever(output, n1, n2) {
    //limpar texto anterior
    output.innerHTML = "";
    //escrever na <div> output
    output.innerHTML += n1 + " + " + n2 + " | " + (n1+n2) + "<p>" +
                        n1 + " * " + n2 + " | " + (n1*n2) + "<p>" +
                        n1 + " / " + n2 + " | " + (n1/n2) + "<p>" +
                        n1 + " % " + n2 + " | " + (n1%n2) + "<p>";
}