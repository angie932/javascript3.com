let generar_color = document.querySelector("#color");

generar_color.addEventListener('click', genere_un_color)

function genere_un_color() {
    let letras_numeros, color;
    letras_numeros = "0123456789ABCDEF";
    color = "#";

    for (var contador = 0; contador < 6; contador++) {
        color = color + letras_numeros[Math.floor(Math.random() * 16)];
    }

    document.getElementById("contenido_color").style.background = color;

    document.getElementById("1color").innerHTML = color;
}