function calcular() {
    var output = document.querySelector("#output");
    n1 = parseInt(prompt("n1"));
    n2 = parseInt(prompt("n2"));

    output.innerHTML += "n1 + n2 |" + (n1+n2) + "<p>";
    output.innerHTML += "n1 * n2 |" + (n1*n2) + "<p>";
    output.innerHTML += "n1 / n2 |" + (n1/n2) + "<p>";
    output.innerHTML += "n1 % n2 |" + (n1%n2) + "<p>";
}   