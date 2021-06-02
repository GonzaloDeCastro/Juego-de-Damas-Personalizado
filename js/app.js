
var tamano = 8;
var tablero = document.getElementById("tablero");
for (var i=0; i<tamano; i++) {

    // creamos la fila
    var fila=document.createElement("div");
    fila.classList.add("fila")
    for (var j=0; j<tamano; j++) {

        // creamos cada elemento de la fila
        var div=document.createElement("div");
        div.classList.add("recuadro")
        fila.appendChild(div);
    }
    tablero.appendChild(fila);
}