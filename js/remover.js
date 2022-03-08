var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        paiDoAlvo.remove();
    }, 500);

});