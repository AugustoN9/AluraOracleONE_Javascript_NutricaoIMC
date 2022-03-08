var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("buscando pacientes....");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);


        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);

    });

    xhr.send();

});