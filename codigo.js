let fotosMarcadas = 0;

function marcar(evt) {

    if(evt.target.dataset.marcada == undefined) {
        evt.target.style.filter = "sepia()";
        evt.target.dataset.marcada = true;
        fotosMarcadas++;
    } else if(evt.target.dataset.marcada == "true"){
        evt.target.style.filter = "";
        evt.target.dataset.marcada = false;
        fotosMarcadas--;
    } else if(evt.target.dataset.marcada == "false"){
        evt.target.style.filter = "sepia()";
        evt.target.dataset.marcada = true;
        fotosMarcadas++;
    }
    document.getElementById("marcadas").textContent = fotosMarcadas;
}

const fotos = document.querySelectorAll("#fotos img")
for (const foto of fotos) {
    foto.addEventListener("click", marcar);
}