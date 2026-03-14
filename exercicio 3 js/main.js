const form = document.getElementById("form-subtracao")

form.addEventListener("submit", function(e){

    e.preventDefault()

    const valorMaior = Number(document.getElementById("valor-maior").value)
    const valorMenor = Number(document.getElementById("valor-menor").value)

    if (valorMaior > valorMenor){

        const resultado = valorMaior - valorMenor

        document.getElementById("resultado").innerHTML =
        "Resultado da subtração: " + resultado

    } else {

        alert("O primeiro valor deve ser maior que o segundo")

    }

})


