var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);

titulo.textContent = "Nutricão Skillpower";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdALtura = paciente.querySelector(".info-altura");
    var altura = tdALtura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválido");
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

    var tdClassifica = paciente.querySelector(".info-classifica");
    var classifica = classificaImc(calculaImc)
    tdClassifica.textContent = classifica;
}

function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}


function classificaImc(imc_calculado) {

    var imc_calculado = 'abc';

    var classificado = "";


    if (imc_calculado >= 40.00) {
        classificado = "Obecidade Grau III ou Mórbida";

    } else if (imc_calculado >= 35.00 && imc <= 39.90) {
        classificado = "Obecidade Grau II";

    } else if (imc_calculado >= 30.00 && imc <= 34.90) {
        classificado = "Obecidade Grau I";

    } else if (imc_calculado >= 25.00 && imc <= 29.90) {
        classificado = "Sobrepeso";

    } else if (imc_calculado >= 18.50 && imc <= 24.90) {
        classificado = "Peso Normal";

    } else if (imc_calculado < 18.50) {
        classificado = "Abaixo do Peso";

    } else {
        classificado = "Indefinido";
    }

    return classificado;

}