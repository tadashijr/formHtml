//input text
var nome = document.getElementById('nome')
var sobrenome = document.getElementById('sobrenome')
var email = document.getElementById('email')

//input radio
var radio = document.querySelector('[name="devweb"]:checked')

//input select
var select = document.getElementById('senioridade')

//input checkbox

function checkbox() {

    var checkbox = document.querySelectorAll(".tecnologias")

    var selecionados = 0

    checkbox.forEach(function (elements) {

        selecionados++

        if (elements.checked) {
            selecionados++
        }
    })

}

// função do botão concluir
function concluido() {

    checkbox()

    console.log(nome.value, sobrenome.value, email.value, radio.value, select.value, selecionados, experiencia.value);
}